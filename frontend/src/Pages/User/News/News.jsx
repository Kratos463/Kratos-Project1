import React from 'react'
import { Box, Image, Heading, Text, Flex } from "@chakra-ui/react";
import InnerBoxLayout from '../../../Components/Layout/InnerBoxLayout';
import NewsImage from '../../../Assests/header.jpg'
import { Link } from 'react-router-dom'

const News = () => {
    return (
        <InnerBoxLayout
            label='Breaking META News'
            about="Stay Informed, Stay Ahead: Your Source for Timely News Updates!"
        >
            <Flex justify='center' gap={5} flexWrap='wrap'>
                {
                    new Array(5).fill(0).map((el, index) => {
                        return <NewsCard key={index}
                            imageSrc={NewsImage}
                            headline='Use your Element Member Status as starting point'
                            content='Element Member Status has been one of the tools that C1 has given you to make a success of your digital business. We have given you access to their hard-earned commissions through Element Member Status, but we want you to get ultimate Web3 entrepreneurship gains. That’s why we’re bringing Element Member Status (EMS) to an end on 30 April.'
                            readMoreLink='#'
                        />
                    })
                }
            </Flex>
        </InnerBoxLayout>
    )
}


const NewsCard = ({ imageSrc, headline, content, readMoreLink }) => {
    return (
        <Box
            sx={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(4px)',
                boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                borderRadius: '10px',
                border: '1px solid rgba( 255, 255, 255, 0.18 )',
            }}
            maxW="lg"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }}
        >
            <Image src={imageSrc} alt="News Image" />

            <Box p="6">
                <Heading as="h2" size="md" mb="2" fontWeight="semibold" color="lightgray">
                    {headline}
                </Heading>

                <Text fontSize="sm" color="gray.600" mb="4">
                    {content}
                </Text>

                <Link to={readMoreLink} >
                    Read more
                </Link>
            </Box>
        </Box>
    );
};


export default News