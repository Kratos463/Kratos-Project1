import React from 'react'
import Hero1 from '../../Components/Hero/Hero1'
import SectionLayout from '../../Components/Layout/SectionLayout'
import StepCard from '../../Components/Cards/StepCard'
import phoneImage from '../.././Assests/phone.avif'

import { Flex } from '@chakra-ui/react';
import Hero2 from '../../Components/Hero/Hero2'
import ExploreMore from '../../Components/Cards/ExploreMore'
import homeProduct from '../../Assests/home-product.avif'
import WithSpeechBubblesTestimonial from '../../Components/Testimonials/Testimonials'

const GuestHomePage = () => {
  return (
    <>
      <Hero1 />

      <SectionLayout color="gray.100"
        title="HOW IT WORKS"
        subtitle="Get started in 3 simple steps"
      >
        <Flex
          justify='space-between'
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: 10 }}
        >
          {
            new Array(3).fill(0).map((el, index) => {
              return <StepCard key={index}
                imgSrc={phoneImage}
                title="Explore great products"
                about="Browse the C-Store and explore all of our great products."
              />
            })
          }
        </Flex>
      </SectionLayout>

      <Hero2 />

      <SectionLayout color="gray.100"
        title="Explore More"
        subtitle="Discover the possibilities, explore more"
      >

        <Flex gap={5}
          flexDir={{ base: 'column', md: "row" }}
        >
          <ExploreMore
            imageSrc={homeProduct}
            title="PRODUCTS"
            description="Immerse yourself in great products with huge earning potential"
            label="Browse Products"
          />
          <ExploreMore
            imageSrc={homeProduct}
            title="COMMUNITY"
            description="Join the biggest and fastest growing community of digital entrepreneurs on the planet"
            label="Join Community"
          />
          <ExploreMore
            imageSrc={homeProduct}
            title="OPPORTUNITY"
            description="META offers a world of opportunities that is open to all"
            label="Your Opportunity"
          />
        </Flex>
      </SectionLayout>
      <WithSpeechBubblesTestimonial />

    </>
  )
}

export default GuestHomePage