import React, { useState } from "react";
import LanguageOptions from "./LanguageOptions.json";

import { defineTheme } from "./defineTheme";

import ThemeDropdown from "./ThemeDropDown";
import LanguagesDropdown from "./LanguageDropDown";

import CodeEditor from "./Editor";
import Compile from "./Compile";

const javascriptDefault = `// Some Comment`;

const Editor = () => {
  const languageOption = LanguageOptions.Language.map((data) => data);
  const [code, setCode] = useState(javascriptDefault);

  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOption[0]);

  const onSelectChange = (sl) => {
    console.log("Selected Option...", sl);
    setLanguage(sl);
  };

  const onChange = (action, data) => {
    switch (action) {
      case "code":
        setCode(data);
        break;
      default:
        console.warn("Case not handled!", action, data);
    }
  };

  function handleThemeChange(th) {
    const theme = th;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }

  return (
    <>
      <div className="w-100"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 px-4 py-2">
            <LanguagesDropdown onSelectChange={onSelectChange} />
          </div>
          <div className="col-12 col-sm-6 px-4 py-2">
            <ThemeDropdown
              handleThemeChange={handleThemeChange}
              theme={theme}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-start px-4 py-4">
        <div className="flex flex-col w-full h-full justify-start items-end">
          <CodeEditor
            code={code}
            theme={theme.value}
            onChange={onChange}
            language={language?.value}
          />
        </div>
        <Compile code={code} language={language} />
      </div>
    </>
  );
};

export default Editor;
