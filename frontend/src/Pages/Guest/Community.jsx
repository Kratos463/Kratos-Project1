import React from 'react'
import SectionLayout from '../../Components/Layout/SectionLayout'
import { LeftSideImage, RightSideImage } from './Opportunity'
import heroMobile from '../../Assests/opportunity-hero-mobil.avif'
import WithSpeechBubblesTestimonial from '../../Components/Testimonials/Testimonials'

const Community = () => {
  return (
    <>
      <SectionLayout
        color="gray.100"
      >
        <LeftSideImage
          imgUrl={heroMobile}
          subtitle="Affiliates all over the world"
          title="GROW AND THRIVE WITH US"
          description="With Affiliates on six continents and in well over a hundred countries, the Crowd stands ready to help you build a life changing business. All you need is a phone in your hand to get access to this incredible opportunity and to be a part of our motivated and successful community."
        />
        <RightSideImage
          imgUrl={heroMobile}
          subtitle="Cutting edge products, blazing a trail through a wide variety of industries."
          title="RECOMMEND QUALITY PRODUCTS"
          description="If you’re interested in play2earn gaming, education or cryptocurrencies, we have the right product for you. They’re great fun so why not try them out today?"
        />

        <LeftSideImage
          imgUrl={heroMobile}
          subtitle="Our Compensation Plan is the most powerful in the industry"
          title="COMPENSATION PLAN"
          description="We provide a wide variety of fantastic bonuses that create huge opportunities to succeed. With so much possibility to earn, C1 is leading the pack in providing our Affiliates the tools to grow their businesses."
        />


      </SectionLayout>
      <WithSpeechBubblesTestimonial />
    </>
  )
}

export default Community