import React from 'react'
import PageLayout from '../../../Components/Layout/PageLayout'
import {
    Text, Flex, Tabs, TabList, Tab, TabPanels, TabPanel, Box, FormControl, Input, FormLabel,
    Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Button
} from '@chakra-ui/react'

const Settings = () => {
    return (
        <PageLayout heading="Settings">
            <Flex width="300px" height='300px'>
                <Text color="rgba(26, 26, 153, 0.763)" textAlign='center' fontSize='xl'>Abhishek</Text>
                <Text>
                    Your KYC was approved on July 7th, 2021. You can not change name or address without contacting support.
                </Text>
            </Flex>
            <Tabs isFitted variant='enclosed'>
                <TabList mb='1em'>
                    <Tab>Account</Tab>
                    <Tab>Member Placement</Tab>
                    <Tab>Password</Tab>
                    <Tab>Device</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <AccountSettingForm />
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <AccountSettingPassword />
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </PageLayout>
    )
}

const AccountSettingForm = () => {
    return (
        <Accordion  allowToggle>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            Personal Information
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <form>
                        <FormControl mt={5}>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' placeholder='example@gmail.com' />
                        </FormControl>
                        <FormControl mt={5}>
                            <FormLabel>First Name</FormLabel>
                            <Input type='text' placeholder='abhishek' />
                        </FormControl>
                        <FormControl mt={5}>
                            <FormLabel>Last Name</FormLabel>
                            <Input type='text' placeholder='singh' />
                        </FormControl>
                        <FormControl mt={5}>
                            <FormLabel>Address</FormLabel>
                            <Input type='text' placeholder='s-2, om apartment, green campus, narayan vihar' />
                        </FormControl>
                        <FormControl mt={5}>
                            <FormLabel>Postal Code</FormLabel>
                            <Input type='text' placeholder='289028' />
                        </FormControl>
                        <FormControl mt={5}>
                            <FormLabel>City</FormLabel>
                            <Input type='email' placeholder='Mumbai' />
                        </FormControl>
                        <FormControl mt={5}>
                            <FormLabel>Country</FormLabel>
                            <Input type='email' placeholder='india' />
                        </FormControl>
                        <FormControl mt={5}>
                            <FormLabel>Time Zone</FormLabel>
                            <Input type='email' placeholder='example@gmail.com' />
                        </FormControl>
                        <FormControl mt={5}>
                            <FormLabel>Phone Number</FormLabel>
                            <Input type='email' placeholder='example@gmail.com' />
                        </FormControl>
                        <FormControl mt={5}>
                            <FormLabel>Date Of Birth</FormLabel>
                            <Input type='email' placeholder='example@gmail.com' />
                        </FormControl>
                        <FormControl mt={5}>
                            <FormLabel>Email Newsletter</FormLabel>
                            <Input type='email' placeholder='example@gmail.com' />
                        </FormControl>
                        <Button type="submit">Submit</Button>
                    </form>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

const AccountSettingPassword = () => {
    return (
        <Accordion  allowToggle>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            Change Password
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <form>
                        <FormControl mt={5}>
                            <FormLabel>Current Password</FormLabel>
                            <Input type='password' />
                        </FormControl>
                        <FormControl mt={5}>
                            <FormLabel>New Password</FormLabel>
                            <Input type='password' />
                        </FormControl>
                        <FormControl mt={5}>
                            <FormLabel>Confirm New Password</FormLabel>
                            <Input type='password'/>
                        </FormControl>
                        <Button type="submit">Submit</Button>
                    </form>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default Settings