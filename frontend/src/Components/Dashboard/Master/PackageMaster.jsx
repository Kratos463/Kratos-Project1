import React, { useState } from 'react'
import {
  Box, Button, Flex, FormControl, FormLabel, Heading, IconButton, Input, Modal,
  ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Table, Tbody, Td, Th, Thead, Tr
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { networkMarketingProducts, packages } from '../../Data/dummy';
import useFilteredData from '../../Hooks/useFilteredData';
import SearchForm from '../../GeneralScreens/SearchForm';

const PackageMaster = () => {

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
        <Heading as="h5" size="sm" color="white">Add New Package</Heading>
        <form>
          <Flex justify="space-between" mt={5}>
            <FormControl flex="1" mr={2}>
              <FormLabel>Package Name</FormLabel>
              <Input type='text' placeholder='ex- product1' />
            </FormControl>

            <FormControl flex="1" mr={2}>
              <FormLabel>Package Cost</FormLabel>
              <Input type='number' placeholder='ex- 1000' />
            </FormControl>
          </Flex>

          <Flex justify="space-between" mt={5}>
            <FormControl flex="1" mr={2}>
              <FormLabel>Capping Sales Bouns</FormLabel>
              <Input type='number' placeholder='ex- 1000' />
            </FormControl>


            <FormControl flex="1">
              <FormLabel>Product Image</FormLabel>
              <Input type='file' variant='unstyled' />
            </FormControl>
          </Flex>

          <Flex justify="space-between" mt={5}>
            <FormControl flex="1">
              <FormLabel>Select Product</FormLabel>
              <Select multiple={false}>
                {networkMarketingProducts.map((product, index) => <option value={product.name} key={index}>{product.name}</option>)}
              </Select>
            </FormControl>

            <FormControl flex="1">
              <FormLabel>Voucher Quantity</FormLabel>
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
      </Box >
      <Box p="10px" style={{ backgroundColor: 'var(--secondary-bgcolor)' }}>
        <PackageTable openModal={openModal} />
      </Box>

      <PackageEditPopUp isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default PackageMaster

const PackageTable = ({ openModal }) => {

  const [isActive, setIsActive] = useState(true);
  const [filteredData, handleFilterChange] = useFilteredData(packages);

  const toggleActiveButton = () => {
    setIsActive(prevState => !prevState); // Toggle the state
  };


  const handleViewClick = () => {
    openModal();
  }

  return (
    <>
      <Flex mb={5}>
        <Heading as="h5" size="sm" color="white" flex={1}>Package List</Heading>
        <SearchForm data={packages} onFilterChange={handleFilterChange} />
      </Flex>
      <Box minH="450px" maxH="450px" overflowY="scroll">
        <Table variant="simple" size="sm">
          <Thead position="sticky" top={0} zIndex="docked" style={{ backgroundColor: 'var(--secondary-bgcolor)' }}>
            <Tr>
              <Th>Package Id</Th>
              <Th>Package Name</Th>
              <Th>Package cost</Th>
              <Th>Selected Product</Th>
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
                    <Td>{product.packageName}</Td>
                    <Td>{product.cost}</Td>
                    <Td>{product.selectedProduct}</Td>
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

const PackageEditPopUp = ({ isOpen, onClose }) => {
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