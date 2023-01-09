import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Signup/Signup'
import AdminLogin from '../Pages/AdminLogin/AdminLogin'
import JobPage from '../Pages/JobPage/JobPage'
import AdminDashboard from '../Pages/AdminDashboard/AdminDashboard'
import JobDescription from '../Pages/JobPage/JobDescription/JobDescription'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/user/login" element={<Login />}/>
            <Route path="/user/signup" element={<Signup />}/>
            <Route path="/adminlogin" element={<AdminLogin />}/>
            <Route path="/jobs" element={<JobPage />}/>
            <Route path="/jobs/:id" element={<JobDescription />}/>
            <Route path="/admindashboard" element={<AdminDashboard />}/>
        </Routes>
    </div>
  )
}

export default AllRoutes