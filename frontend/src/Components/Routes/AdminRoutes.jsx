import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../GeneralScreens/Dashboard'
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
import IncomeSetting from '../Dashboard/Settings/IncomeSetting'
import DepartmentMaster from '../Dashboard/Master/DepartmentMaster'
import SubscriptionPackage from '../Dashboard/Master/SubscriptionPackage'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route element={<Dashboard />} path="/admin-dashboard"></Route>
            
            <Route element={<AdminLogin />} path='/adminLogin'></Route>

            {/* master routes */}
            <Route path="/master">
                <Route exact path="country-master" Component={CountryMaster} />
                <Route path="operator-master" Component={OperatorMaster} />
                <Route path="department-master" Component={DepartmentMaster} />
                <Route path="rank-master" Component={RankMaster} />
                <Route path="package-master" Component={PackageMaster} />
                <Route path="product-master" Component={ProductMaster} />
                <Route path="subscription-master" Component={SubscriptionPackage} />
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

            {/* setting routes */}
            <Route path='/setting'>
                <Route path='income' Component={IncomeSetting} />
            </Route>

        </Routes>
    )
}

export default AdminRoutes