import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../Pages/User'

const UserRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
    </Routes>
  )
}

export default UserRoutes