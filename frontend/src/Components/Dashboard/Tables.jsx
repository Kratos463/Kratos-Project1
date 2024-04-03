import React from 'react';
import { Table, Tbody, Td, Th, Thead, Tr, Box } from '@chakra-ui/react';

const TableComponent = ({ headers, data }) => {
    return (
        <Box maxH="400px" overflowY="scroll">
            <Table variant="simple" size="md">
                <Thead  position="sticky" top={0} zIndex="docked" style={{ backgroundColor: 'var(--secondary-bgcolor)' }}>
                    <Tr color="white">
                        {headers.map(header => (
                            <Th key={header}>{header}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((row, rowIndex) => (
                        <Tr key={rowIndex}>
                            {Object.values(row).map((value, columnIndex) => {
                                return (
                                    <>
                                        <Td key={columnIndex}>{value}</Td>
                                    </>
                                )
                            })}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default TableComponent;
