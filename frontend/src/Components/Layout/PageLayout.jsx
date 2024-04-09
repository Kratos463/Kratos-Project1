import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

const PageLayout = ({ children, heading }) => {
    return (
        <Box>
            <Heading textAlign='center' as="h4" fontSize="3xl" color='whitesmoke'>{heading}</Heading>
            {children}
        </Box>
    )
}

export default PageLayout