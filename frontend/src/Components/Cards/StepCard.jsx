import { Card, CardBody, CardHeader, Image, Text, Heading } from '@chakra-ui/react';
import React from 'react';

const StepCard = ({ imgSrc, title, about }) => {
  return (
    <Card
    flex={1}
    p={10}
    borderRadius={0}
      boxShadow="md"
      overflow="hidden"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'lg',
      }}
      maxW="300px" // Set max width to ensure responsiveness
      m="auto" // Center the card horizontally
    >
      <CardHeader p={0} 
      display="flex"
      justifyContent="center"
      >
        <Image src={imgSrc} alt={title} width="100px" />
      </CardHeader>
      <CardBody textAlign="center">
        <Heading size="md" mb={2}>
          {title}
        </Heading>
        <Text color="gray.600">{about}</Text>
      </CardBody>
    </Card>
  );
};

export default StepCard;
