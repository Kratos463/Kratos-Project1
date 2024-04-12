import React from 'react'
import InnerBoxLayout from '../../../Components/Layout/InnerBoxLayout'
import GradientBox from '../../../Components/Layout/GradientBox'
import { Text, Stack } from '@chakra-ui/react'

const ReferralCompetition = () => {
    return (
        <InnerBoxLayout
            label='META Token April Referral Club Competition'
            about='Get your share in the 5 million C1 Tokens as one of the Top 1,500 Referrers!
                    Requirements listed in Terms & Conditions.'
        >
            <Stack width="400px" fontSize="22px" fontWeight={600} justify='center'>
                <Text>
                    Thank you for taking part in the Referral Club Competition! Results will be announced soon.
                </Text>
                <Text mt="100px">
                    The new April Referral Club Competition is now LIVE, and the leaderboard will be displayed here in the coming days
                </Text>
            </Stack>
        </InnerBoxLayout>
    )
}

export default ReferralCompetition