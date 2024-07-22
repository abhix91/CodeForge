import { Box, VStack, Flex } from "@chakra-ui/react";
import Input from "./Input";
import Output from "./Output";

const Inout = ({ input, setInput, output, handleRunCode }) => {
  return (
    <Box w="30%" h="75vh" color="gray.500">
      <VStack h="100%" spacing={0} align="stretch">
        <Flex h="50%" mt={12} mb={4}>
          <Input input={input} setInput={setInput} />
        </Flex>
        <Flex h="50%">
          <Output output={output} handleRunCode={handleRunCode} />
        </Flex>
      </VStack>
    </Box>
  );
};

export default Inout;
