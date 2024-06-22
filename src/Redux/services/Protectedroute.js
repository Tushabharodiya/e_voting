import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Protectedroute = () => {
    let auth = localStorage.getItem("loggedin")
    return auth ? <Outlet /> : <Navigate to={"/login"} />
    
}

export default Protectedroute
