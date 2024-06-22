import React, { useRef } from 'react'
import logo from "../images/logo2.png"
import axios from 'axios';
import { BASE_URL, USER_LOGIN } from '../constnt';
import { useNavigate } from 'react-router-dom';

const Userlogin = () => {
    let navigate = useNavigate();

    let cardNo = useRef();
    let password = useRef();

    let userlogin = async () => {
        if (localStorage.getItem("loggedin")) {
            alert("You are already logged in.");
            return;
        }
        let data = {
            cardNo: cardNo.current.value,
            password: password.current.value,
        }
        // console.log(data);
        let res = await axios.post(BASE_URL + USER_LOGIN, data)
        let list = res.data.data;

        // console.log(list);
        localStorage.setItem("user", JSON.stringify(list))
        localStorage.setItem("loggedin", true)
        navigate("/user")
    }

    return (
        <div>
            <div className="login-form">
                <div className="row">
                    <div className="col-lg-6 px-0">
                        <div className="login-back d-flex flex-wrap justify-content-center align-items-center">
                            <img src={logo} alt="logo image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form d-flex justify-content-center align-items-center h-100">
                            <div className="admin-form">
                                <h2>Login</h2>
                                <label>User name: <input type="text" name='cardNo' ref={cardNo} className='form-control' placeholder='Enter name' /></label>
                                <label>Password: <input type="password" name='password' ref={password} className='form-control' placeholder='Enter password' /></label>
                                <div className="login-btn">
                                    <button className='button w-100 mt-4' onClick={userlogin}>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userlogin
