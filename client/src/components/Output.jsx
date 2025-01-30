import { Box, useTheme, Button } from "@chakra-ui/react";

const Output = ({ output, handleRunCode }) => {
  const theme = useTheme();

  return (
    <Box
      w={{ base: "50%", md: "100%" }}
      h={{ base: "auto", md: "120%" }}
      bg={theme.colors.gray[900]}
      color={theme.colors.gray[200]}
      p={4}
      position="relative"
    >
      <pre style={{ whiteSpace: "pre-wrap" }}>{output}</pre>
      <Button
        variant="outline"
        colorScheme="green"
        size="sm"
        position={{ base: "static", md: "absolute" }}
        top={{ base: "auto", md: -8 }}
        left={0}
        onClick={handleRunCode}
        w={{ base: "100%", md: "auto" }}
        mt={{ base: 2, md: 0 }}
      >
        Run Code
      </Button>
    </Box>
  );
};

export default Output;