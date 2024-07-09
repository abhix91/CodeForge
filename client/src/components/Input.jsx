// Input.jsx
import { Box, useTheme } from "@chakra-ui/react";

const Input = () => {
  const theme = useTheme();

  return (
    <Box
      w="100%"
      h="100%"
      bg={theme.colors.gray[900]} // Adjust to match your Monaco Editor vs-dark background color
      color={theme.colors.gray[200]} // Adjust to match your Monaco Editor vs-dark text color
      p={4}
    >
      {/* Your input content here */}
      Type your input
    </Box>
  );
};

export default Input;
