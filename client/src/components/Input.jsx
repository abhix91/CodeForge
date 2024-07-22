import { Box, Textarea, useTheme } from "@chakra-ui/react";

const Input = ({ input, setInput }) => {
  const theme = useTheme();

  return (
    <Box
      w="100%"
      h="100%"
      bg={theme.colors.gray[900]}
      color={theme.colors.gray[200]}
      p={4}
    >
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your input here"
        size="md"
        bg={theme.colors.gray[800]}
        color={theme.colors.gray[200]}
      />
    </Box>
  );
};

export default Input;
