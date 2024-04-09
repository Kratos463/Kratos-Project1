import React from 'react';
import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import Icon from '../../Assests/metaversy.svg';

const UpgradeSection = () => {
    return (
        <Box p={5} bgColor="#16113a" borderRadius={5} my={5}>
            <Flex justify='space-between' align='center'>
                {UpgradeData.map((data, index) => (
                    <UpgradeBox key={index} {...data} />
                ))}
                <ButtonBox>
                    <Button
                        bgColor="rgba(26, 26, 153, 0.763)"
                        color="white"
                        _hover={{
                            bgColor: "rgba(26, 26, 153, 1)",
                            boxShadow: "md",
                        }}
                    >
                        Upgrade
                    </Button>
                </ButtonBox>
            </Flex>
        </Box>
    )
}

const UpgradeBox = ({ image, label, points }) => {
    return (
        <Flex gap={2}>
            <Image src={image} width="50px" height="50px" />
            <Stack spacing={0}>
                <Text fontSize="lg" fontWeight="800">{label}</Text>
                <Text color="green">{points || 'N/A'}</Text>
            </Stack>
        </Flex>
    )
}

const ButtonBox = ({ children }) => {
    return (
        <Flex alignItems="center">
            {children}
        </Flex>
    )
}

const UpgradeData = [
    {
        image: Icon,
        label: "Metaversy"
    },
    {
        image: Icon,
        label: "Startup",
        points: "2521 Virtuals"
    },
    {
        image: Icon,
        label: "Game Packs",
        points: "0"
    }
]

export default UpgradeSection;
