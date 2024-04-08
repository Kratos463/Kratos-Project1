import React, { useState } from 'react'
import {
    Box, Button, Flex, FormControl, FormLabel, IconButton, Input, Modal,
    ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,
    Table, Tbody, Td, Th, Thead, Tr, Text, Divider
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import BoxLayout from '../../../Components/Layout/BoxLayout';
import { users } from '../../../Components/Data/dummy';
import SearchForm from '../../../Components/SearchForm/SearchForm';
import useFilteredData from '../../../Hooks/useFilteredData';
const OperatorMaster = () => {

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
            <BoxLayout labelText="Add New Operator" showDivider={true}>
                <form>
                    <FormControl mt={5}>
                        <FormLabel>Name</FormLabel>
                        <Input type='text' placeholder='ex- john doe' />
                    </FormControl>
                    <FormControl mt={5}>
                        <FormLabel>Email</FormLabel>
                        <Input type='text' placeholder='ex- johndoe@gmail.com' />
                    </FormControl>
                    <FormControl mt={5}>
                        <FormLabel>Mobile No.</FormLabel>
                        <Input type='text' placeholder='0000000000' />
                    </FormControl>
                    <Flex justify="flex-end">
                        <Button mt={5} bgColor="blue" color="whitesmoke" size="md">Submit</Button>
                    </Flex>
                </form>
            </BoxLayout>
            <BoxLayout>
                <OperatorTable openModal={openModal} />
            </BoxLayout>
            <OperatorEditPopUp isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default OperatorMaster

const OperatorTable = ({ openModal }) => {

    const [isActive, setIsActive] = useState(true);
    const [filteredData, handleFilterChange] = useFilteredData(users);

    const toggleActiveButton = () => {
        setIsActive(prevState => !prevState); // Toggle the state
    };

    const handleViewClick = () => {
        openModal();
    }

    return (
        <>
            <Flex mb={5}>
                <Text fontSize="18px" fontWeight="700" color="white" flex={1}>Operator List</Text>
                <SearchForm data={users} onFilterChange={handleFilterChange} />
            </Flex>
            <Divider my="30px" />
            <Box minH="450px" maxH="450px" overflowY="scroll">
                <Table variant="simple" size="sm">
                    <Thead position="sticky" top={0} zIndex="docked" style={{ backgroundColor: 'var(--secondary-bgcolor)' }}>
                        <Tr>
                            <Th>Operator Id</Th>
                            <Th>Operator Name</Th>
                            <Th>Operator email</Th>
                            <Th>Status</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            filteredData?.map((user) => {
                                return (
                                    <Tr key={user.id}>
                                        <Td>{user.id}</Td>
                                        <Td>{user.name}</Td>
                                        <Td>{user.email}</Td>
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

const OperatorEditPopUp = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign='center' fontWeight="normal">Edit Operator</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form>
                        <FormControl mt={5}>
                            <FormLabel>Name</FormLabel>
                            <Input type='text' placeholder='ex- john doe' />
                        </FormControl>
                        <FormControl mt={5}>
                            <FormLabel>Email</FormLabel>
                            <Input type='text' placeholder='ex- johndoe@gmail.com' />
                        </FormControl>
                        <FormControl mt={5}>
                            <FormLabel>Mobile No.</FormLabel>
                            <Input type='text' placeholder='0000000000' />
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