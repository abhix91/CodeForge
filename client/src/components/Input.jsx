import React from 'react';
import { Box, Text } from "@chakra-ui/react";

const Input = () => {
  return (
    <Box w="100%" p={4} border="1px solid" borderRadius={4}>
      <Text mb={2} fontSize="lg">
        Input
      </Text>
      <Box height="50%" p={2} border="1px solid" borderRadius={4}>
        {/* Add your input content here */}
        <Text color="green">// Your custom input</Text>
      </Box>
    </Box>
  );
};

export default Input;

