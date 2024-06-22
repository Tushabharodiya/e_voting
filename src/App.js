import { Navigate, Route, Router, Routes, useNavigate } from "react-router-dom";
import { Navbar } from "./Redux/atoms/Atoms";
import Sidebar from "./Redux/component/Sidebar";
import Dashborad from "./Redux/admin/pages/Dashborad";
import Party from "./Redux/admin/pages/Party";
import Voter from "./Redux/admin/pages/Voter";
import Election from "./Redux/admin/pages/Election";
import Conction from "./Redux/admin/pages/Conction";
import { useDispatch, useSelector } from "react-redux";
import { GET_CONNECTION_PENDING, GET_ELECTION_PENDING, GET_PARTY_PENDING, GET_VOTER_PENDING } from "./Redux/admin/action";
import { useEffect } from "react";
import Login from "./Login";
import Protectedroute from "./Redux/services/Protectedroute";
import Userlogin from "./Redux/component/Userlogin";
import User from "./Redux/user/pages/User";
import { GET_USER_PENDING } from "./Redux/user/pages/action";

function App() {


  let dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_CONNECTION_PENDING })
    dispatch({ type: GET_USER_PENDING })
  }, [])


  let admin = JSON.parse(localStorage.getItem("admin"))
  let user = JSON.parse(localStorage.getItem("user"))
  console.log(user.role);
  console.log(admin);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={admin.role === "Admin" ? <Home /> : <Navigate to="/login" />} />
      <Route path="/userlogin" element={<Userlogin />} />
      <Route path="/user" element={user.role === "User" ? <User /> : <Navigate to="/userlogin" />} />
    </Routes>
  );
}

let Home = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_PARTY_PENDING })
    dispatch({ type: GET_ELECTION_PENDING })
    dispatch({ type: GET_VOTER_PENDING })
    dispatch({ type: GET_CONNECTION_PENDING })
    dispatch({ type: GET_USER_PENDING })
  }, [])
  let admin = JSON.parse(localStorage.getItem("admin"))
  return (
    <>
      <Protectedroute />
      <Navbar name={admin.name} password={admin.password} role={admin.role} />
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <Sidebar />
            </div>
            <div className="col-lg-10">
              <Routes>
                <Route path="/" element={<Dashborad />} />
                <Route path="/party" element={<Party />} />
                <Route path="/voter" element={<Voter />} />
                <Route path="/election" element={<Election />} />
                <Route path="/conction" element={<Conction />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default App;
