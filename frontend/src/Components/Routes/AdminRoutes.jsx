import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import RegisterUser from '../AuthScreens/RegisterUser'
import LoginUser from '../AuthScreens/LoginUser'
import AdminLogin from '../AuthScreens/AdminLogin'
import CountryMaster from '../Dashboard/Master/CountryMaster'
import OperatorMaster from '../Dashboard/Master/OperatorMaster'
import RankMaster from '../Dashboard/Master/RankMaster'
import ProductMaster from '../Dashboard/Master/ProductMaster'
import PackageMaster from '../Dashboard/Master/PackageMaster'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route element={<Dashboard />} path="/admin-dashboard"></Route>
            <Route exact element={<RegisterUser />} path='/'></Route>
            <Route element={<LoginUser />} path='/login'></Route>
            <Route element={<AdminLogin />} path='/adminLogin'></Route>

             {/* master routes */}
            <Route path="/master">
                <Route exact path="country-master" Component={CountryMaster} />            
                <Route exact path="operator-master" Component={OperatorMaster} />            
                <Route exact path="rank-master" Component={RankMaster} />            
                <Route exact path="product-master" Component={ProductMaster} />            
                <Route exact path="package-master" Component={PackageMaster} />            
            </Route>
        </Routes>
    )
}

export default AdminRoutes