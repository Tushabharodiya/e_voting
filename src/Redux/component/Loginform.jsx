// import React, { useRef } from 'react'
// import logo from "../images/logo2.png"
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ADD_ADMIN, BASE_URL, LOGIN_ADMIN } from '../constnt';

// const Loginform = () => {

//     let name = useRef();
//     let password = useRef();
//     let navigate = useNavigate()

//     let admin = JSON.parse(localStorage.getItem("admin")) || [];


//     let addadmin = async () => {
//         let user = {
//             name: name.current.value,
//             password: password.current.value,
//         }
//         let res = await axios.post(BASE_URL + LOGIN_ADMIN, user)
//         let data = res.data.data;
//         admin.push(data)
//         localStorage.setItem("admin", JSON.stringify(admin))
//         navigate('/')
//     }

//     return (
//         <>
//             <div className="login-form">
//                 <div className="row">
//                     <div className="col-lg-6 px-0">
//                         <div className="login-back d-flex flex-wrap justify-content-center align-items-center">
//                             <img src={logo} alt="logo image" />
//                         </div>
//                     </div>
//                     <div className="col-lg-6">
//                         <div className="form d-flex justify-content-center align-items-center h-100">
//                             <div className="admin-form">
//                                 <h2>login</h2>
//                                 <label>user name : <input type="text" name='name' ref={name} className='form-control' placeholder='enter name   ' /></label>
//                                 <label>password : <input type="number" name='password' ref={password} className='form-control' placeholder='enter password' /></label>
//                                 <div className="login-btn">
//                                     <button className='button w-100 mt-4' onClick={addadmin}>next</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Loginform
