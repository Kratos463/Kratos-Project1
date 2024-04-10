import React from 'react'
import InnerBoxLayout from '../../../Components/Layout/InnerBoxLayout'
import { Table, Thead, Tr, Th, Tbody, Td, Button } from '@chakra-ui/react'

const Documents = () => {
    return (
        <InnerBoxLayout label="Documents" about="Legal and compliance documentation">
            <Table variant="simple" size='md' style={{ backgroundColor: 'var(--secondary-bgcolor)' }} borderRadius={10}>
                <Thead position="sticky" top={0} zIndex="docked" height="50px">
                    <Tr>
                        <Th>Name</Th>
                        <Th>Download</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        documentsName.map((name, index)=> {
                            return <Tr key={index}>
                                <Td>{name}</Td>
                                <Td><Button size="sm">Download PDF</Button></Td>
                            </Tr>
                        })
                    }
                </Tbody>
            </Table >
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