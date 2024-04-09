import React, { useState } from "react";
import { Box, Flex, Text, Image, Stack, HStack } from '@chakra-ui/react'

const Carousels2 = () => {

    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-22px",
        p: "16px",
        color: "white",
        fontWeight: "bold",
        fontSize: "18px",
        transition: "0.6s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "none",
        _hover: {
            opacity: 0.8,
            bg: "black",
        },
    };
    
    const slides = [
        {
            img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            label: "First Slide",
            description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
        {
            img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            label: "Second Slide",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            label: "Third Slide",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
        },
        {
            img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            label: "Fourth Slide",
            description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
        {
            img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            label: "Fifth Slide",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = slides.length;

    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
    };
    return (

        <Flex w="full" pos="relative" overflow="hidden" my={5}>
            <Flex h="400px" w="full" {...carouselStyle}>
                {slides.map((slide, sid) => (
                    <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                        <Image
                            src={slide.img}
                            alt="carousel image"
                            boxSize="full"
                            backgroundSize="cover"
                        />
                    </Box>
                ))}
            </Flex>
            <Text {...arrowStyles} left="0" onClick={prevSlide}>
                &#10094;
            </Text>
            <Text {...arrowStyles} right="0" onClick={nextSlide}>
                &#10095;
            </Text>
        </Flex>

    );
};

export default Carousels2