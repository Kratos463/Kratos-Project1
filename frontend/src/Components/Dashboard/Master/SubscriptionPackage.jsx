import React from 'react'
import {
    Box, Button, Flex, FormControl, FormLabel, Heading, Input
} from '@chakra-ui/react';

const SubscriptionPackage = () => {
    return (
        <>
            <Box boxShadow='base' bgColor="#16113a" p="10px" color="whitesmoke" height="fit-content" mb={5}>
                <Heading as="h5" size="sm" color="white">Add New Product</Heading>
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
                            {/* <RadioGroup defaultValue='1' size='lg'>
                                <Stack spacing={5} direction='row'>
                                    <Radio colorScheme='green' value='1'>
                                        Active
                                    </Radio>
                                    <Radio colorScheme='red' value='2'>
                                        Deactive
                                    </Radio>
                                </Stack>
                            </RadioGroup> */}
                        </FormControl>
                    </Flex>

                    <Flex justify="flex-end">
                        <Button mt={5} bgColor="blue" color="whitesmoke" size="md">Submit</Button>
                    </Flex>
                </form>
            </Box >
        </>
    )
}

export default SubscriptionPackage