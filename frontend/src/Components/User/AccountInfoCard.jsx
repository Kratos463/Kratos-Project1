import React from 'react';
import { Flex, Image, Stack, Text } from '@chakra-ui/react';
import BadgeInfo from '../../Assests/c1-rewards-badge.webp';

const AccountInfoCard = () => {
    return (
        <Flex gap={5}>
            {accountData.map((data, index) => (
                <AccountCard key={index} {...data} />
            ))}
        </Flex>
    );
};

const AccountCard = ({ label, points, image }) => {
    return (
        <Flex gap={2} p={5} bgColor="#16113a" borderRadius={5} flex={1}>
            <Image src={image} width="50px" height="50px" />
            <Stack spacing={0}>
                <Text fontSize="lg" fontWeight="800">{label}</Text>
                <Text color="green">{points}</Text>
            </Stack>
        </Flex>
    );
};

const accountData = [
    { label: "Account Balance", points: "3000.68 BP", image: BadgeInfo },
    { label: "Meta Rewards", points: "0", image: BadgeInfo },
    { label: "Loyalty Points", points: "0", image: BadgeInfo },
    { label: "Binary Points", points: "L 0 / R 0", image: BadgeInfo },
    { label: "Activity Summary", image: BadgeInfo }
];

export default AccountInfoCard;
