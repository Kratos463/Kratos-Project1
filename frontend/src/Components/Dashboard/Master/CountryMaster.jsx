import React, { useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Heading, IconButton, Input, Modal,
     ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, 
     Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { countries } from '../../Data/dummy';
import { EditIcon, DeleteIcon, NotAllowedIcon } from '@chakra-ui/icons';
import SearchForm from '../../GeneralScreens/SearchForm';
import useFilteredData from '../../Hooks/useFilteredData';

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
                <Box boxShadow='base' bgColor="#16113a" p="10px" color="whitesmoke" height="fit-content" mb={5}>
                    <Heading as="h5" size="sm" color="white">Add New Country</Heading>
                    <form>
                        <FormControl mt={5}>
                            <FormLabel>Enter Country Name</FormLabel>
                            <Input type='text' placeholder='ex- india' />
                        </FormControl>
                        <Flex justify="flex-end">
                            <Button mt={5} bgColor="blue" color="whitesmoke" size="md">Submit</Button>
                        </Flex>
                    </form>
                </Box>
                <Box p="10px" style={{ backgroundColor: 'var(--secondary-bgcolor)' }}>
                    <CountryTable openModal={openModal} />
                </Box>

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
                <Heading as="h5" size="sm" color="white" flex={1}>Country List</Heading>
                <SearchForm data={countries} onFilterChange={handleFilterChange} />
            </Flex>
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
                                        <Td>
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
