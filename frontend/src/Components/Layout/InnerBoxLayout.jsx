import { Box, Stack, Heading, Text } from '@chakra-ui/react';

const InnerBoxLayout = ({ label, about, children }) => {
    return (
        <Box 
            my={{ base: 5, md: 0 }}
            px={{ base: 4, md: 20 }} 
            color="font.200"
        >
            <Stack textAlign='center' my={10}>
                <Heading 
                    mb={5} 
                    position="relative"
                    sx={{ 
                        textShadow: '0 0 60px rgba(255,255,255,0.99), 0 0 100px rgba(0, 255, 153, 0.546)' 
                    }}
                >
                    {label}
                </Heading>
                {about && <Text fontSize="md" color="font.200">{about}</Text>}
            </Stack>
            {children}
        </Box>
    );
};

export default InnerBoxLayout;
