import React from 'react'
import InnerBoxLayout from '../../../Components/Layout/InnerBoxLayout'
import BoxLayout from '../../../Components/Layout/BoxLayout'
import { TableContainer, Table, Tbody, Tr, Td, Stack, Heading, Text } from '@chakra-ui/react'
import { ButtonSubmit } from './Settings'

const Invoices = () => {
    return (
        <InnerBoxLayout
            label="Invoices"
            about="Download your invoices as PDF files and save them in your bookkeeping for taxes."
        >
            <BoxLayout labelText="List of all your invoices" showDivider={true}>
                <TableContainer height="500px" overflowY="auto">
                    <Table variant="simple" size='lg'>
                        <Tbody fontWeight={600} >
                            {
                                new Array(20).fill(0).map((element, index) => {
                                    return <Tr key={index}>
                                        <Td>
                                            <Stack>
                                                <Heading fontWeight={800} size="sm">Invoice_200628657d</Heading>
                                                <Text>2020-06-05</Text>
                                            </Stack>
                                        </Td>
                                        <Td><ButtonSubmit label="Download" /></Td>
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

export default Invoices