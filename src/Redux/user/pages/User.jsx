import React from 'react'
import { Navbar } from '../../atoms/Atoms'
import { useDispatch, useSelector } from 'react-redux';
import { POST_USER_PENDING } from './action';
import { useNavigate } from 'react-router-dom';

const User = () => {
  let user = JSON.parse(localStorage.getItem("user"))
  console.log(user);
  let dispatch = useDispatch();

  let profile = [
    {
      name: user.name,
      fatherName: user.fatherName,
      cardNo: user.cardNo,
      sex: user.sex,
    }
  ]

  //get connection

  let connection = useSelector((state) => state.adminReducer)
  console.log(connection.connection);
  let navigate = useNavigate()

  let userVote = (val) => {
    let data = {
      user: user._id,
      party: val?.party._id,
      election: val?.election._id,
    }
    console.log(data);
    dispatch({ type: POST_USER_PENDING, payload: data })
    document.getElementById('voteButton').disabled = true;
    setTimeout(function () {
      logout();
    }, 3000);
  }
  function logout() {
    navigate("/userlogin")
  }


  return (
    <div>
      {
        profile.map((val, index) => (
          <React.Fragment key={index}>
            <Navbar name={val.name} fatherName={val.fatherName} cardNo={val.cardNo} sex={val.sex} />
          </React.Fragment>
        ))
      }

      <div className="user-table mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="sidebar">
                <ul>
                  <li><a href="#"> <i className="fa-solid fa-house pe-2"></i>home</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="admintable">
                <table cellPadding="8px">
                  <thead>
                    <tr>
                      <th>symbol</th>
                      <th>indian politicle party</th>
                      <th>button</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      connection.connection?.map((val, index) => {
                        return (
                          <React.Fragment key={index}>
                            <tr>
                              <td><img src={val?.party.party_logo} alt="party logo" /></td>
                              <td>{val?.party.party_name}</td>
                              <td><input type="radio" id="voteButton" onClick={() => userVote(val)} name='vote' /></td>
                            </tr>
                          </React.Fragment>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default User
