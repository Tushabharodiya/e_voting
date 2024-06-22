import React from 'react'
import { Button } from '../../atoms/Atoms'
import Table from '../../component/Table'
import { useSelector } from 'react-redux'
import Card from '../../component/Card'

const Dashboard = () => {
  let voter = useSelector((state) => state.userReducer);
  let user = useSelector((state) => state.adminReducer)
  console.log(user);
  // Initialize an empty object to keep track of party votes
  const partyVotes = {};

  // Loop through voters to accumulate votes for each party
  voter.user?.forEach((val) => {
    const partyName = val?.party.party_name;
    if (partyVotes[partyName]) {
      partyVotes[partyName].votes += 1;
    } else {
      partyVotes[partyName] = {
        logo: val?.party.party_logo,
        votes: 1,
      };
    }
  });

  // Convert partyVotes object to an array for rendering
  const partyVoteList = Object.entries(partyVotes);

  const totalVotes = partyVoteList.reduce((sum, [, details]) => sum + details.votes, 0);
  const totalVoters = user.voter?.length || 0;
  const totalparty = user.party?.length || 0;

  let vote = [
    {
      name: "uttatr parrdesh",
      count: `Total vote : ${totalVotes}`,
    },
    {
      name: "uttatr parrdesh",
      count: `Total users : ${totalVoters}`,
    },
    {
      name: "uttatr parrdesh",
      count: `Total party : ${totalparty}`,
    }
  ]

  return (
    <div>
      <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="dashboard-data">
                <div className="row">
                  {
                    vote.map((val, index) => (
                      <div className="col-lg-4">
                        <Card name={val.name} count={val.count}/>
                      </div>
                    ))
                  }
                </div>
                <div className="row">
                  <div className="col-lg-11">
                    <div className="admintable">
                      <table cellPadding="8px">
                        <thead>
                          <tr>
                            <th>Symbol</th>
                            <th>Indian Political Party</th>
                            <th>Votes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            partyVoteList.map(([partyName, details], index) => (
                              <React.Fragment key={index}>
                                <tr>
                                  <td><img src={details.logo} alt="logo image" /></td>
                                  <td>{partyName}</td>
                                  <td>{details.votes}</td>
                                </tr>
                              </React.Fragment>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard
