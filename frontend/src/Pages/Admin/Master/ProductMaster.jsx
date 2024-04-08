import React, { useState } from 'react'
import {
    Box, Button, Flex, FormControl, FormLabel, Divider, IconButton, Input, Modal,
    ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text,
    Radio,
    RadioGroup,
    Stack, Textarea,
    Table, Tbody, Td, Th, Thead, Tr
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import BoxLayout from '../../../Components/Layout/BoxLayout';
import { networkMarketingProducts } from '../../../Components/Data/dummy';
import SearchForm from '../../../Components/SearchForm/SearchForm';
import useFilteredData from '../../../Hooks/useFilteredData';


const ProductMaster = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <BoxLayout showDivider={true} labelText="Add New Product">
                <form>
                    <Flex justify="space-between" mt={5}>
                        <FormControl flex="1" mr={2}>
                            <FormLabel>Product Name</FormLabel>
                            <Input type='text' placeholder='ex- product1' />
                        </FormControl>

                        <FormControl flex="1">
                            <FormLabel>Product Link</FormLabel>
                            <Input type='url' placeholder='ex- www.url.com' />
                        </FormControl>
                    </Flex>

                    <Flex justify="space-between" mt={5}>
                        <FormControl flex="1" mr={2}>
                            <FormLabel>Product Voucher Price</FormLabel>
                            <Input type='number' placeholder='ex- 1000' />
                        </FormControl>

                        <FormControl flex="1">
                            <FormLabel>Subscription Time</FormLabel>
                            <Input type='text' placeholder='ex- 3 Months' />
                        </FormControl>

                    </Flex>

                    <FormControl mt={5}>
                        <FormLabel>Minimum Voucher Quantity when Repurchase</FormLabel>
                        <Input type='number' placeholder='ex- 100' />
                    </FormControl>

                    <Flex justify="space-between" mt={5}>
                        <FormControl flex="1">
                            <FormLabel>Product Image</FormLabel>
                            <Input type='file' variant='unstyled' />
                        </FormControl>
                        <FormControl flex="1">
                            <FormLabel>Status</FormLabel>
                            <RadioGroup defaultValue='1' size='lg'>
                                <Stack spacing={5} direction='row'>
                                    <Radio colorScheme='green' value='1'>
                                        Active
                                    </Radio>
                                    <Radio colorScheme='red' value='2'>
                                        Deactive
                                    </Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                    </Flex>

                    <FormControl mt={5}>
                        <FormLabel>Product Description</FormLabel>
                        <Textarea placeholder='Write Here...' />
                    </FormControl>

                    <Flex justify="flex-end">
                        <Button mt={5} bgColor="blue" color="whitesmoke" size="md">Submit</Button>
                    </Flex>
                </form>
            </BoxLayout>
            <BoxLayout>
                <ProductTable openModal={openModal} />
            </BoxLayout>

            <ProductEditPopUp isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default ProductMaster

const ProductTable = ({ openModal }) => {
    const [isActive, setIsActive] = useState(true);
    const [filteredData, handleFilterChange] = useFilteredData(networkMarketingProducts);

    const toggleActiveButton = () => {
        setIsActive(prevState => !prevState); // Toggle the state
    };


    const handleViewClick = () => {
        openModal();
    }


    return (
        <>
            <Flex mb={5}>
                <Text fontSize="18px" fontWeight="700" color="white" flex={1}>Product List</Text>
                <SearchForm data={networkMarketingProducts} onFilterChange={handleFilterChange} />
            </Flex>
            <Divider my="30px" />
            <Box minH="450px" maxH="450px" overflowY="scroll">
                <Table variant="simple" size="sm">
                    <Thead position="sticky" top={0} zIndex="docked" style={{ backgroundColor: 'var(--secondary-bgcolor)' }}>
                        <Tr>
                            <Th>Product Id</Th>
                            <Th>Product Name</Th>
                            <Th>MinQuantity When Repurchase</Th>
                            <Th>Price</Th>
                            <Th>Status</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            filteredData?.map((product) => {
                                return (
                                    <Tr key={product.id}>
                                        <Td>{product.id}</Td>
                                        <Td>{product.name}</Td>
                                        <Td>{product.minQuantity}</Td>
                                        <Td>{product.price}</Td>
                                        <Td title='Activate/Deactivate'><Button size="xs" onClick={toggleActiveButton} >{isActive ? 'Active' : 'Inactive'}</Button></Td>
                                        <Td>
                                            <IconButton title='edit' icon={<EditIcon color="orange" />} size='sm' background="none" onClick={handleViewClick} />
                                        </Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                </Table >
            </Box>
        </>
    )
}

const ProductEditPopUp = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign='center' fontWeight="normal">Edit Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form>
                        <Flex justify="space-between" mt={5}>
                            <FormControl flex="1" mr={2}>
                                <FormLabel>Product Name</FormLabel>
                                <Input type='text' placeholder='ex- product1' />
                            </FormControl>

                            <FormControl flex="1">
                                <FormLabel>Product Link</FormLabel>
                                <Input type='url' placeholder='ex- www.url.com' />
                            </FormControl>
                        </Flex>

                        <Flex justify="space-between" mt={5}>
                            <FormControl flex="1" mr={2}>
                                <FormLabel>Product Voucher Price</FormLabel>
                                <Input type='number' placeholder='ex- 1000' />
                            </FormControl>

                            <FormControl flex="1">
                                <FormLabel>Minimum Voucher Quantity when Repurchase</FormLabel>
                                <Input type='number' placeholder='ex- 100' />
                            </FormControl>
                        </Flex>

                        <Flex justify="space-between" mt={5}>
                            <FormControl flex="1" mr={2}>
                                <FormLabel>Validity of Voucher</FormLabel>
                                <Input type='text' placeholder='ex- explanation' />
                            </FormControl>

                            <FormControl flex="1">
                                <FormLabel>Product Image</FormLabel>
                                <Input type='file' variant='unstyled' />
                            </FormControl>
                        </Flex>

                        <Flex justify="space-between" mt={5}>
                            <FormControl flex="1" mr={2}>
                                <FormLabel>Subscription Time Span</FormLabel>
                                <Input type='text' placeholder='ex- explanation' />
                            </FormControl>

                            <FormControl flex="1">
                                <FormLabel>Status</FormLabel>
                                <RadioGroup defaultValue='2' size='lg'>
                                    <Stack spacing={5} direction='row'>
                                        <Radio colorScheme='green' value='1'>
                                            Activate
                                        </Radio>
                                        <Radio colorScheme='red' value='2'>
                                            Deactivate
                                        </Radio>
                                    </Stack>
                                </RadioGroup>
                            </FormControl>
                        </Flex>

                        <FormControl mt={5}>

                        </FormControl>
                        <Flex justify="flex-end">
                            <Button mt={5} bgColor="blue" color="whitesmoke" size="md">Submit</Button>
                        </Flex>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}