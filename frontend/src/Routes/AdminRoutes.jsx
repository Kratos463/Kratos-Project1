import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../Pages/Admin/Dashboard/Dashboard'
import AdminLogin from '../Pages/Admin/AuthScreens/AdminLogin'
import CountryMaster from '../Pages/Admin/Master/CountryMaster'
import OperatorMaster from '../Pages/Admin/Master/OperatorMaster'
import DepartmentMaster from '../Pages/Admin/Master/DepartmentMaster'
import GiftCodeCreation from '../Pages/Admin/Master/GiftCodeCreation'
import RankMaster from '../Pages/Admin/Master/RankMaster'
import PackageMaster from '../Pages/Admin/Master/PackageMaster'
import ProductMaster from '../Pages/Admin/Master/ProductMaster'
import SubscriptionPackage from '../Pages/Admin/Master/SubscriptionPackage'
import MembersList from '../Pages/Admin/Member Management/MembersList'
import CreateSpecialEmails from '../Pages/Admin/Member Management/CreateSpecialEmails'
import DummyPower from '../Pages/Admin/Member Management/DummyPower'
import ZeroValuedGift from '../Pages/Admin/Member Management/ZeroValuedGift'
import CreateNewsLetter from '../Pages/Admin/Newsletter/CreateNewsLetter'
import IncomeSetting from '../Pages/Admin/Settings/IncomeSetting'

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
                <Route path="gift-code-creation" Component={GiftCodeCreation} />
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