import React from 'react'
import {Box} from '@chakra-ui/react'

const TransparentBox = ({children}) => {
    return (
        <Box flex={1} p={5} size='sm' sx={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            borderRadius: '10px',
            border: '1px solid rgba( 255, 255, 255, 0.18 )',
        }}>{children}</Box>
    )
}

export default TransparentBox