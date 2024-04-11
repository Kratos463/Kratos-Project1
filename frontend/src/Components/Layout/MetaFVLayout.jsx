import React from 'react'
import { Box } from '@chakra-ui/react'

const MetaFVLayout = ({ children }) => {
    return (
        <Box  bgColor="#010425" px={{ base: "0px", md: "80px" }} py={{ base: "0px", md: "30px" }} color="font.200" minHeight="100vh" width="100%">
            {children}
        </Box>
    )
}

export default MetaFVLayout