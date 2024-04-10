import React from 'react'
import { Box, Stack, Heading, Text } from '@chakra-ui/react'

const InnerBoxLayout = ({ label, about, children }) => {
    return (
        <Box my={5} px="100px">
            <Stack textAlign='center' my={10}>
                <Heading mb={5}>{label}</Heading>
                {about && <Text fontSize="sm">{about}</Text>}
            </Stack>
            {children}
        </Box>
    )
}

export default InnerBoxLayout
