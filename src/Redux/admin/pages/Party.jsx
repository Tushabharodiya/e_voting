import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PARTY_PENDING, GET_PARTY_PENDING, POST_PARTY_PENDING } from '../action';
import { Button } from '../../atoms/Atoms';

const Party = () => {

  let party_name = useRef();
  let short_code = useRef();
  let party_logo = useRef();

  let party = useSelector((state) => state.adminReducer)
  let dispatch = useDispatch();

  //get party



  //add party
  let addParty = () => {
    let data = {
      party_name: party_name.current.value,
      short_code: short_code.current.value,
      party_logo: party_logo.current.files[0],
    };
    let formdata = new FormData();

    formdata.append("party_name", data.party_name);
    formdata.append("short_code", data.short_code);
    formdata.append("party_logo", data.party_logo);

    dispatch({ type: POST_PARTY_PENDING, payload: formdata })
  }


  //remove party
  let remove = (party) => {
    // console.log(party);
    dispatch({ type: DELETE_PARTY_PENDING, payload: party })
  }

  return (
    <>
      <div className="party-data">
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
                      <h1 className="modal-title fs-5">Party Deatails</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <label htmlFor='party_name'>party name : </label>
                          <input type="text" className="form-control" ref={party_name} id='party_name' />
                        </div>
                        <div className="mb-3">
                          <label htmlFor='party_name'>short code : </label>
                          <input type="text" className="form-control" ref={short_code} id='party_name' />
                        </div>
                        <div className="mb-3">
                          <label htmlFor='party_name'>pary logo : </label>
                          <input type="file" className="form-control" ref={party_logo} id='party_name' />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="button bg-secondary" data-bs-dismiss="modal">Close</button>
                      <button className='button' data-bs-dismiss="modal" onClick={addParty}>Add party</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="admintable">
                <table cellPadding="8px">
                  <thead>
                    <tr>
                      <th>symbol</th>
                      <th>indian politicle party</th>
                      <th>code</th>
                      <th>view/delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      party.party?.map((val, index) => {
                        return (
                          <React.Fragment key={index}>
                            <tr>
                              <td><img src={val.party_logo} alt="logo image" /></td>
                              <td>{val.party_name}</td>
                              <td>{val.short_code}</td>
                              <td><button><i className="fa-regular fa-pen-to-square"></i></button>
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

export default Party
