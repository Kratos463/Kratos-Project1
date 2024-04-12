import React from 'react'
import InnerBoxLayout from '../../../Components/Layout/InnerBoxLayout'
import { Tabs, TabList, TabPanel, Tab, TabPanels, Image, Heading, Stack, Box, Flex } from '@chakra-ui/react'
import { ButtonSubmit } from '../Profile/Settings'
import logoImage from '../../../Assests/MV_crystal_logo.webp'
import TransparentBox from '../../../Components/Layout/TransparentBox'

const PresentationPromo = () => {
    return (
        <InnerBoxLayout label="META Toolbox" about="Presentations & Downloads">
            <Tabs isFitted variant='soft-rounded' colorScheme='blue'>
                <TabList mb='2em' sx={{ boxShadow: '0 0 10px rgba(205, 205, 253, 0.5)' }} borderRadius="50px">
                    {tabs.map((tab, index) => (
                        <Tab key={index} fontWeight={800}>{tab}</Tab>
                    ))}
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Stack spacing={10}>

                            {
                                new Array(10).fill(0).map((el, index) => {
                                    return (
                                        <DowloadCards key={index} imageSrc={logoImage} heading="Metaversy Logotype and Subtitle" />
                                    )
                                })
                            }

                        </Stack>

                    </TabPanel>
                    <TabPanel>
                        <Flex gap={5} flexDir={{ md: "row", base: "column" }}>
                            <TransparentBox>
                                <Heading fontSize="2xl">Success Roadmap</Heading>
                                <ButtonSubmit label="Download PDF" justify="flex-start" />
                            </TransparentBox>

                            <TransparentBox>
                                <Heading fontSize="2xl">Download Dream Board</Heading>
                                <ButtonSubmit label="Download PDF" justify="flex-start" />
                            </TransparentBox>

                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <DowloadCards imageSrc={logoImage} heading="Network Basics | Ep.1 - List Building" />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </InnerBoxLayout>
    )
}

const DowloadCards = ({ imageSrc, heading }) => {
    return (
        <Flex
            borderRadius="lg"
            direction={{ base: 'column', md: 'row' }}
            justify="center"
        >
            <Box
                flex={{ base: 'none', md: 1 }}
                bg="gray"
                p={10}
                borderLeftRadius="lg"
            >
                <Image src={imageSrc} />
            </Box>
            <Stack
                flex={{ base: 'none', md: 1 }}
                bg="secondary"
                p={10}
                align="center"
                justify="center"
                borderRightRadius="lg"
            >
                <Heading fontSize="lg">{heading}</Heading>
                <ButtonSubmit label="Download" />
            </Stack>
        </Flex>
    )
}

const tabs = [
    "Downloads", "Training Materials", "Videos"
]

export default PresentationPromo