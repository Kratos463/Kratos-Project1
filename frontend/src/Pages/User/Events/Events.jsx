import React from 'react';
import InnerBoxLayout from '../../../Components/Layout/InnerBoxLayout';
import VideoCard from '../../../Components/Cards/VideoCard';
import Thumbnail from '../../../Assests/event-image.jpg';
import { Flex } from '@chakra-ui/react';

const Events = () => {
    const pastEvents = [
        { title: "Incentive Trip Maldives 2024", time: "PAST EVENT IN 2024" },
        { title: "Another Event", time: "PAST EVENT IN 2024" },
        { title: "Yet Another Event", time: "PAST EVENT IN 2024" },
        { title: "One More Event", time: "PAST EVENT IN 2024" }
    ];

    return (
        <>
            <InnerBoxLayout label="Watch Upcoming Events">
                <Flex justify="center">
                    <VideoCard thumbnail={Thumbnail} title="Incentive Trip Maldives 2024" time="UPCOMING EVENT IN 2024" />
                </Flex>
            </InnerBoxLayout>
            <InnerBoxLayout label="Watch Past Events">
                <Flex justify="center" align="center" flexDir="column" gap={5}>
                    {pastEvents.map((event, index) => (
                        <VideoCard key={index} thumbnail={Thumbnail} title={event.title} time={event.time} />
                    ))}
                </Flex>
            </InnerBoxLayout>
        </>
    );
}

export default Events;
