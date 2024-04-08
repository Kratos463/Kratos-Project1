import {
    Button, Flex, FormControl, FormLabel, Input,
    Select
} from '@chakra-ui/react';
import React from 'react'
import BoxLayout from '../../../Components/Layout/BoxLayout';

const DummyPower = () => {
    return (
        <BoxLayout labelText="Allot Dummy Power to Member" showDivider={true}>
            <DummyPowerForm />
        </BoxLayout>
    )
}

export default DummyPower

const DummyPowerForm = () => {
    return(
        <form>
            <Flex justify="space-between" mt={5}>
                <FormControl flex="1" mr={2}>
                    <FormLabel>Username</FormLabel>
                    <Input type='text' placeholder="username"></Input>
                </FormControl>
                <FormControl flex="1">
                    <FormLabel>Power Amount</FormLabel>
                    <Input type='number' placeholder='ex- 1000' />
                </FormControl>
            </Flex>


            <FormControl mt={5}>
                <FormLabel>Power Side</FormLabel>
                <Select>
                    <option>Left</option>
                    <option>Right</option>
                </Select>
            </FormControl>


            <FormControl mt={5}>
                <FormLabel>Validity</FormLabel>
                <Input type="number" placeholder='ex- 10' />
            </FormControl>

            <Flex justify="flex-end">
                <Button mt={5} bgColor="blue" color="whitesmoke" size="md">Submit</Button>
            </Flex>
        </form>
    )
}