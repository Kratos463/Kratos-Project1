import React from 'react'
import {
    Tabs, TabList, Tab, TabPanel, TabPanels, Stack, Flex, Image, Heading, Text, TableContainer, Table,
    Thead, Tr, Th, Td, Tbody, Button
} from '@chakra-ui/react'
import InnerBoxLayout from '../../../Components/Layout/InnerBoxLayout'
import TransparentBox from '../../../Components/Layout/TransparentBox'
import BoxLayout from '../../../Components/Layout/BoxLayout'
import AccountImage from '../../../Assests/c1-rewards-badge.webp'
import { ButtonSubmit, FormField } from './Settings'

const Withdrawal = () => {
    return (
        <InnerBoxLayout label="Make a Bitcoin Withdrawal">
            <Tabs isFitted variant='soft-rounded' colorScheme='blue'>
                <TabList mb='2em' sx={{ boxShadow: '0 0 10px rgba(205, 205, 253, 0.5)' }} borderRadius="50px">
                    <Tab>New Withdrawal</Tab>
                    <Tab>Transactions</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <WithdrawalForm />
                    </TabPanel>
                    <TabPanel>
                        <WithTransactionTable />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </InnerBoxLayout>
    )
}

const WithdrawalForm = () => {
    return (
        <BoxLayout>
            <Flex gap={10} justify='center' align='center'>
                <Stack>
                    <Image src={AccountImage} width="100px" />
                    <Heading fontSize="md">Total Account Balance</Heading>
                    <Text color="green" fontWeight={600}>89920.8 BP</Text>
                </Stack>
                <TransparentBox>
                    <form>
                        <FormField label="Amount to Withdraw" type="number" placeholder="1250" />
                        <FormField label="Bitcoin Address" type="text" placeholder="knskkkssskakk" />
                        <ButtonSubmit label="Request Withdrawal" justify="center" />
                    </form>
                </TransparentBox>
            </Flex>
        </BoxLayout>
    )
}

const WithTransactionTable = () => {
    return (
        <TableContainer height="500px" overflowY="auto">
            <Table variant="simple" size='lg'>
                <Thead position="sticky" top={0} bgColor="primary" height="50px" >
                    <Tr>
                        <Th>Bitcoin Wallet Address</Th>
                        <Th>Amount</Th>
                        <Th>Status</Th>
                        <Th>Request Time</Th>
                    </Tr>
                </Thead>
                <Tbody fontWeight={600} fontSize='sm'>
                    {
                        new Array(20).fill(0).map((element, index) => {
                            return <Tr key={index}>
                                <Td>37nrxBoB79gVMJMLGJKsRatst8ixuEHnah</Td>
                                <Td color="green">1,288.00 BP</Td>
                                <Td colorScheme="blue" variant="solid" rounded="lg" size="sm">Done</Td>
                                <Td>2023-03-24 03:39</Td>
                            </Tr>
                        })
                    }

                </Tbody>
            </Table >
        </TableContainer>
    )
}



export default Withdrawal