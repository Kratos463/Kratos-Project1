import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/User'
import Settings from '../Pages/User/Profile/Settings'
import MyPackages from '../Pages/User/Profile/MyPackages'
import Documents from '../Pages/User/Profile/Documents'
import Events from '../Pages/User/Events/Events'
import Store from '../Pages/User/Store/Store'
import UserLog from '../Pages/User/Profile/UserLog'
import GiftCodes from '../Pages/User/Profile/GiftCodes'
import Withdrawal from '../Pages/User/Profile/Withdrawal'
import Invoices from '../Pages/User/Profile/Invoices'
import News from '../Pages/User/News/News'
import SingleNews from '../Pages/User/News/SingleNews'
import PresentationPromo from '../Pages/User/INFO/Presentation&Promo'
import AboutUs from '../Pages/User/INFO/AboutUs'
import TopProducer from '../Pages/User/INFO/TopProducer'
import VideoArchive from '../Pages/User/INFO/VideoArchive'
import ReferralCompetition from '../Pages/User/INFO/ReferralCompetition'

const UserRoutes = () => {
  return (
    <Routes>
      {/* index route */}
      <Route path='/' element={<HomePage />} />

      {/* Store routes */}
      <Route path='/store' element={<Store />} />

      {/* event route */}
      <Route path='/events' element={<Events />} />

      {/* news route */}
      <Route path='/news' element={<News />} />
      <Route path='/news/:id' element={<SingleNews />} />

      {/* User profile routes */}
      <Route path='/settings' element={<Settings />} />
      <Route path='/mypackage' element={<MyPackages />} />
      <Route path='/documents' element={<Documents />} />
      <Route path='/userlog' element={<UserLog />} />
      <Route path='/giftCodes' element={<GiftCodes />} />
      <Route path='/withdrawal' element={<Withdrawal />} />
      <Route path='/invoices' element={<Invoices />} />

      {/* Info routes */}
      <Route path='/presentation-promo' element={<PresentationPromo />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/top-producers' element={<TopProducer />} />
      <Route path='/referral-competition' element={<ReferralCompetition />} />
      <Route path='/videoarchive' element={<VideoArchive />} />
    </Routes>
  )
}

export default UserRoutes