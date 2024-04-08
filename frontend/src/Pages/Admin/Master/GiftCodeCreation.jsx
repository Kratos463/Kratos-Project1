import React, { useState } from 'react'
import {
    Flex, FormControl, FormLabel, Input, Button, RadioGroup, Stack, Radio,
    CheckboxGroup, VStack, Checkbox,
} from '@chakra-ui/react'
import { networkMarketingProducts } from '../../../Components/Data/dummy';
import BoxLayout from '../../../Components/Layout/BoxLayout';

const GiftCodeCreation = () => {

    const [checkedProducts, setCheckedProducts] = useState({});

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckedProducts(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    return (
        <>
            <BoxLayout labelText="Create Gift Code" showDivider={true}>
                <form>
                    <FormControl flex="1" mt={5}>
                        <FormLabel>Code Type</FormLabel>
                        <RadioGroup defaultValue='1' size='lg'>
                            <Stack spacing={5} direction='row'>
                                <Radio colorScheme='green' value='1'>
                                    Valued Gift Codes
                                </Radio>
                                <Radio colorScheme='green' value='2'>
                                    Zero Valued Gift Codes
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>

                    <FormControl mt={5}>
                        <FormLabel>Select Package</FormLabel>
                        <CheckboxGroup colorScheme='green' value={Object.keys(checkedProducts)} onChange={setCheckedProducts}>
                            <VStack spacing={[1, 5]} justifyContent="flex-start" alignItems="flex-start">
                                {networkMarketingProducts.map((product, index) => (
                                    <React.Fragment key={index}>
                                        <Flex alignItems="center">
                                            <Checkbox name={product.name} onChange={handleCheckboxChange} mr={2} style={{ whiteSpace: 'nowrap' }}>
                                                {product.name}
                                            </Checkbox>
                                            {checkedProducts[product.name] && (
                                                <Input placeholder="Enter gift code quantity" size="sm" />
                                            )}
                                        </Flex>
                                    </React.Fragment>
                                ))}
                            </VStack>
                        </CheckboxGroup>
                    </FormControl>


                    <Flex justify="flex-end">
                        <Button mt={5} bgColor="blue" color="whitesmoke" size="md">Submit</Button>
                    </Flex>
                </form>
            </BoxLayout>

        </>
    )
}

export default GiftCodeCreation