import React from 'react'
import { Box, Text, Divider } from '@chakra-ui/react'

const BoxLayout = ({ children, labelText, showDivider }) => {
    return (
        <Box boxShadow='base' bgColor="#16113a" p="30px" color="whitesmoke" height="fit-content" mb={5}>
            <Text fontSize="18px" fontWeight="700" color="white" flex={1}>{labelText}</Text>
            {showDivider && <Divider my="30px" bgColor="cyan" />}
            {children}
        </Box>
    )
}

export default BoxLayout

