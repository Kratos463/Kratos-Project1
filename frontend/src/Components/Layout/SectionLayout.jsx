import { Box, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import 'animate.css';

const SectionLayout = ({ children, color, title, subtitle }) => {

    return (
        <Box bgColor={color} py={{ base: "30px", md: "150px" }} px={{ base: "0px", md: "80px" }} width="100%">
            {title && <Heading textAlign="center" className='animate__animated animate__jackInTheBox animate__delay-2s'>{title}</Heading>}
            {subtitle && <Text color="primary" textAlign='center' mt={5} mb="100px" >{subtitle}</Text>}
            {children}
        </Box>
    )
}

export default SectionLayout