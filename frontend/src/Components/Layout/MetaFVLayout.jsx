import React from 'react'
import { Box } from '@chakra-ui/react'

const MetaFVLayout = ({ children }) => {
    return (
        <Box boxShadow='base' bgColor="#040930" px={{ base: "0px", md: "60px" }} py={{ base: "0px", md: "30px" }} color="whitesmoke" minHeight="100vh" width="100%">
            {children}
        </Box>
    )
}

export default MetaFVLayout