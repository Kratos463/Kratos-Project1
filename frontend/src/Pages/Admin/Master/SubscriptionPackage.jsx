import React, { useState } from 'react'
import {
    Button, Flex, FormControl, FormLabel, Input
} from '@chakra-ui/react';
import BoxLayout from '../../../Components/Layout/BoxLayout';

const SubscriptionPackage = () => {

    const [voucherInputs, setVoucherInputs] = useState([{ time: '', amount: '' }]);

    const handleAddMore = () => {
        setVoucherInputs([...voucherInputs, { time: '', amount: '' }]);
    };

    const handleInputChange = (index, key, value) => {
        const updatedInputs = [...voucherInputs];
        updatedInputs[index][key] = value;
        setVoucherInputs(updatedInputs);
    };


    return (
        <>
            <BoxLayout showDivider={true} labelText="Add New Subscription">
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

                    {voucherInputs.map((input, index) => (
                        <Flex key={index} justify="space-between" mt={5}>
                            {index === 0 ? (
                                <>
                                    <FormControl flex="1" mr={2}>
                                        <FormLabel>Subscription Time</FormLabel>
                                        <Input type='text' placeholder='ex- 3 Months' value={input.time} onChange={(e) => handleInputChange(index, 'time', e.target.value)} />
                                    </FormControl>

                                    <FormControl flex="1">
                                        <FormLabel>Voucher Amount</FormLabel>
                                        <Input type='text' placeholder='ex- $50' value={input.amount} onChange={(e) => handleInputChange(index, 'amount', e.target.value)} />
                                    </FormControl>
                                </>
                            ) : (
                                <>
                                    <FormControl flex="1" mr={2}>
                                        <Input type='text' placeholder='ex- 3 Months' value={input.time} onChange={(e) => handleInputChange(index, 'time', e.target.value)} />
                                    </FormControl>

                                    <FormControl flex="1">
                                        <Input type='text' placeholder='ex- $50' value={input.amount} onChange={(e) => handleInputChange(index, 'amount', e.target.value)} />
                                    </FormControl>
                                </>
                            )}
                        </Flex>
                    ))}

                    <Flex justify="flex-end">
                        <Button mt={5} bgColor="green" color="whitesmoke" size="sm" onClick={handleAddMore}>Add More</Button>
                    </Flex>

                    <Flex justify="flex-end" mt={5}>
                        <Button bgColor="blue" color="whitesmoke" size="md">Submit</Button>
                    </Flex>
                </form>
            </BoxLayout>
        </>
    )
}

export default SubscriptionPackage