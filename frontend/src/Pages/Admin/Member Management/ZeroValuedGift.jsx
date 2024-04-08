import React from 'react'
import {
    Button, Flex, FormControl, FormLabel, Input,
    Select
} from '@chakra-ui/react';
import { packages } from '../../../Components/Data/dummy';
import BoxLayout from '../../../Components/Layout/BoxLayout';

const ZeroValuedGift = () => {
    return (
        <>
            <BoxLayout showDivider={true} labelText="Allot Zero Valued Gift Code">
                <ZeroValuedGiftForm />
            </BoxLayout>
        </>
    )
}

export default ZeroValuedGift

const ZeroValuedGiftForm = () => {
    return (
        <form>
            <Flex justify="space-between" mt={5}>
                <FormControl flex="1" mr={2}>
                    <FormLabel>Username</FormLabel>
                    <Input type='text' placeholder="username"></Input>
                </FormControl>
                <FormControl flex="1">
                    <FormLabel>Number of Gift Codes</FormLabel>
                    <Input type='number' placeholder='ex- 10' />
                </FormControl>
            </Flex>

            <FormControl mt={5}>
                <FormLabel>Select Package</FormLabel>
                <Select multiple={false}>
                    {packages.map((pk, index) => <option value={pk.packageName} key={index}>{pk.packageName}</option>)}
                </Select>
            </FormControl>

            <Flex justify="flex-end">
                <Button mt={5} bgColor="blue" color="whitesmoke" size="md" type="submit">Submit</Button>
            </Flex>
        </form>
    )
}