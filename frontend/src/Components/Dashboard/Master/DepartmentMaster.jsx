import { Box, Button, Flex, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import React from 'react'

const DepartmentMaster = () => {
    return (
        <Box boxShadow='base' bgColor="#16113a" p="10px" color="whitesmoke" height="fit-content" mb={5}>
            <form>
                <FormControl flex="1" mt={5}>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" placeholder='john doe' />
                </FormControl>

                <FormControl mt={5}>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' placeholder='example@gmail.com' />
                </FormControl>

                <FormControl mt={5}>
                    <FormLabel>Email Signature</FormLabel>
                    <Textarea name="message" placeholder='write here...' />
                </FormControl>

                <Flex justify="flex-end">
                    <Button mt={5} bgColor="blue" color="whitesmoke" size="md">Send</Button>
                </Flex>
            </form>
        </Box>
    )
}

export default DepartmentMaster