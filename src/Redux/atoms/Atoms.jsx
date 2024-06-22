import { useState } from "react";
import logo from "../images/logo.png"
import { useNavigate } from "react-router-dom";

const Navbar = ({ name, cardNo, sex, password, role }) => {
    const [profile, setProfile] = useState("none");
    const navigate = useNavigate();

    const handle = () => {
        setProfile("block");
    };

    const logout = () => {
        console.log(role);
        localStorage.removeItem("loggedin")
        if (role === "Admin") {
            navigate("/login")
        } else {
            navigate("/userlogin");
        }
    };

    return (
        <>
            <header>
                <div className="navbar">
                    <div className="container">
                        <div className="head-logo d-flex align-items-center">
                            <img src={logo} alt="logo" />
                            <h4 className="mb-0 ms-2">E-ELECTION</h4>
                        </div>
                        <div className="user">
                            <button onClick={handle}>{name[0]}</button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="profile" style={{ display: profile }}>
                <div className="profile-name position-relative">
                    <div className="space"></div>
                    <div className="user position-absolute">
                        <button><i className="fa-solid fa-user"></i></button>
                    </div>
                    <ul className="mt-3">
                        <li><a href="#">Name: {name}</a></li>
                        {cardNo && <li><a href="#">Card No: {cardNo}</a></li>}
                        {sex && <li><a href="#">Sex: {sex}</a></li>}
                        {password && <li><a href="#">Password: {password}</a></li>}
                    </ul>
                    <button className="logout" onClick={logout}>
                        <i className="fa-solid fa-arrow-right-from-bracket pe-2"></i>Log out
                    </button>
                </div>
            </div>
        </>
    );
};

let Button = ({ content, style }) => (
    <button className={style}>{content}</button>
)

export { Navbar, Button }