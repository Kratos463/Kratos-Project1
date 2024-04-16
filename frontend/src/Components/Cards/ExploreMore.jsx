import { Button, Stack, Text, Image } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import React from 'react'

const ExploreMore = ({ title, imageSrc, description, label, to }) => {
    return (
        <Stack
        bg="white"
            align='center'
            spacing={5}
            flex={1}
            p={10}
            boxShadow='rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'
            maxWidth={{ base: '100%', md: '350px' }} // Adjust max width for responsiveness
            marginX='auto' // Center the component horizontally
        >
            <Image src={imageSrc} width="100%" maxWidth="350px" /> {/* Make the image responsive */}
            <Text letterSpacing={5} fontWeight={500} textAlign='center'>{title}</Text>
            <Text fontSize={{ base: 'xl', md: '1xl' }} textAlign='center'>{description}</Text> {/* Adjust font size for responsiveness */}
            <Button
                bg="primary"
                color="font.200"
                _hover={{
                    bg: "blue.500",
                    color: "font.200",
                    textDecoration: "none"
                }}
                as={Link}
                to={to}
                px={10}
                borderRadius='50px'
                width="fit-content" // Make the button responsive
            >
                {label}
            </Button>
        </Stack>
    )
}

export default ExploreMore
