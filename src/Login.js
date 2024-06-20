import React, { useRef } from 'react';
import logo from "./Redux/images/logo2.png"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, LOGIN_ADMIN } from './Redux/constnt';

const Login = () => {
    let name = useRef();
    let password = useRef();
    let navigate = useNavigate();

    let admin = JSON.parse(localStorage.getItem("admin")) || [];

    let addadmin = async () => {
        let user = {
            name: name.current.value,
            password: password.current.value,
        };
        try {
            let res = await axios.post(BASE_URL + LOGIN_ADMIN, user);
            let data = res.data.data;
            admin.push(data);
            localStorage.setItem("admin", JSON.stringify(admin));
            // navigate('/admin'); // Navigate to admin page
        } catch (error) {
            console.error("Login failed: ", error);
        }
    };

    return (
        <>
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
                                <label>User name: <input type="text" name='name' ref={name} className='form-control' placeholder='Enter name' /></label>
                                <label>Password: <input type="password" name='password' ref={password} className='form-control' placeholder='Enter password' /></label>
                                <div className="login-btn">
                                    <button className='button w-100 mt-4' onClick={addadmin}>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
