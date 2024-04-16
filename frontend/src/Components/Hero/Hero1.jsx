import React from 'react';
import {
    Flex,
    Box,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import galaxy from '../.././Assests/galaxy.jpg'

const Hero1 = () => {
    return (
        <Box maxW="100%">
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                backgroundImage={galaxy}
                backgroundSize='cover'
                backgroundPosition='center'>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}
                    color={'white'}>
                    READY TO JOIN THE<br />
                    <Text as={'span'} color={'orange.400'}>
                        META FORTUNAVERSE
                    </Text>
                </Heading>
                <Text color={'white'} maxW={'3xl'}>
                    Everyone is welcome. Immerse yourself in great products, recommend them to others and grow your own successful business!
                </Text>
                <Stack spacing={6} direction={'row'}>
                    <Button
                        as={Link}
                        to="/register"
                        rounded={'full'}
                        px={6}
                        colorScheme={'orange'}
                        bg={'orange.400'}
                        _hover={{ bg: 'orange.500' }}>
                        Join Now
                    </Button>
                    <Button
                        as={Link}
                        to="/login"
                        rounded={'full'} px={6}>
                        Login
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Hero1;
