import "./Editor.css";
import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div className="editor">
      <Editor
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue={"// Some Content"}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditor;
