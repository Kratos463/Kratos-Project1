import React, { useState } from 'react';
import {
    Box, Button, Flex, FormControl, FormLabel, Text, IconButton, Input, Modal,
    ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,
    Table, Tbody, Td, Th, Thead, Tr, Divider
} from '@chakra-ui/react';

import { EditIcon, DeleteIcon, NotAllowedIcon } from '@chakra-ui/icons';
// import Breadcrumbs from '../../GeneralScreens/BreadCrumbs';

import BoxLayout from '../../../Components/Layout/BoxLayout';
import { countries } from '../../../Components/Data/dummy';
import SearchForm from '../../../Components/SearchForm/SearchForm';
import useFilteredData from '../../../Hooks/useFilteredData';

const CountryMaster = () => {
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
            {/* <Breadcrumbs /> */}
            <BoxLayout labelText="Add New Country" showDivider={true}>
                <form>
                    <FormControl mt={5}>
                        <FormLabel>Enter Country Name</FormLabel>
                        <Input type='text' placeholder='ex- india' />
                    </FormControl>
                    <Flex justify="flex-end">
                        <Button mt={5} bgColor="blue" color="whitesmoke" size="md">Submit</Button>
                    </Flex>
                </form>
            </BoxLayout>
            <BoxLayout showDivider={false}>
                <CountryTable openModal={openModal} />
            </BoxLayout>

            {/* Edit popup */}
            <CountryEditPopUp isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

const CountryTable = ({ openModal }) => {
    const [filteredData, handleFilterChange] = useFilteredData(countries);

    const handleViewClick = () => {
        // Call the openModal function passed as prop
        openModal();
    }

    return (
        <>
            <Flex mb={5}>
            <Text fontSize="18px" fontWeight="700" color="white" flex={1}>Country List</Text>
                <SearchForm data={countries} onFilterChange={handleFilterChange} />
            </Flex>
            <Divider my="30px"/>
            <Box minH="450px" maxH="450px" overflowY="scroll">
                <Table variant="simple" size="sm">
                    <Thead position="sticky" top={0} zIndex="docked" style={{ backgroundColor: 'var(--secondary-bgcolor)' }}>
                        <Tr>
                            <Th>Country Id</Th>
                            <Th>Country Name</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            filteredData?.map((country) => {
                                return (
                                    <Tr key={country.id}>
                                        <Td>{country.id}</Td>
                                        <Td>{country.name}</Td>
                                        <Td display={{ base: "flex" }}>
                                            <IconButton title='block' icon={<NotAllowedIcon color="red" />} size='sm' background="none" />
                                            <IconButton title='edit' icon={<EditIcon color="orange" />} size='sm' background="none" onClick={handleViewClick} />
                                            <IconButton title='delete' icon={<DeleteIcon color="red" />} size='sm' background="none" />
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

const CountryEditPopUp = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign='center' fontWeight="normal">Edit Country</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form>
                        <FormControl mt={5}>
                            <FormLabel>Enter Country Name</FormLabel>
                            <Input type='text' placeholder='ex- india' />
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

export default CountryMaster;
