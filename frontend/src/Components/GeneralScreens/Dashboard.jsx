import React from 'react'
import LineChart from '../Charts/LineChart'
import { Box, Text, Flex, Heading} from '@chakra-ui/react'
import TableComponent from './Tables';
import { data, data2, headers, headers2 } from '../Data/dummy';
import Breadcrumbs from './BreadCrumbs';


const Dashboard = () => {


    return (
        <Box>
            <Breadcrumbs />
            <Heading ml={6} as='h2' size='md'>Welcome, Dashboard</Heading>
            <Box className="graph-container">
                <Text fontSize="20px" fontWeight="bold">Total Package sales - $3902</Text>
                <LineChart />
            </Box>
            <Box className="graph-container">
                <Text fontSize="20px" fontWeight="bold">Total Commission Paid- $8292</Text>
                <LineChart />
            </Box>
            <Flex flexDirection={{base: "column", md:"row"}}>
                <Box className="graph-container" flex={1}>
                    <Heading as="h5" size="sm" color="white" mb={2}>Top Earners (50)</Heading>
                    <TableComponent headers={headers} data={data} />
                </Box>
                <Box className="graph-container" flex={1}>
                    <Heading as="h5" size="sm" color="white" mb={2}>Recently Joined</Heading>
                    <TableComponent headers={headers} data={data} />
                </Box>
            </Flex>
            <Box className="graph-container">
                <Heading as="h5" size="sm" color="white" mb={2}>Support</Heading>
                <TableComponent headers={headers2} data={data2} />
            </Box>

        </Box>
    )
}

export default Dashboard
