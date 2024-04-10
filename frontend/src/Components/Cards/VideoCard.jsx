import React from 'react';
import { Box, Image, Stack, Heading, Text } from '@chakra-ui/react';

const VideoCard = ({ thumbnail, title, time }) => {
    return (
        <Box borderRadius={10} bgColor='#16113a' boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)" transition="transform 0.3s ease-in-out" _hover={{ transform: 'scale(1.05)' }}>
            <Box position="relative">
                <Image src={thumbnail} borderRadius="10px 10px 0 0" />
            </Box>
            <Stack textAlign='center' py={4} px={3}>
                <Heading as="h4" fontSize="lg" fontWeight="semibold">{title}</Heading>
                <Text fontSize="sm" color="gray.500">{time}</Text>
            </Stack>
        </Box>
    );
}

export default VideoCard;
