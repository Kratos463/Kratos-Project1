import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const PotentialBonusSection = () => {
    return (
        <Flex
            justify="space-between"
            fontSize="2xl"
            fontWeight="800"
            p={5}
            bgColor="#16113a"
            borderRadius={5} my={5}>
            <Text>Potential Bouns</Text>
            <Text color="green">800 BP</Text>
        </Flex>
    )
}

export default PotentialBonusSection