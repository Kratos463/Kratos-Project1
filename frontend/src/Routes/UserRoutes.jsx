import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../Pages/User'
import Settings from '../Pages/User/Profile/Settings'

const UserRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>

      {/* User profile routes */}
      <Route path='/settings' element={<Settings />}/>
    </Routes>
  )
}

export default UserRoutes