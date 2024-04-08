import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useToast,
    VStack,
    Container,
    Flex,
    Checkbox
} from '@chakra-ui/react';
import {Link} from 'react-router-dom'
// import logo from '../../Assests/meta-light-logo-01.png'


export const FloatingLabelInput = ({ label, flex, ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <FormControl position="relative" flex={flex} mr={2}>
            <FormLabel
                position="absolute"
                left={2}
                top={isFocused || rest.value ? '-2px' : '50%'}
                transform={isFocused || rest.value ? 'translateY(-40%)' : 'translateY(-50%)'}
                fontSize={isFocused || rest.value ? 'xs' : 'sm'}
                color={isFocused || rest.value ? 'blue.400' : 'gray.500'}
                transition="all 0.2s"
            >
                {label}
            </FormLabel>
            <Input
                required
                outline="none"
                borderRadius="none"
                border="none"
                borderBottom="1px"
                borderBottomColor={isFocused ? 'blue.400' : 'gray.300'}
                color="white"
                onFocus={handleFocus}
                onBlur={handleBlur}
                _focus={{
                    boxShadow: 'none', // Remove default focus box shadow
                    borderBottomColor: 'blue.400',
                }}
                {...rest}
            />
        </FormControl>
    );
};


const RegisterUser = () => {
    const [formData, setFormData] = useState({
        username: '',
        sponsor: '',
        firstName: '',
        lastName: '',
        address: '',
        postalCode: '',
        city: '',
        country: '',
        email: '',
        password: '',
        newsLetter: false,
        tc_pp: false,
        atc_id: false
    });
    const toast = useToast();
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: checked }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
        toast({
            title: 'Registration Form Data',
            status: 'success',
            duration: 5000,
            isClosable: true,
        });
    };

    return (
        <Stack spacing={6} py="100px" height="100%" backgroundColor="#040930">
            <VStack color="white">
                <Heading size="lg" textAlign="center">
                    Sign Up
                </Heading>
                <Heading size="sm" textAlign="center">
                    Already have an account <Link className='linkColor' to='/login'>Login Now</Link>
                </Heading>
            </VStack>

            <Container maxW="620px" mt="20px" border="1px" p="20px">
                <form onSubmit={handleSubmit}>
                    <Flex justifyContent="space-between">
                        <FloatingLabelInput label={"Username"} flex={1} type="text" name="username" value={formData.username} onChange={handleChange}></FloatingLabelInput>
                        <FloatingLabelInput label={"Sponser"} flex={1} type="text" name="sponsor" value={formData.sponsor} onChange={handleChange}></FloatingLabelInput>
                    </Flex>
                    <Flex justifyContent="space-between" mt={5}>
                        <FloatingLabelInput label={"First Name"} flex={1} type="text" name="firstName" value={formData.firstName} onChange={handleChange}></FloatingLabelInput>
                        <FloatingLabelInput label={"Last Name"} flex={1} type="text" name="lastName" value={formData.lastName} onChange={handleChange}></FloatingLabelInput>
                    </Flex>
                    <Stack mt={4}>
                        <FloatingLabelInput label={"Address"} name="address" value={formData.address} onChange={handleChange} ></FloatingLabelInput>
                    </Stack>
                    <Flex justifyContent="space-between" mt={5}>
                        <FloatingLabelInput label={"Postal Code"} flex={1} type="text" name="postalCode" value={formData.postalCode} onChange={handleChange}></FloatingLabelInput>
                        <FloatingLabelInput label={"City"} flex={1} type="text" name="city" value={formData.city} onChange={handleChange}></FloatingLabelInput>
                        <FloatingLabelInput label={"Country"} flex={1} type="text" name="country" value={formData.country} onChange={handleChange}></FloatingLabelInput>
                    </Flex>
                    <Flex justifyContent="space-between" mt={5}>
                        <FloatingLabelInput label={"Email"} flex={1} type="email" name="email" value={formData.email} onChange={handleChange}></FloatingLabelInput>
                        <FloatingLabelInput label={"Password"} flex={1} type="password" name="password" value={formData.password} onChange={handleChange}></FloatingLabelInput>
                    </Flex>

                    <VStack color="white" mt={10} spacing={4}>
                        <Checkbox size='sm' defaultChecked={formData.tc_pp} onChange={handleCheckboxChange} name="tc_pp">
                            By clicking this box I confirm that I have read and accept the below listed documents. I am 18 years or older. -
                            <Link className='linkColor'>TERMS AND CONDITIONS - PRIVACY POLICY</Link>
                        </Checkbox>
                        <Checkbox size='sm' defaultChecked={formData.newsLetter} onChange={handleCheckboxChange} name="newsLetter">
                            I agree to receive information and marketing material from Crowd1 and partner companies.
                        </Checkbox>
                        <Checkbox size='sm' defaultChecked={formData.atc_id} onChange={handleCheckboxChange} name="atc_id">
                            I want to become a Crowd1 Member and I accept the below listed documents. -
                            <Link className='linkColor'>AFFILIATE TERMS AND CONDITIONS - INCOME DISCLAIMER</Link>
                        </Checkbox>
                    </VStack>

                    <Button type="submit" colorScheme='blue' bgColor={"blue"} color="white" mt={8} w="100%">
                        Register
                    </Button>
                </form>
            </Container>
        </Stack >
    );
};

export default RegisterUser;
