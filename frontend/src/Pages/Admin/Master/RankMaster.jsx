import React, { useState } from 'react'
import {
    Box, Button, Flex, FormControl, FormLabel, Text, IconButton, Input, Modal,
    ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,
    Select, Divider,
    Table, Tbody, Td, Th, Thead, Tr
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import BoxLayout from '../../../Components/Layout/BoxLayout';
import { networkMarketingRanks } from '../../../Components/Data/dummy';
import SearchForm from '../../../Components/SearchForm/SearchForm';
import useFilteredData from '../../../Hooks/useFilteredData';

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
            <BoxLayout labelText="Add New Rank" showDivider={true}>
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
            </BoxLayout>

            <BoxLayout>
                <RankTable openModal={openModal} />
            </BoxLayout>


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
                <Text fontSize="18px" fontWeight="700" color="white" flex={1}>Rank List</Text>
                <SearchForm data={networkMarketingRanks} onFilterChange={handleFilterChange} />
            </Flex>
            <Divider my="30px" />
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
                                            <IconButton title='edit' icon={<EditIcon color="white" />} size='sm' background="orange" onClick={handleViewClick} />
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