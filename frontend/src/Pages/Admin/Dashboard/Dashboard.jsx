import React from 'react'
import LineChart from '../../../Components/Charts/LineChart'
import { Box, Flex, Heading } from '@chakra-ui/react'
import TableComponent from '../../../Components/Tables/Tables';
import { data, data2, headers, headers2 } from '../../../Components/Data/dummy';
// import Breadcrumbs from './BreadCrumbs';
import BoxLayout from '../../../Components/Layout/BoxLayout';


const Dashboard = () => {


    return (
        <Box>
            {/* <Breadcrumbs /> */}
            <Heading ml={6} as='h2' size='md'>Welcome, Dashboard</Heading>
            <BoxLayout labelText="Total Package sales - $3902" showDivider={true}>
                <LineChart />
            </BoxLayout>
            <BoxLayout labelText="Total Commission Paid- $8292" showDivider={true}>
                <LineChart />
            </BoxLayout>

            <Flex flexDirection={{ base: "column", md: "row" }} >
                <BoxLayout labelText="Top Earners (50)" showDivider={true}>
                    <TableComponent headers={headers} data={data} />
                </BoxLayout>
                <BoxLayout labelText="Top Earners (50)" showDivider={true}>
                    <TableComponent headers={headers} data={data} />
                </BoxLayout>
            </Flex>
            <BoxLayout labelText="Support" showDivider={true}>
                <TableComponent headers={headers2} data={data2} />
            </BoxLayout>

        </Box>
    )
}

export default Dashboard
