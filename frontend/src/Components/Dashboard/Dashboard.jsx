import React from 'react'
import LineChart from '../Charts/LineChart'
import { Box, Text, Flex } from '@chakra-ui/react'
import TableComponent from './Tables';
import { data, data2, headers, headers2 } from '../Data/dummy';


const Dashboard = () => {




    return (
        <Box>
            <Box className="graph-container">
                <Text fontSize="20px" fontWeight="bold">Total Package sales - $3902</Text>
                <LineChart />
            </Box>
            <Box className="graph-container">
                <Text fontSize="20px" fontWeight="bold">Total Commission Paid- $8292</Text>
                <LineChart />
            </Box>
            <Flex>
                <Box className="graph-container" flex={1}>
                    <Text fontSize="15px" fontWeight="bold" mb={2}>Top Earners (50)</Text>
                    <TableComponent headers={headers} data={data} />
                </Box>
                <Box className="graph-container" flex={1}>
                    <Text fontSize="15px" fontWeight="bold">Recently Joined</Text>
                    <TableComponent headers={headers} data={data} />
                </Box>
            </Flex>
            <Box className="graph-container">
                <Text fontSize="15px" fontWeight="bold">Support</Text>
                <TableComponent headers={headers2} data={data2} />
            </Box>

        </Box>
    )
}

export default Dashboard
