import React from 'react';
import InnerBoxLayout from '../../../Components/Layout/InnerBoxLayout';
import { Tabs, Tab, TabList, TabPanels, TabPanel, Box, Image, Heading, Text, Flex, Stack, Button, IconButton, useColorModeValue } from '@chakra-ui/react';
import { MdFavorite, MdShoppingCart } from 'react-icons/md';
import ProductImage from '../../../Assests/cstore-travellia.jpg';
import { LinkButton } from '../../../Components/Cards/ProductCard';

const Store = () => {
    const categories = ['All', 'Category 1', 'Category 2', 'Category 3'];

    return (
        <InnerBoxLayout label="META FORTUNAVERSE STORE">
            <Tabs isFitted variant='soft-rounded' colorScheme='blue'>
                <TabList overflowX='auto'>
                    {categories.map((category, index) => (
                        <Tab key={index}>{category}</Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {categories.map((category, index) => (
                        <TabPanel key={index} height="auto">
                            <Heading mb={5}>{category === 'All' ? 'Featured Product' : `${category} Product`}</Heading>
                            <StoreProductCard
                                image={ProductImage}
                                title="Travellia"
                                about="With an extraordinary range of exclusive savings of up to 60%, intrepid travelers can book hotels through Travellia at almost half a million locations around the world."
                                learnmore="/learnmore"
                                login="/login"
                            />
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </InnerBoxLayout>
    );
}

const StoreProductCard = ({ image, title, about, learnmore, login }) => {
    const cardBgColor = useColorModeValue("white", "#16113a");
    const textColor = useColorModeValue("gray.800", "white");

    return (
        <Box position='relative' maxW="300px" bgColor={cardBgColor} borderRadius={10} boxShadow="md">
            <Image src={image} borderTopRadius={10} />
            <Stack p={5} color={textColor}>
                <Heading as="h4" fontSize="xl" fontWeight="bold">{title}</Heading>
                <Text fontSize="sm" mt={2} mb={4}>{about}</Text>
                <Flex justify="space-between" alignItems="center">
                    <Button colorScheme="blue" size="sm" as="a" href={learnmore} target="_blank" rel="noopener noreferrer">Learn More</Button>
                    <Button colorScheme="blue" variant='outline' size="sm" as="a" href={learnmore} target="_blank" rel="noopener noreferrer">Login</Button>
                </Flex>
            </Stack>
        </Box>
    );
}

export default Store;
