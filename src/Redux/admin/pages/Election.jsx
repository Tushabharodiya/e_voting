import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_ELECTION_PENDING, GET_ELECTION_PENDING, POST_ELECTION_PENDING } from '../action';

const Election = () => {
  let election_name = useRef();
  let date = useRef();

  let dispatch = useDispatch();
  let election = useSelector((state) => state.adminReducer)

  //fetch election
  // useEffect(() => {
   
  // }, [])

  //add election
  let addelection = () => {
    let election = {
      election_name: election_name.current.value,
      date: date.current.value,
    }
    dispatch({ type: POST_ELECTION_PENDING, payload: election })
  }

  //remove

  let remove = (election) => {
    console.log(election);
    dispatch({ type: DELETE_ELECTION_PENDING, payload: election })
  }

  return (
    <>
      <div className="party-data election">
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
                      <h1 className="modal-title fs-5">Election Deatails</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <label className='d-block mb-3'>Elaction Name : <input type="text" name='election_name' ref={election_name} className="form-control" /></label>
                        <label className='d-block mb-3'>Date : <input type="date" ref={date} name='date' className="form-control" /></label>
                      </form>
                      <div className="modal-footer mt-3">
                        <button type="button" className="button bg-secondary" data-bs-dismiss="modal">Close</button>
                        <button className='button' data-bs-dismiss="modal" onClick={addelection}>Add party</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="admintable">
                <table className='text-start' cellPadding="10px">
                  <thead>
                    <tr>
                      <th>Election Name</th>
                      <th>Election date</th>
                      <th className='text-center'>view/delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      election.election?.map((val, index) => {
                        return (
                          <React.Fragment key={index}>
                            <tr>
                              <td>{val.election_name}</td>
                              <td>{val.date}</td>
                              <td className='text-center'><button><i className="fa-regular fa-pen-to-square"></i></button>
                                <button onClick={() => remove(val._id)}><i className="fa-solid fa-trash"></i></button>
                              </td>
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

export default Election
