import React from 'react';
import InnerBoxLayout from '../../../Components/Layout/InnerBoxLayout';
import { Tabs, Tab, TabList, TabPanels, TabPanel, Box, Image, Heading, Text, Flex, Stack } from '@chakra-ui/react';
import ProductImage from '../../../Assests/cstore-travellia.jpg';
import { LinkButton } from '../../../Components/Cards/ProductCard';

const Store = () => {
    const categories = ['All', 'Category 1', 'Category 2', 'Category 3'];

    return (
        <InnerBoxLayout>
            <Tabs isFitted variant='soft-rounded' colorScheme='blue'>
                <TabList mb='1em' overflowX='scroll'>
                    {categories.map((category, index) => (
                        <Tab key={index}>{category}</Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {categories.map((category, index) => (
                        <TabPanel key={index}>
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
    return (
        <Box position='relative' height="600px" width="300px" bgColor="#16113a" borderRadius={10}>
            <Image src={image} />
            <Stack p={5}>
                <Heading as="h4" fontSize="2xl">{title}</Heading>
                <Text fontSize="md">{about}</Text>
                <Flex justify="space-between" px={5} py="10px" position="absolute" bottom="0" left="0" right="0">
                    <LinkButton to={learnmore} label="Learn More" />
                    <LinkButton to={login} label="Login" />
                </Flex>
            </Stack>
        </Box>
    );
}

export default Store;
