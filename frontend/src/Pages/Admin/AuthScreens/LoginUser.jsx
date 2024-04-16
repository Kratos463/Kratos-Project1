import React, { useState } from 'react';
import {
    Stack,
    Button,
    Heading,
    VStack,
    Container,
    Flex,
} from '@chakra-ui/react';
import { FloatingLabelInput } from './RegisterUser';
import { Link } from 'react-router-dom'


const LoginUser = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
   
    };

    return (
        <Stack spacing={6} py="100px" height="100vh" backgroundColor="primary">
            <VStack color="white">
                <Heading size="lg" textAlign="center">
                    Log In
                </Heading>
                <Heading size="sm" textAlign="center">
                    Don't have an account yet? <Link className='linkColor' to='/'>Signup Now</Link>
                </Heading>
            </VStack>

            <Container maxW="400px" mt="20px" border="1px" p="20px">
                <form onSubmit={handleSubmit}>

                    <VStack justifyContent="space-between" mt={5} spacing={5}>
                        <FloatingLabelInput label={"Email"} flex={1} type="email" name="email" value={formData.email} onChange={handleChange}></FloatingLabelInput>
                        <FloatingLabelInput label={"Password"} flex={1} type="password" name="password" value={formData.password} onChange={handleChange}></FloatingLabelInput>
                    </VStack>

                    <Button type="submit" colorScheme='blue' bgColor={"blue"} color="white" mt={8} w="100%">
                        Login
                    </Button>
                </form>

                <Flex justifyContent="flex-end" mt={4}>
                    <Link style={{ color: "white", fontWeight: "500" }}>Forgot Password</Link>
                </Flex>

            </Container>
        </Stack >
    );
};

export default LoginUser;
