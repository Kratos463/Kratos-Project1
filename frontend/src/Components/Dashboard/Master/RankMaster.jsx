import React, { useState } from 'react'
import {
    Box, Button, Flex, FormControl, FormLabel, Heading, IconButton, Input, Modal,
    ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,
    Select,
    Table, Tbody, Td, Th, Thead, Tr
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { networkMarketingRanks } from '../../Data/dummy';
import SearchForm from '../../GeneralScreens/SearchForm';
import useFilteredData from '../../Hooks/useFilteredData';

const RankMaster = () => {

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
                <Heading as="h5" size="sm" color="white">Add New Rank</Heading>
                <form>
                    <Flex justify="space-between" mt={5}>
                        <FormControl flex="1" mr={2}>
                            <FormLabel>Rank Name</FormLabel>
                            <Input type='text' placeholder='ex- rank1' />
                        </FormControl>

                        <FormControl flex="1">
                            <FormLabel>Min Binary Income Required</FormLabel>
                            <Input type='text' placeholder='ex- 4000' />
                        </FormControl>
                    </Flex>

                    <Flex justify="space-between" mt={5}>
                        <FormControl flex="1" mr={2}>
                            <FormLabel>Downline Achiever Target </FormLabel>
                            <Input type='text' placeholder='ex- 100' />
                        </FormControl>

                        <FormControl flex="1">
                            <FormLabel>Min Person Required</FormLabel>
                            <Select multiple={false} color="black">
                                <option>100</option>
                                <option>200</option>
                                <option>300</option>
                                <option>400</option>
                                <option>500</option>
                                <option>700</option>
                                <option>800</option>
                            </Select>
                        </FormControl>
                    </Flex>

                    <Flex justify="space-between" mt={5}>
                        <FormControl flex="1" mr={2}>
                            <FormLabel>Pool Bonus Percentage for Rank</FormLabel>
                            <Input type='text' placeholder='ex- 20' />
                        </FormControl>

                        <FormControl flex="1">
                            <FormLabel>Rank Icon</FormLabel>
                            <Input type='file' variant='unstyled' />
                        </FormControl>
                    </Flex>

                    <FormControl mt={5}>

                    </FormControl>
                    <Flex justify="flex-end">
                        <Button mt={5} bgColor="blue" color="whitesmoke" size="md">Submit</Button>
                    </Flex>
                </form>
            </Box>
            <Box p="10px" style={{ backgroundColor: 'var(--secondary-bgcolor)' }}>
                <RankTable openModal={openModal} />
            </Box>

            <RankEditPopUp isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default RankMaster

const RankTable = ({ openModal }) => {
    
    const [isActive, setIsActive] = useState(true);
    const [filteredData, handleFilterChange] = useFilteredData(networkMarketingRanks);

    const toggleActiveButton = () => {
        setIsActive(prevState => !prevState); // Toggle the state
    };


    const handleViewClick = () => {
        openModal();
    }

    return (
        <>
            <Flex mb={5}>
                <Heading as="h5" size="sm" color="white" flex={1}>Rank List</Heading>
                <SearchForm data={networkMarketingRanks} onFilterChange={handleFilterChange} />
            </Flex>
            <Box minH="450px" maxH="450px" overflowY="scroll">
                <Table variant="simple" size="sm">
                    <Thead position="sticky" top={0} zIndex="docked" style={{ backgroundColor: 'var(--secondary-bgcolor)' }}>
                        <Tr>
                            <Th>Rank Id</Th>
                            <Th>Rank Name</Th>
                            <Th>Status</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            filteredData?.map((rank) => {
                                return (
                                    <Tr key={rank.id}>
                                        <Td>{rank.id}</Td>
                                        <Td>{rank.rank}</Td>
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

const RankEditPopUp = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign='center' fontWeight="normal">Edit Rank</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form>
                        <Flex justify="space-between" mt={5}>
                            <FormControl flex="1" mr={2}>
                                <FormLabel>Rank Name</FormLabel>
                                <Input type='text' placeholder='ex- rank1' />
                            </FormControl>

                            <FormControl flex="1">
                                <FormLabel>Min Binary Income Required</FormLabel>
                                <Input type='text' placeholder='ex- 4000' />
                            </FormControl>
                        </Flex>

                        <Flex justify="space-between" mt={5}>
                            <FormControl flex="1" mr={2}>
                                <FormLabel>Downline Achiever Target </FormLabel>
                                <Input type='text' placeholder='ex- 100' />
                            </FormControl>

                            <FormControl flex="1">
                                <FormLabel>Min Person Required</FormLabel>
                                <Select multiple={false}>
                                    <option>100</option>
                                    <option>200</option>
                                    <option>300</option>
                                    <option>400</option>
                                    <option>500</option>
                                    <option>700</option>
                                    <option>800</option>
                                </Select>
                            </FormControl>
                        </Flex>

                        <Flex justify="space-between" mt={5}>
                            <FormControl flex="1" mr={2}>
                                <FormLabel>Pool Bonus Percentage for Rank</FormLabel>
                                <Input type='text' placeholder='ex- 20' />
                            </FormControl>

                            <FormControl flex="1">
                                <FormLabel>Rank Icon</FormLabel>
                                <Input type='file' variant='unstyled' />
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