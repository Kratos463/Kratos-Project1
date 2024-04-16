import React from 'react'
import { Box } from '@chakra-ui/react'

const MetaFVLayout = ({ children }) => {
    return (
        <Box  bgColor="primary" px={{ base: "0px", md: "80px" }} py={{ base: "0px", md: "30px" }}  textColor="font.200" minHeight="100vh" width="100%">
            {children}
        </Box>
    )
}

export default MetaFVLayout