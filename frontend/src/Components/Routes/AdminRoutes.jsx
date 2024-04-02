import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import RegisterUser from '../AuthScreens/RegisterUser'
import LoginUser from '../AuthScreens/LoginUser'
import AdminLogin from '../AuthScreens/AdminLogin'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route element={<Dashboard />} path="/admin-dashboard"></Route>
            <Route element={<RegisterUser />} path='/'></Route>
            <Route element={<LoginUser />} path='/login'></Route>
            <Route element={<AdminLogin />} path='/amdinLogin'></Route>
        </Routes>
    )
}

export default AdminRoutes