import { Box, useTheme, Button } from "@chakra-ui/react";

const Output = () => {
  const theme = useTheme();

  const handleRunCode = () => {
    // Implement your run code logic here
    console.log("Running code...");
  };

  return (
    <Box
      w="100%"
      h="120%"
      bg={theme.colors.gray[900]} // Adjust to match your Monaco Editor vs-dark background color
      color={theme.colors.gray[200]} // Adjust to match your Monaco Editor vs-dark text color
      p={4}
      position="relative"
    >
      'Click "Run Code" to see the output here'

      {/* Button for running code */}
      <Button
        variant="outline"
        colorScheme="green"
        size="sm"
        position="absolute"
        top={-8}  // Adjust the negative value to position it outside upwards
        left={0}
        onClick={handleRunCode}
      >
        Run Code
      </Button>
    </Box>
  );
};

export default Output;
