import { Box } from "@chakra-ui/react";

const GradientBox = ({ children }) => {
    return (
        <Box
            width="200px"
            p={5}
            borderRadius="10px"
            bgGradient="linear(to-t, #16113a, #040930)"
        >
            {children}
        </Box>
    );
};

export default GradientBox;
