import React, { useRef } from 'react';
import logo from "./Redux/images/logo2.png"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, LOGIN_ADMIN } from './Redux/constnt';

const Login = () => {
    let name = useRef();
    let password = useRef();
    let navigate = useNavigate();

    const addadmin = async () => {
        let user = {
            name: name.current.value,
            password: password.current.value,
        };

        try {
            let res = await axios.post(BASE_URL + LOGIN_ADMIN, user);
            let data = res.data.data;

            if (data.name == user.name) {
                localStorage.setItem("admin", JSON.stringify(data));
                localStorage.setItem("loggedin", true)
                navigate('/'); // Navigate to admin page
            }
        } catch (error) {
            alert("plz ! enter right name Or password")
            console.error("Login failed: ", error);
        }
    };

    return (
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
                                <Link to={"/userlogin"}> <button className='log-btn w-100 mt-4' >login with <span> user</span><i class="fa-solid fa-arrow-right-to-bracket ps-3"></i></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
