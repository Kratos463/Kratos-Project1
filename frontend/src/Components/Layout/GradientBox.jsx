import { Box } from "@chakra-ui/react";

const GradientBox = ({ children }) => {
    return (
        <Box
            p={20}
            borderRadius="10px"
            bgGradient="linear(to-b, primary, secondary)"
        >
            {children}
        </Box>
    );
};

export default GradientBox;
