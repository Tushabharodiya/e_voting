import React from 'react'
import { useSelector } from 'react-redux'

const Conction = () => {
  let election = useSelector((state) => state.adminReducer)


  return (
    <div>
      <div className="party-data election">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* <div className="plus d-flex justify-content-end align-items-center">
                <button data-bs-toggle="modal" data-bs-target="#partymodel" className='button'>ADD <i className="fa-solid fa-plus"></i></button>
              </div>
              <div className="modal fade" id="partymodel">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5">Election Details</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <label className='d-block'>Select Election Name
                          <select className="form-select mb-3">
                            {election.election?.map((val, index) => (
                              <option key={index}>{val.election_name}</option>
                            ))}
                          </select>
                        </label>
                        <label className='d-block'>Select Party Name
                          <select className="form-select mb-3">
                            {election.party?.map((val, index) => (
                              <option key={index}>{val.party_name}</option>
                            ))}
                          </select>
                        </label>
                      </form>
                      <div className="modal-footer mt-3">
                        <button type="button" className="button bg-secondary" data-bs-dismiss="modal">Close</button>
                        <button className='button' data-bs-dismiss="modal">Add Party</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
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
                </table>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="collection-card">
                <form>
                  <div className="form-data">
                    <h2>Details</h2>
                    <div className="form-body mt-3">
                      <label className='d-block'>Select Election Name:
                        <select className="form-select mt-2 mb-3">
                          {election.election?.map((val, index) => (
                            <option key={index}>{val.election_name}</option>
                          ))}
                        </select>
                      </label>
                      <label className='d-block'>Select Party Name:
                        <select className="form-select mt-2 mb-3">
                          {election.party?.map((val, index) => (
                            <option key={index}>{val.party_name}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <div className="collection_btn text-center">
                      <button className='button' data-bs-dismiss="modal">Add Party</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Conction
