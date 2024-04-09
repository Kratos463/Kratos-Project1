import React from 'react';
import { Box, Heading, Text, Progress, Stack, Flex, Image, Link } from '@chakra-ui/react';
import BadgeIcon from '../../Assests/badge-level-m.svg';

const WelcomeBack = () => {
    return (
        <Box bgColor="#16113a" my={5} p={5} borderRadius={5}>
            <Flex justify="space-between" align="center">
                <UserInfo />
                <UserBadge />
                <UserActions />
            </Flex>
        </Box>
    );
}

const UserInfo = () => {
    return (
        <Stack spacing={5}>
            <Heading fontSize="24px" as="h4">
                Welcome back, <span style={{ color: "rgba(4, 4, 235, 0.929)" }}>Abhishek</span>
            </Heading>
            <Stack spacing={2}>
                <Text>NEXT NETWORK LEVEL</Text>
                <Progress value={20} size='sm' borderRadius="50px" bgColor="#040930" color="rgba(4, 4, 235, 0.929)" />
            </Stack>
        </Stack>
    );
}

const UserBadge = () => {
    return (
        <Stack>
            <Image src={BadgeIcon} />
            <Text>Manager</Text>
        </Stack>
    );
}

const UserActions = () => {
    return (
        <Stack>
            <Link href="#">Upgrade</Link>
            <Link href="#">Invite</Link>
        </Stack>
    );
}

export default WelcomeBack;
