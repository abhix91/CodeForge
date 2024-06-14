import React from 'react';

import { Box, Button, Text, useToast } from "@chakra-ui/react";

const Output = () => {
  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
      >
        Run Code
      </Button>
      <Box
        height="75vh"
        p={2}
        
        border="1px solid"
        borderRadius={4}
    
      >
       
          'Click "Run Code" to see the output here'
      </Box>
    </Box>
  )
}

export default Output