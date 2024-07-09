import { Box, VStack, Flex } from "@chakra-ui/react";
import Input from "./Input";
import Output from "./Output";
import { Editor } from "@monaco-editor/react";

const Inout = () => {
  return (
    <Box w="30%" h="75vh"color= "gray.500">
 
      <VStack h="100%" spacing={0} align="stretch">
        <Flex h="50%" mt={12} mb={4}>
          <Input />
        </Flex>
        <Flex h="50%">
          <Output />
        </Flex>
      </VStack>
    </Box>
  );
};

export default Inout;
