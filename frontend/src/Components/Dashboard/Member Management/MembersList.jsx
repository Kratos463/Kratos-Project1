import React, { useState } from 'react'
import {
    Box, Button, Flex, FormControl, FormLabel, Heading, IconButton, Input, Modal,
    ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,
    Select, Table, Tbody, Td, Th, Thead, Tr
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import useFilteredData from '../../Hooks/useFilteredData'
import { countries, memberList } from '../../Data/dummy'
import SearchForm from '../../GeneralScreens/SearchForm';
import moment from 'moment-timezone';

const MembersList = () => {

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
            <Box p="10px" style={{ backgroundColor: 'var(--secondary-bgcolor)' }}>
                <MemberEditPopUp isOpen={isModalOpen} onClose={closeModal} />
                <MemberTable openModal={openModal} />
            </Box>
        </>
    )
}

export default MembersList


const MemberTable = ({ openModal }) => {
    const [isActive, setIsActive] = useState(true);
    const [filteredData, handleFilterChange] = useFilteredData(memberList);

    const toggleActiveButton = () => {
        setIsActive(prevState => !prevState); // Toggle the state
    };


    const handleViewClick = () => {
        openModal();
    }

    return (
        <>
            <Flex mb={5}>
                <Heading as="h5" size="sm" color="white" flex={1}>Member's List</Heading>
                <SearchForm data={memberList} onFilterChange={handleFilterChange} />
            </Flex>
            <Box minH="450px" maxH="450px" overflowY="scroll">
                <Table variant="simple" size="sm">
                    <Thead position="sticky" top={0} zIndex="docked" style={{ backgroundColor: 'var(--secondary-bgcolor)' }}>
                        <Tr>
                            <Th>Username</Th>
                            <Th>Email</Th>
                            <Th>Name</Th>
                            <Th>Package</Th>
                            <Th>Rank</Th>
                            <Th>Status</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            filteredData?.map((member, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td>{member.username}</Td>
                                        <Td>{member.email}</Td>
                                        <Td>{member.name}</Td>
                                        <Td>{member.package}</Td>
                                        <Td>{member.rank}</Td>
                                        <Td title='Activate/Deactivate'><Button size="xs" onClick={toggleActiveButton} >{isActive ? 'Block User' : 'Unblock User'}</Button></Td>
                                        <Td>
                                            <IconButton title='edit' icon={<EditIcon color="orange" />} size='sm' background="none" onClick={handleViewClick} />
                                            <Button size="xs">View Profile</Button>
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

const MemberEditPopUp = ({ isOpen, onClose }) => {

    const timeZones = moment.tz.names();

    // const handleChange = e => {
    //     onChange(e.target.value);
    // };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign='center' fontWeight="normal">Edit Member</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form>
                        <Flex justify="space-between" mt={5}>
                            <FormControl flex="1" mr={2} >
                                <FormLabel>Username</FormLabel>
                                <Input type='text' placeholder='ex- product1' readOnly />
                            </FormControl>

                            <FormControl flex="1">
                                <FormLabel>Name</FormLabel>
                                <Input type='url' placeholder='ex- www.url.com' />
                            </FormControl>
                        </Flex>

                        <Flex justify="space-between" mt={5}>
                            <FormControl flex="1" mr={2}>
                                <FormLabel>Email</FormLabel>
                                <Input type='email' placeholder='ex- example@gmail.com' />
                            </FormControl>

                            <FormControl flex="1">
                                <FormLabel>Phone</FormLabel>
                                <Input type='text' placeholder='ex- 00000000' />
                            </FormControl>
                        </Flex>


                        <FormControl flex="1" mt={5}>
                            <FormLabel>Address</FormLabel>
                            <Input type='text' placeholder='ex- south walles 329-A' />
                        </FormControl>

                        <Flex justify="space-between" mt={5}>
                            <FormControl flex="1" mr={2}>
                                <FormLabel>City</FormLabel>
                                <Input type='text' placeholder='ex- cambridge' />
                            </FormControl>

                            <FormControl flex="1">
                                <FormLabel>Country</FormLabel>
                                <Select multiple={false}>
                                    {countries.map((country, index) => <option value={country.name} key={index}>{country.name}</option>)}
                                </Select>
                            </FormControl>
                        </Flex>

                        <Flex justify="space-between" mt={5}>
                            <FormControl flex="1" mr={2}>
                                <FormLabel>Postal Code</FormLabel>
                                <Input type='text' placeholder='ex- 283204' />
                            </FormControl>

                            <FormControl flex="1">
                                <FormLabel>D.O.B</FormLabel>
                                <Input type='date' />
                            </FormControl>
                        </Flex>

                        <FormControl mt={5}>
                            <FormLabel>Time Zone</FormLabel>
                            <Select
                                // value={value}
                                // onChange={handleChange}
                                placeholder="Select a time zone"
                            >
                                {timeZones.map(timeZone => (
                                    <option key={timeZone} value={timeZone}>
                                        {timeZone}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                        <Flex justify="flex-end" gap={2}>
                            <Button mt={5} bgColor="red.500" color="whitesmoke" size="md">Block User</Button>
                            <Button mt={5} bgColor="blue" color="whitesmoke" size="md">Update</Button>
                        </Flex>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
