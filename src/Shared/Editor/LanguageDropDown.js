import React from "react";
import Select from "react-select";
import language from "./LanguageOptions.json";

const LanguagesDropdown = ({ onSelectChange }) => {
  const languageOption = language.Language.map((data) => data);
  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOption}
      defaultValue={languageOption[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;
