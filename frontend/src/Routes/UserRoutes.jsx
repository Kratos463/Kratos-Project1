import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../Pages/User'
import Settings from '../Pages/User/Profile/Settings'
import MyPackages from '../Pages/User/Profile/MyPackages'
import Documents from '../Pages/User/Profile/Documents'
import Events from '../Pages/User/Events/Events'
import Store from '../Pages/User/Store/Store'

const UserRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>

      {/* User profile routes */}
      <Route path='/settings' element={<Settings />}/>
      <Route path='/mypackage' element={<MyPackages />}/>
      <Route path='/documents' element={<Documents />}/>
      <Route path='/events' element={<Events />}/>
      <Route path='/store' element={<Store />}/>
    </Routes>
  )
}

export default UserRoutes