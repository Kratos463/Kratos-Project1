import React from 'react'
import { Box, Flex, Heading, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from '@chakra-ui/react'
import travelliaImage from '../../Assests/teaser.avif'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <>
            <Box
                py={{ base: "30px", md: "50px" }} px={{ base: "10px", md: "80px" }} width="100%"
                bg="gray.100"
            >
                <Tabs isFitted variant='soft-rounded' colorScheme='blue' >
                    <TabList mb='2em' bg="white" borderRadius="50px" width={{ base: "100%", md: "50%" }}>
                        <Tab>Overview</Tab>
                        <Tab>Packages</Tab>
                        <Tab>Magazines</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>

                            <Flex
                                justify='flex-start'
                                gap={5}
                                flexWrap='wrap'>
                                {
                                    new Array(5).fill(0).map((el, index) => {
                                        return (
                                            <Card
                                                imageUrl={
                                                    travelliaImage
                                                }
                                                title={'Beautiful Sunset'}
                                                description={
                                                    'Enjoy the breathtaking view of the sunset from this serene location.'
                                                }
                                            />
                                        )
                                    })
                                }
                            </Flex>
                        </TabPanel>
                        <TabPanel>
                        <Card
                                                imageUrl={
                                                    travelliaImage
                                                }
                                                title={'Beautiful Sunset'}
                                                description={
                                                    'Enjoy the breathtaking view of the sunset from this serene location.'
                                                }
                                            />
                        </TabPanel>
                        <TabPanel>
                        <Card
                                                imageUrl={
                                                    travelliaImage
                                                }
                                                title={'Beautiful Sunset'}
                                                description={
                                                    'Enjoy the breathtaking view of the sunset from this serene location.'
                                                }
                                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Box>
        </>
    )
}


const Card = ({ imageUrl, title, description, to }) => {
    return (
        <Link to={to}>
            <Box
                bgColor="white"
                borderRadius={0}
                boxShadow="md"
                overflow="hidden"
                transition="transform 0.3s ease, box-shadow 0.3s ease"
                _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: 'lg',
                }}
                width={{ base: "100%", md: "300px" }}
            >
                <Image src={imageUrl} height="180px" />

                <Stack p={5}>
                    <Heading fontSize={'lg'} letterSpacing={2} fontWeight={400} fontFamily={'body'} mb={3}>
                        {title}
                    </Heading>
                    <Text color={'gray.500'} fontSize='sm'>{description}</Text>
                </Stack>
            </Box>
        </Link>
    );
};


export default Products