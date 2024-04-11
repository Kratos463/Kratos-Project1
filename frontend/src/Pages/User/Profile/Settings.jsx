import React from 'react';
import {
    Text, Flex, Tabs, TabList, Tab, TabPanels, TabPanel, Box, FormControl, Input, FormLabel,
    Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Button, Stack, Radio,
    RadioGroup, OrderedList, ListItem
} from '@chakra-ui/react';
import InnerBoxLayout from '../../../Components/Layout/InnerBoxLayout';
import BoxLayout from '../../../Components/Layout/BoxLayout';

const Settings = () => {
    return (
        <InnerBoxLayout
            label="Settings"
            about="Your KYC was approved on July 7th, 2021. You can not change name or address without contacting support."
        >
            <Tabs isFitted variant='soft-rounded' colorScheme='blue'>
                <TabList mb='2em' sx={{ boxShadow: '0 0 10px rgba(205, 205, 253, 0.5)' }} borderRadius="50px">
                    {tabs.map((tab, index) => (
                        <Tab key={index}>{tab.label}</Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {tabs.map((tab, index) => (
                        <TabPanel key={index}>
                            {tab.component}
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </InnerBoxLayout>
    );
};



export const FormField = ({ label, type, placeholder }) => (
    <FormControl mt={5}>
        <FormLabel fontWeight={600}>{label}</FormLabel>
        <Input type={type} placeholder={placeholder} />
    </FormControl>
);

export const ButtonSubmit = ({ label, justify }) => (
    <Flex justify={justify || 'center'} mt={5}>
        <Button
            borderRadius='50px'
            width='fit-content'
            px="20px"
            bgColor='rgba(26, 26, 153, 0.763)'
            color='white'
            fontWeight={600}
            _hover={{
                bgColor: 'rgba(26, 26, 153, 1)',
                boxShadow: 'md',
            }}
        >
            {label}
        </Button>
    </Flex>
);

const AccountSettingForm = () => (
    <>
        <Accordion allowToggle defaultIndex={[0]} mb={10}>
            <AccordionItem>
                <h2>
                    <AccordionButton bgColor='#16113a' py={5} colorScheme='none'>
                        <Box as='span' flex='1' textAlign='left' fontSize='18px' fontWeight='800'>
                            Personal Information
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} colorScheme='blue' bgColor="#16113a">
                    <form>
                        <FormField label='Email' type='email' placeholder='example@gmail.com' />
                        <FormField label='First Name' type='text' placeholder='abhishek' />
                        <FormField label='Last Name' type='text' placeholder='singh' />
                        <FormField label='Address' type='text' placeholder='s-2, om apartment, green campus, narayan vihar' />
                        <FormField label='Postal Code' type='text' placeholder='289028' />
                        <FormField label='City' type='text' placeholder='Mumbai' />
                        <FormField label='Country' type='text' placeholder='India' />
                        <FormField label='Time Zone' type='text' placeholder='example@gmail.com' />
                        <FormField label='Phone Number' type='tel' placeholder='123-456-7890' />
                        <FormField label='Date Of Birth' type='date' placeholder='YYYY-MM-DD' />
                        <FormField label='Email Newsletter' type='email' placeholder='example@gmail.com' />
                        <ButtonSubmit label='Submit' />
                    </form>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>

        <BoxLayout labelText='Metamask wallet' showDivider>
            <Text fontSize='md'>0x9eac8e84d8978cc2f851b764f0d5a15157879851</Text>
            <Text fontSize='sm' mt={5}>If you want to connect a different Metamask wallet, please contact META FORTUNAVERSE Support.</Text>
        </BoxLayout>

        <BoxLayout>
            <Text fontSize='md' fontWeight={800}>Please make sure that your personal details are 100% correct.</Text>
            <Text fontSize='sm' mt={5}>Otherwise, you may encounter delays when withdrawing funds or during other procedures that require verification of your personal details.</Text>
        </BoxLayout>
    </>
);

const MemberPlacementSettingForm = () => (
    <>
        <BoxLayout>
            <Text fontSize='md' fontWeight={800}>New Sponsored Members</Text>
            <form action=''>
                <RadioGroup>
                    <Stack mt={5}>
                        {['LEFT', 'RIGHT', 'UNDER'].map((placement, index) => (
                            <Radio key={index} size='md' value={placement} colorScheme='blue'>
                                Place on my {placement} side
                            </Radio>
                        ))}
                    </Stack>
                </RadioGroup>
                <ButtonSubmit label='Save' />
            </form>
        </BoxLayout>
        <BoxLayout>
            <Text fontSize='sm'>
                Please note that it is not possible to change a position after you
                have placed her/him and that you fully understand what these changes result in.
            </Text>
        </BoxLayout>
    </>
);

const AccountSettingPassword = () => (
    <>
        <Accordion allowToggle defaultIndex={[0]} mb={10}>
            <AccordionItem>
                <h2>
                    <AccordionButton bgColor='#16113a' py={5} colorScheme='none'>
                        <Box as='span' flex='1' textAlign='left' fontSize='18px' fontWeight='800'>
                            Change Password
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} colorScheme='blue' bgColor="#16113a">
                    <form>
                        <FormField label='Current Password' type='password' />
                        <FormField label='New Password' type='password' />
                        <FormField label='Confirm New Password' type='password' />
                        <ButtonSubmit label='Submit' />
                    </form>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>

        <BoxLayout>
            <Text fontSize='md' fontWeight={800}>As always, we highly value your privacy and account security.</Text>
            <Text my={5} fontWeight={600}>How to protect your account:</Text>
            <OrderedList ml='30px' fontSize='sm'>
                {passwordProtectionTips.map((tip, index) => (
                    <ListItem key={index}>{tip}</ListItem>
                ))}
            </OrderedList>
        </BoxLayout>
    </>
);


const DeviceSetting = () => (
    <>
        <BoxLayout>
            <Text fontSize='md' fontWeight={800}>As always, we highly value your privacy and account security.</Text>
            <Text my={5} fontWeight={600}>How to protect your account:</Text>
            <OrderedList ml='30px' fontSize='sm'>
                {passwordProtectionTips.map((tip, index) => (
                    <ListItem key={index}>{tip}</ListItem>
                ))}
            </OrderedList>
        </BoxLayout>
    </>
);

const tabs = [
    { label: 'Account', component: <AccountSettingForm /> },
    { label: 'Member Placement', component: <MemberPlacementSettingForm /> },
    { label: 'Password', component: <AccountSettingPassword /> },
    { label: 'Device', component: <DeviceSetting /> }
];

const passwordProtectionTips = [
    'Never share your password with anyone',
    'If you suspect that someone knows your password, change it immediately',
    'Do not use the same password anywhere else as the one you use on crowd1.com',
    'Make sure your registered email address is kept safe',
    'Use a long password, at least 10 characters. Make it memorable rather than complicated.',
    'If using a shared computer or phone, make sure you log out from your account when finished.'
];

export default Settings;
