import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../GeneralScreens/Dashboard'
import RegisterUser from '../AuthScreens/RegisterUser'
import LoginUser from '../AuthScreens/LoginUser'
import AdminLogin from '../AuthScreens/AdminLogin'
import CountryMaster from '../Dashboard/Master/CountryMaster'
import OperatorMaster from '../Dashboard/Master/OperatorMaster'
import RankMaster from '../Dashboard/Master/RankMaster'
import ProductMaster from '../Dashboard/Master/ProductMaster'
import PackageMaster from '../Dashboard/Master/PackageMaster'
import MembersList from '../Dashboard/Member Management/MembersList'
import CreateSpecialEmails from '../Dashboard/Member Management/CreateSpecialEmails'
import ZeroValuedGift from '../Dashboard/Member Management/ZeroValuedGift'
import DummyPower from '../Dashboard/Member Management/DummyPower'
import CreateNewsLetter from '../Dashboard/Newsletter/CreateNewsLetter'

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
                <Route path="operator-master" Component={OperatorMaster} />
                <Route path="rank-master" Component={RankMaster} />
                <Route path="package-master" Component={PackageMaster} />
                <Route path="product-master" Component={ProductMaster} />
            </Route>

            {/* Member management routes */}
            <Route path='/member-management'>
                <Route path='members' Component={MembersList} />
                <Route path='special-email' Component={CreateSpecialEmails} />
                <Route path='dummy-power' Component={DummyPower} />
                <Route path='gift-code' Component={ZeroValuedGift} />
            </Route>

            {/* newsletter */}
            <Route path='/newsletter' element={<CreateNewsLetter />}></Route>
        </Routes>
    )
}

export default AdminRoutes