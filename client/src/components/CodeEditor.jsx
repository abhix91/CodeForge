import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "./Constants";
import Inout from "./Inout";
import axios from "axios";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState(CODE_SNIPPETS.cpp); // Set default value to C++ code snippet
  const [language, setLanguage] = useState("cpp"); // Set default language to C++
  const [input, setInput] = useState(""); // Add state for input
  const [output, setOutput] = useState(""); // Add state for output

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
      const response = await axios.post("http://localhost:3006/compile", {
        code: value,
        input,
        language,
      });
      setOutput(response.data.programOutput || response.data.error || "No output"); // Ensure the output is correctly set
    } catch (error) {
      console.error("Error compiling code:", error);
      setOutput("Error compiling code");
    }
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="70%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
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
