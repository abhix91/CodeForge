import { useRef, useState } from "react";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "./Constants";
import Inout from "./Inout";
import axios from "axios";
import Input from "./Input";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState(CODE_SNIPPETS.cpp);
  const [language, setLanguage] = useState("cpp");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const handleRunCode = async () => {
    try {
      const response = await axios.post("https://codeforge-s88c.onrender.com/compile", {
        code: value,
        input,
        language,
      });
      setOutput(response.data.programOutput || response.data.error || "No output");
    } catch (error) {
      console.error(error.message);
      setOutput("Error compiling code");
    }
  };

  return (
    <Box>
      <VStack spacing={4} display={{ base: "flex", md: "none" }} w="100%">
        <Box w="100%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: { enabled: false },
            }}
            height="50vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <HStack spacing={4} w="100%">
          <Input input={input} setInput={setInput} />
          <Output output={output} handleRunCode={handleRunCode} />
        </HStack>
      </VStack>
      <HStack spacing={4} display={{ base: "none", md: "flex" }}>
        <Box w="70%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: { enabled: false },
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Inout input={input} setInput={setInput} output={output} handleRunCode={handleRunCode} />
      </HStack>
    </Box>
  );
};

export default CodeEditor;
