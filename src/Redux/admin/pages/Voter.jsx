import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_VOTER_PENDING, GET_VOTER_PENDING, POST_VOTER_PENDING } from '../action';

const Voter = () => {

  let voter = useSelector((state) => state.adminReducer)
  const [data, setdata] = useState({})

  let dispatch = useDispatch();

  //post voter
  let handle = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  let addUser = () => {
    dispatch({ type: POST_VOTER_PENDING, payload: data })
  }

  //remove user
  let remove = (voter) => {
    dispatch({ type: DELETE_VOTER_PENDING, payload: voter })
  }


  return (
    <>
      <div className="party-data voter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="plus d-flex justify-content-end align-items-center">
                <button data-bs-toggle="modal" data-bs-target="#partymodel" className='button'>ADD <i className="fa-solid fa-plus"></i></button>
              </div>
              <div className="modal fade" id="partymodel">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5">user Deatails</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="row">
                          <div className="col-6">
                            <div className="mb-3">
                              <label htmlFor='party_name'>card no : </label>
                              <input type="text" name='cardNo' className="form-control" onChange={handle} id='party_name' />
                            </div>
                            <div className="mb-3">
                              <label htmlFor='party_name'>name : </label>
                              <input type="text" name='name' className="form-control" onChange={handle} id='party_name' />
                            </div>
                            <div className="mb-3">
                              <label htmlFor='party_name'>fatherName : </label>
                              <input type="text" name='fatherName' className="form-control" onChange={handle} id='party_name' />
                            </div>
                            <div className="mb-3">
                              <label htmlFor='party_name'>sex : </label>
                              <input type="text" name='sex' className="form-control" onChange={handle} id='party_name' />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="mb-3">
                              <label htmlFor='party_name'>date of birth : </label>
                              <input type="date" name='dob' className="form-control" onChange={handle} id='party_name' />
                            </div>
                            <div className="mb-3">
                              <label htmlFor='party_name'>address : </label>
                              <input type="text" name='address' className="form-control" onChange={handle} id='party_name' />
                            </div>
                            <div className="mb-3">
                              <label htmlFor='party_name'>assemblyNoandName : </label>
                              <input type="text" name='assemblyNoandName' className="form-control" onChange={handle} id='party_name' />
                            </div>
                            <div className="mb-3">
                              <label htmlFor='party_name'>partNoandName : </label>
                              <input type="text" name='partNoandName' className="form-control" onChange={handle} id='party_name' />
                            </div>
                            <div className="mb-3">
                              <label htmlFor='party_name'>password : </label>
                              <input type="number" name='password' className="form-control" onChange={handle} id='party_name' />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="button bg-secondary" data-bs-dismiss="modal">Close</button>
                      <button className='button' onClick={addUser} data-bs-dismiss="modal">Add user</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="admintable">
                <table cellPadding="12px">
                  <thead>
                    <tr>
                      <th>cardNo</th>
                      <th>name</th>
                      <th>fatherName</th>
                      <th>sex</th>
                      <th>dob</th>
                      <th>NoandName</th>
                      <th>NoandName</th>
                      <th>password</th>
                      <th>button</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      voter.voter?.map((val, index) => {
                        return (
                          <React.Fragment key={index}>
                            <tr>
                              <td>{val.cardNo}</td>
                              <td>{val.name}</td>
                              <td>{val.fatherName}</td>
                              <td>{val.sex}</td>
                              <td>{val.dob}</td>
                              <td>{val.assemblyNoandName}</td>
                              <td>{val.partNoandName}</td>
                              <td>{val.password}</td>
                              <td><button><i className="fa-regular fa-pen-to-square"></i></button>
                                <button onClick={() => remove(val._id)}><i className="fa-solid fa-trash"></i></button></td>
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
    </>
  )
}

export default Voter
