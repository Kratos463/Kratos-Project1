import React from 'react'
import InnerBoxLayout from '../../../Components/Layout/InnerBoxLayout'
import { Text, VStack, Flex, Center, useBreakpointValue, Heading, List, ListIcon, ListItem, UnorderedList } from '@chakra-ui/react'
import TransparentBox from '../../../Components/Layout/TransparentBox';
import GradientBox from '../../../Components/Layout/GradientBox';

const ReferralCompetition = () => {
    const fontSize = useBreakpointValue({ base: "16px", sm: "18px", md: "20px", lg: "22px", xl: "24px" });
    const fontWeight = useBreakpointValue({ base: 400, sm: 500, md: 600, lg: 700, xl: 800 });

    return (
        <InnerBoxLayout
            label='META Token April Referral Club Competition'
            about='Get your share in the 5 million C1 Tokens as one of the Top 1,500 Referrers! Requirements listed in Terms & Conditions.'
        >
            <Center flexDir='column' height="80vh" gap="50px" textAlign="center">
                <Text width={{ base: "90%", sm: "400px" }} fontSize={fontSize} fontWeight={fontWeight}>
                    Thank you for taking part in the Referral Club Competition! Results will be announced soon.
                </Text>
                <Text width={{ base: "90%", sm: "400px" }} fontSize={fontSize} fontWeight={fontWeight}>
                    The new April Referral Club Competition is now LIVE, and the leaderboard will be displayed here in the coming days
                </Text>
            </Center>

            <GradientBox>
                <Heading fontSize="2xl" mb="20px">Terms & Conditions</Heading>
                <UnorderedList>
                    <ListItem>This competition starts on 31 March 2024 at 18:00pm Gulf Standard Time (GST) and ends on 30 April 2024 at 18:00pm GST.</ListItem>
                    <ListItem>The Top 1,500 Referrer list will be published on a leaderboard in the C1 back office during the promotion and will be updated daily in real-time for the duration of the promotion.</ListItem>
                    <ListItem>In the event of a tie, the time of registration of the new member will be applied. If this time is also the same, if the new sign-up has purchased an Element Starter Package, the entry will carry more weight. If there is still a tie, the purchase price of the Element Starter Package will be the deciding factor.</ListItem>
                </UnorderedList>
            </GradientBox>
        </InnerBoxLayout>
    )
}

export default ReferralCompetition;
