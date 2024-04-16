import React from 'react'
import { Flex, Stack, Text, Heading, Image } from '@chakra-ui/react'
import heroMobile from '../../Assests/community-illustration3.avif'
import SectionLayout from '../../Components/Layout/SectionLayout'

const Opportunity = () => {
  return (
    <SectionLayout
      color="gray.100"
    >
      <LeftSideImage
        imgUrl={heroMobile}
        subtitle="Everyone is a micro influencer"
        title="EARN FROM YOUR INFLUENCE"
        description="Since we recommend products and services to our friends and family every day we are all micro influencers.
        With C1 you can monetise this influence by recommending our partnered products and services to people you know and trust."
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
  )
}

export const LeftSideImage = ({ imgUrl, title, subtitle, description }) => {
  return (
    <Flex
      px={{ base: "20px", md: '100px' }}
      justify='space-between'
      align='center'
      flexDir={{
        base: "column", md: "row"
      }}
    >
      <Stack flex="1">
        <Image src={imgUrl} width="280px" />
      </Stack>
      <Stack flex={1} spacing={5} mt={{ base: "20px" }}>
        <Text letterSpacing={2}>{title}</Text>
        <Heading letterSpacing={1}>{subtitle}</Heading>
        <Text
          color="font.100"
        >{description}</Text>
      </Stack>
    </Flex>
  )
}


export const RightSideImage = ({ imgUrl, title, subtitle, description }) => {
  return (
    <Flex
      px={{ base: "20px", md: '100px' }}
      justify='space-between'
      align='center'
      my={{base: "100px", md: "150px"}}
      flexDir={{
        base: "column-reverse", md: "row"
      }}
    >
      <Stack spacing={5} width={{ base: "100%", md: "50%" }}>
        <Text letterSpacing={2}>{title}</Text>
        <Heading letterSpacing={1}>{subtitle}</Heading>
        <Text
          color="font.100"
        >{description}</Text>
      </Stack>
      <Stack mb={{ base: "20px" }}>
        <Image src={imgUrl} width="280px" />
      </Stack>
    </Flex>
  )
}

export default Opportunity