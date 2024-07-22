export const LANGUAGE_VERSIONS = {
  cpp: "C++20",
  java: "17",
  c: "C11",
  python: "3.10.x",
};

export const CODE_SNIPPETS = {
  c: `\n#include <stdio.h>\n\nint main() {\n\tprintf("Hello, Alex!\\n");\n\treturn 0;\n}\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
   java :`\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  cpp: `\n#include <iostream>\n\nint main() {\n\tstd::cout << "Hello, Alex!" << std::endl;\n\treturn 0;\n}\n`,
};
