import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Button } from '@chakra-ui/react';


const ProductCard = ({ image, website, product, isActive }) => {
    return (
        <Box position="relative" width="48%" height="500px" borderRadius={10} overflow="hidden">
            {isActive && (
                <Box position="absolute" top="10px" left="10px" bg="rgba(0, 0, 0, 0.904)" color="green" p="0" px="2" borderRadius="50px">
                    Active
                </Box>
            )}
            <Box bgImage={`url(${image})`} bgSize="cover" bgPosition="center" width="100%" height="100%">
                <Flex
                    alignItems="center"
                    justify="space-between"
                    px="50px"
                    py="10px"
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    bg="rgba(0, 0, 0, 0.5)"
                >
                    <LinkButton to={website} label="Go to Website" color="white" />
                    <LinkButton to={product} label="Go to Product" color="white" />
                </Flex>
            </Box>
        </Box>
    );
}


export const LinkButton = ({ to, label }) => {
    return (
        <Button
            p={5}
            borderRadius='50px'
            bgColor='rgba(26, 26, 153, 0.763)'
            color='white'
            _hover={{
                bgColor: 'rgba(26, 26, 153, 1)',
                boxShadow: 'md',
            }}><Link to={to}>{label}</Link></Button>
    )
}

export default ProductCard
