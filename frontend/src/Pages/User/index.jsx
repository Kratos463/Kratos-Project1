import React from 'react'
import WelcomeBack from '../../Components/User/WelcomeBack'
import AccountInfoCard from '../../Components/User/AccountInfoCard'
import UpgradeSection from '../../Components/User/UpgradeSection'
import PotentialBonusSection from '../../Components/User/PotentialBonusSection'
import Carousel from '../../Components/Carousels/Carousels1'
import Carousels2 from '../../Components/Carousels/Carousels2'

const HomePage = () => {
  return (
    <>
      <Carousels2 />

      {/*  Welcome back component */}
      <WelcomeBack />

      {/* User Account Info */}
      <AccountInfoCard />

      <Carousel />
      {/* Upgrade Section */}
      <UpgradeSection />

      {/* Potential Bouns Section */}
      <PotentialBonusSection />


      <Carousel height="300px" />

      <Carousels2 />
    </>
  )
}

export default HomePage