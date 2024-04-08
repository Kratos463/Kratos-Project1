import {
    Button, Flex, FormControl, FormLabel, Input,
    Select,
    Textarea,
} from '@chakra-ui/react';
import React from 'react'
import BoxLayout from '../../../Components/Layout/BoxLayout';

const CreateSpecialEmails = () => {
    return (
        <>
            <BoxLayout labelText="Create Special Email" showDivider={true}>
                <SpecialEmailForm />
            </BoxLayout>
        </>
    )
}

export default CreateSpecialEmails

const SpecialEmailForm = () => {
    return (
        <>
            <form>
                <Flex justify="space-between" mt={5}>
                    <FormControl flex="1" mr={2}>
                        <FormLabel>Select Receiver Type</FormLabel>
                        <Select>
                            <option>Member</option>
                            <option>Operator</option>
                        </Select>
                    </FormControl>

                    <FormControl flex="1">
                        <FormLabel>Select Department</FormLabel>
                        <Select>
                            <option>HR</option>
                            <option>Support Team</option>
                            <option>Compliance</option>
                        </Select>
                    </FormControl>
                </Flex>

                <FormControl mt={5}>
                    <FormLabel>Username</FormLabel>
                    <Input type='text' placeholder='username' />
                </FormControl>

                <FormControl mt={5}>
                    <FormLabel>Subject</FormLabel>
                    <Input type='text' placeholder='subject' />
                </FormControl>

                <FormControl mt={5}>
                    <FormLabel>Body</FormLabel>
                    <Textarea name="message" placeholder='write here...' />
                </FormControl>

                <Flex justify="flex-end">
                    <Button mt={5} bgColor="blue" color="whitesmoke" size="md">Send</Button>
                </Flex>
            </form>
        </>
    )
}