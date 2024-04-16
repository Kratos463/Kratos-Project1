import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GuestHomePage from '../Pages/Guest'
import Products from '../Pages/Guest/Products'
import Opportunity from '../Pages/Guest/Opportunity'
import Updates from '../Pages/Guest/Updates'
import Community from '../Pages/Guest/Community'

const GuestRoutes = () => {
  return (
    <Routes>
        <Route element={<GuestHomePage />} path="/" />
        <Route element={<Products />} path="/products" />
        <Route element={<Opportunity />} path="/opportunity" />
        <Route element={<Community />} path="/community" />
        <Route element={<Updates />} path="/updates" />
    </Routes>
  )
}

export default GuestRoutes