import React from 'react'
import InnerBoxLayout from '../../../Components/Layout/InnerBoxLayout'
import { Table, Thead, TableContainer, Tr, Th, Tbody, Td, Button, Box } from '@chakra-ui/react'
import BoxLayout from '../../../Components/Layout/BoxLayout'

const Documents = () => {
    return (
        <InnerBoxLayout label="Documents" about="Legal and compliance documentation">
            <BoxLayout>
                <TableContainer height="500px" overflowY="auto">
                    <Table variant="simple" size='lg'>
                        <Thead  height="50px" bg="secondary">
                            <Tr>
                                <Th>Name</Th>
                                <Th>Download</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                documentsName.map((name, index) => {
                                    return <Tr key={index}>
                                        <Td>{name}</Td>
                                        <Td><Button size="sm">Download PDF</Button></Td>
                                    </Tr>
                                })
                            }
                        </Tbody>
                    </Table >
                </TableContainer>
            </BoxLayout>
        </InnerBoxLayout>
    )
}

const documentsName = [
    "Meta Business Presentation",
    "Terms & Conditions",
    "Privacy Policy",
    "Anti Fraud Policy",
    "Income Disclaimer",
    "Compensation Plan",
    "What we are & What we are not",
    "MetaVersy Terms & Conditions"
]

export default Documents