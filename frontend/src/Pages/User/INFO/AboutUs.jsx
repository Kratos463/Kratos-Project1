import React from 'react'
import InnerBoxLayout from '../../../Components/Layout/InnerBoxLayout'
import Carousels2 from '../../../Components/Carousels/Carousels2'
import img1 from '../../../Assests/1667571148.jpg'
import { Image, Text, Flex, Heading, HStack, Button } from '@chakra-ui/react'
import TransparentBox from '../../../Components/Layout/TransparentBox'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const AboutUs = () => {
    return (
        <InnerBoxLayout
            label="About Us"
            about="Change the game. Start a revolution."
        >
            <Carousels2 />

            <AboutUsCard1
                imageSrc={img1}
                text={`C1 is the world’s leading future-forward Web3 
                network marketing company, providing 
                its millions of members and affiliates spread across the globe access to cutting-edge, exciting products that they can
                 enjoy themselves, as well as market to their extensive networks.
            We are at the forefront of the next-generation world of cryptocurrencies, NFTs, the 
            blockchain, GameFi and digital education and training - democratising the digital age for every single person on the planet, 
            and offering them the opportunity to build sustainable, 
            powerful businesses. Our members and affiliates are tech-savvy 
            forward thinkers with an entrepreneurship mindset and vision for the future.`}
            />
            <AboutUsCard2
                imageSrc={img1}
                text={`C1 is the world’s leading future-forward Web3 
                network marketing company, providing 
                its millions of members and affiliates spread across the globe access to cutting-edge, exciting products that they can
                 enjoy themselves, as well as market to their extensive networks.
            We are at the forefront of the next-generation world of cryptocurrencies, NFTs, the 
            and offering them the opportunity to build sustainable, 
            powerful businesses. Our members and affiliates are tech-savvy 
            forward thinkers with an entrepreneurship mindset and vision for the future.`}
            />

            {/* <AnimatedHeading>
                Hello ji
            </AnimatedHeading> */}

            <TransparentBox>
                <Text textAlign="center">Follow our extraordinary growth, keep up with the news and other information, which you'll find in our back office and stay up to date with META on our Instagram, Facebook, YouTube and Twitter.</Text>
                <HStack mt={5} justify="center">
                    <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                        Facebook
                    </Button>
                    <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
                        Twitter
                    </Button>
                    <Button colorScheme='gray' leftIcon={<FaInstagram />}>
                        Instagram
                    </Button>
                    <Button colorScheme='red' leftIcon={<FaYoutube />}>
                        Youtube
                    </Button>
                </HStack>
            </TransparentBox>
        </InnerBoxLayout>
    )
}

const AboutUsCard1 = ({ imageSrc, text }) => {
    return (
        <Flex
            my={20}
            direction={{ base: "column", md: "row" }}
            height={{ base: "auto", md: "400px" }}
            bg="secondary"
            align="center"
            borderRadius={{ base: "0 0 10px 10px", md: "0 10px 10px 0" }}
            overflow="hidden"
            position="relative"
            _hover={{
                transform: "scale(1.05)", // Zoom in slightly on hover
            }}
        >
            <Image
                src={imageSrc}
                flex={{ base: "none", md: 1 }}
                height={{ base: "200px", md: "100%" }}
                width={{ base: "100%", md: "500px" }}
                mr={{ base: 0, md: 10 }}
            />
            <Text
                p={{ base: 10, md: 0 }}
                flex={{ base: 1, md: 1 }}
                textAlign={{ base: "justify", md: "left" }}
            >
                {text}
            </Text>
        </Flex>
    );
};

const AboutUsCard2 = ({ imageSrc, text }) => {
    return (
        <Flex
            my={20}
            direction={{ base: "column-reverse", md: "row" }}
            height={{ base: "auto", md: "400px" }}
            bg="secondary"
            align="center"
            borderRadius={{ base: "0 0 10px 10px", md: "0 10px 10px 0" }}
            position="relative"
            _hover={{
                transform: "scale(1.05)", // Zoom in slightly on hover
            }}
        >
            <Text
                flex={{ base: 1, md: 1 }}
                textAlign={{ base: "justify", md: "left" }}
                p={{ base: 10, md: 10 }}
            >
                {text}
            </Text>
            <Image
                src={imageSrc}
                flex={{ base: "none", md: 1 }}
                height={{ base: "200px", md: "100%" }}
                width={{ base: "100%", md: "500px" }}
            />

        </Flex>
    );
};

const AnimatedHeading = ({ children }) => {
    return (
        <Heading
            fontSize="3xl"
            textAlign="center"
            fontFamily="heading"
            fontWeight="bold"
            color="primary"
            position="relative"
            _before={{
                content: "''",
                position: "absolute",
                bottom: "-2px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "100%",
                height: "2px",
                backgroundColor: "primary",
                animation: "slide-in 0.5s ease forwards",
            }}
        >
            {children}
        </Heading>
    );
};


export default AboutUs