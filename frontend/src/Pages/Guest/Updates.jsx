import {
  Box, Tab, TabList, TabPanels, Tabs,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
  TabPanel,
  Flex,
} from '@chakra-ui/react'
import React from 'react'

const Updates = () => {
  return (
    <Box
      py={{ base: "30px", md: "50px" }} px={{ base: "10px", md: "80px" }} width="100%"
      bg="gray.100"
    >
      <Tabs isFitted variant='soft-rounded' colorScheme='blue' >
        <TabList mb='2em' bg="white" borderRadius="50px" width={{ base: "100%", md: "50%" }}>
          <Tab>News</Tab>
          <Tab>Latest Events</Tab>
          <Tab>Events</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex
              flexWrap='wrap'
              justify='space-between'
              flexDir={{ base: "column", md: "row" }}
              gap={{ base: 10 }}
            >
              {
                new Array(3).fill(0).map((el, index) => {
                  return <NewsPost />
                })
              }
            </Flex>
          </TabPanel>
          <TabPanel>
            <NewsPost />
          </TabPanel>
          <TabPanel>
            <NewsPost />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}


export function NewsPost() {
  return (
    <Box
      maxW={'48%'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
    >
      <Box mt={-6} mx={-6} mb={6}>
        <Image
          src={
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
          fill
          alt="Example"
        />
      </Box>
      <Stack mt={5}>
        <Heading
          color={useColorModeValue('primary', 'white')}
          fontSize={'xl'}
          fontWeight={600}
          >
          Boost your conversion rate
        </Heading>
        <Text color={'font.100'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy...
        </Text>
      </Stack>
      <Text mt="5" fontSize={'sm'} color="primary">Feb 08, 2021</Text>
    </Box>
  )
}

export default Updates