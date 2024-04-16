import React from 'react'
import InnerBoxLayout from '../../../Components/Layout/InnerBoxLayout';
import imag1 from '../../../Assests/cstore-travellia.jpg'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Flex } from '@chakra-ui/react';
import { FaShare } from "react-icons/fa";
import { pastEvents } from '../Events/Events';
import VideoCard from '../../../Components/Cards/VideoCard';
import Thumbnail from '../../../Assests/event-image.jpg';

const VideoArchive = () => {
  return (
    <InnerBoxLayout
      label="Video Archive"
    >
      <Tabs isFitted variant='soft-rounded' colorScheme='blue'>
        <TabList mb='2em' sx={{ boxShadow: '0 0 10px rgba(205, 205, 253, 0.5)' }} borderRadius="50px">
          <Tab>Events</Tab>
          <Tab>Promotions</Tab>
          <Tab>Products</Tab>

        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex justify="center" align="center" flexDir="column" gap={5}>
              {pastEvents.map((event, index) => (
                <VideoCard key={index} thumbnail={Thumbnail} title={event.title} time={event.time} />
              ))}
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </InnerBoxLayout>
  )
}

export default VideoArchive