import React from 'react'
import {
    Tabs, TabList, Tab, TabPanels, TabPanel, Table, Thead, Flex,
    Tbody, Tr, Th, Td, TableContainer, Card, CardHeader, CardBody, Heading, Text
} from '@chakra-ui/react'
import InnerBoxLayout from '../../../Components/Layout/InnerBoxLayout'

const UserLog = () => {
    return (
        <InnerBoxLayout label="User Logs">

            <Flex gap={5} mb={20}>
                {
                    userLogData.map((data, index) => {
                        return <UserLogCard key={index} title={data.title} amount={data.amount} />
                    })
                }
            </Flex>

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
    )
}

const UserLogTable = () => {
    return (
        <TableContainer height="500px" overflowY="auto">
            <Table variant="simple" size='lg'>
                <Thead position="sticky" top={0} bgColor="primary" height="50px" >
                    <Tr>
                        <Th>Event</Th>
                        <Th>Amount</Th>
                        <Th>Date & Time</Th>
                    </Tr>
                </Thead>
                <Tbody fontWeight={600}>
                    {
                        eventData.map((data, index) => {
                            return <Tr key={index}>
                                <Td>{data.event}</Td>
                                <Td color="green">{data.amount}</Td>
                                <Td>{data.date}</Td>
                            </Tr>
                        })
                    }
                </Tbody>
            </Table >
        </TableContainer>
    )

}

const UserLogCard = ({ title, amount }) => {
    return (
        <Card flex={1} size='sm' sx={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            borderRadius: '10px',
            border: '1px solid rgba( 255, 255, 255, 0.18 )',
        }}>
            <CardHeader>
                <Heading fontSize="md" as="h4" color="font.200">{title}</Heading>
            </CardHeader>
            <CardBody>
                <Text color="green" fontWeight={600}>{amount}</Text>
            </CardBody>
        </Card>
    )
}


const userLogData = [
    { title: "Total Bonus Earned", amount: "105.64,20 BP" },
    { title: "Binary Percentage", amount: "62,15%" },
    { title: "Matching Percentage", amount: "17,85%" },
    { title: "Preliminary Bonus", amount: "0.00 BP" },
    { title: "Last Report Status", amount: "No Generated Report" },
]

const eventData = [
    { event: "Payout from prel account", amount: "447.00 BP", date: "2023-01-05 15:00" },
    { event: "Payout from prel account", amount: "447.00 BP", date: "2023-01-05 15:00" },
    { event: "Payout from prel account", amount: "447.00 BP", date: "2023-01-05 15:00" },
    { event: "Payout from prel account", amount: "447.00 BP", date: "2023-01-05 15:00" },
    { event: "Payout from prel account", amount: "447.00 BP", date: "2023-01-05 15:00" },
    { event: "Payout from prel account", amount: "447.00 BP", date: "2023-01-05 15:00" },
    { event: "Payout from prel account", amount: "447.00 BP", date: "2023-01-05 15:00" },
    { event: "Payout from prel account", amount: "447.00 BP", date: "2023-01-05 15:00" },
    { event: "Payout from prel account", amount: "447.00 BP", date: "2023-01-05 15:00" },
]

const tabs = [
    { label: 'Payouts', component: <UserLogTable /> },
    { label: 'Binary Payment', component: <UserLogTable /> },
    { label: 'Binary Points', component: <UserLogTable /> },
    { label: 'Rank Points', component: <UserLogTable /> },
    { label: 'User log', component: <UserLogTable /> },
    { label: 'Gift Code Log', component: <UserLogTable /> },
    { label: 'Matching Bonus', component: <UserLogTable /> },
    { label: 'Reports', component: <UserLogTable /> }
]

export default UserLog