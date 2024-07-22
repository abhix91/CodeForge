import { Box, useTheme, Button } from "@chakra-ui/react";

const Output = ({ output, handleRunCode }) => {
  const theme = useTheme();

  return (
    <Box
      w="100%"
      h="120%"
      bg={theme.colors.gray[900]}
      color={theme.colors.gray[200]}
      p={4}
      position="relative"
    >
      <pre>{output}</pre>
      <Button
        variant="outline"
        colorScheme="green"
        size="sm"
        position="absolute"
        top={-8}
        left={0}
        onClick={handleRunCode}
      >
        Run Code
      </Button>
    </Box>
  );
};

export default Output;
