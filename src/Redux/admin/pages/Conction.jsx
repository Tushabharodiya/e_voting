import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_CONNECTION_PENDING, POST_COLLECTION_PENDING, POST_CONNECTION_PENDING } from '../action';
import axios from 'axios';
import { BASE_URL, DELETE_CONNECTION } from '../../constnt';

const Conction = () => {
  const collection = useSelector((state) => state.adminReducer);
  const party = useRef();
  const election = useRef();
  let dispatch = useDispatch();

  //add collection
  const addcolletion = () => {
    const data = {
      election: election.current.value,
      party: party.current.value,
    };
    console.log(data);
    dispatch({ type: POST_CONNECTION_PENDING, payload: data });
  };

  //remove collection
  let remove = async (connection) => {
    console.log(connection);

    dispatch({ type: DELETE_CONNECTION_PENDING, payload: connection })
  }

  return (
    <div>
      <div className="party-data election">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="admintable">
                <table cellPadding="8px">
                  <thead>
                    <tr>
                      <th>Election Name</th>
                      <th>Party Logo</th>
                      <th>Party Name</th>
                      <th>View/Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {collection.connection.map((val, index) => (
                      <tr key={index}>
                        <td>{val.election?.election_name}</td>
                        <td><img src={val.party?.party_logo} alt="party logo" /></td>
                        <td>{val.party?.party_name}</td>
                        <td><button><i className="fa-regular fa-pen-to-square"></i></button>
                          <button onClick={() => remove(val._id)}><i className="fa-solid fa-trash"></i></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="collection-card">
                <div className="form-card">
                  <div className="form-data">
                    <h2>Details</h2>
                    <div className="form-body mt-3">
                      <label className='d-block'>Select Election Name:
                        <select className="form-select mt-2 mb-3" ref={election} >
                          {collection.election?.map((val, index) => (
                            <option key={index} value={val._id}>{val.election_name}</option>
                          ))}
                        </select>
                      </label>
                      <label className='d-block'>Select Party Name:
                        <select className="form-select mt-2 mb-3" ref={party} >
                          {collection.party?.map((val, index) => (
                            <option key={index} value={val._id}>{val.party_name}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <div className="collection_btn text-center">
                      <button className='button' onClick={addcolletion}>Add Party</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Conction
