import React, { useState } from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Card, Box, Stack, Flex, Input, Text, Radio, Image, VStack } from '@chakra-ui/react'
import InnerBoxLayout from '../../../Components/Layout/InnerBoxLayout'
import BoxLayout from '../../../Components/Layout/BoxLayout'
import rewardImage from '../../../Assests/c1-rewards-badge.webp'
import { ButtonSubmit, FormField } from './Settings'

const GiftCodes = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

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
                        <Stack mb={10}>

                            {
                                new Array(10).fill(0).map((el, index) => {
                                    return (
                                        <CustomRadioButton
                                            imageSrc={rewardImage}
                                            title={`Earth to Air with free Water ` + index}
                                            amount="6 900.00 BP"
                                            isChecked={selectedOption === `option1` + index}
                                            onChange={() => handleOptionChange("option1")}
                                        />
                                    )
                                })
                            }

                        </Stack>

                        <FormField label="Number of Gifts" type="number" />
                        <ButtonSubmit justify='center' label={selectedOption} />

                    </TabPanel>
                </TabPanels>
            </Tabs>
        </InnerBoxLayout >
    )
}

const CustomRadioButton = ({ imageSrc, title, amount, isChecked, onChange }) => {
    return (
        <label>
            <Flex
                borderRadius='lg'
                p={4}
                align="center"
                justify="space-between"
                bg={isChecked ? "primary" : "secondary"} // Conditionally change background color
                boxShadow="md"
                cursor="pointer"
                onClick={onChange} // Added onClick event to the Flex container
            >
                <Flex>
                    <Image src={imageSrc} alt={title} w="50px" h="50px" mr={4} />
                    <Stack>
                        <Text fontWeight="bold">{title}</Text>
                        <Text fontSize="sm">{amount}</Text>
                    </Stack>
                </Flex>
                <Radio isChecked={isChecked} onChange={onChange} />
            </Flex>
        </label>
    );
};


const packageName = [
    "All", "Packages", "Bundles", "Plant IX", "Metaversy", "Travellia", "Magazines"
]

export default GiftCodes
