import React from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Card } from '@chakra-ui/react'
import InnerBoxLayout from '../../../Components/Layout/InnerBoxLayout'
import BoxLayout from '../../../Components/Layout/BoxLayout'

const GiftCodes = () => {
    return (
        <InnerBoxLayout label="Gift Codes" about="Get instant rewards when referring a new META member!">
            <Tabs isFitted variant='soft-rounded' colorScheme='blue'>
                <TabList mb='2em' sx={{ boxShadow: '0 0 10px rgba(205, 205, 253, 0.5)' }} borderRadius="50px">
                    {packageName.map((tab, index) => (
                        <Tab key={index}>{tab}</Tab>
                    ))}
                </TabList>
                <TabPanels>
                    <TabPanel sx={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(4px)',
                        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                        borderRadius: '10px',
                        border: '1px solid rgba( 255, 255, 255, 0.18 )',
                    }}>
                        <GiftCodesCard />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </InnerBoxLayout >
    )
}

const GiftCodesCard = ({image, title, name}) => {
    return (
        <BoxLayout>
            
        </BoxLayout>
    )
}

const packageName = [
    "All", "Packages", "Bundles", "Plant IX", "Metaversy", "Travellia", "Magazines"
]

export default GiftCodes
