import React from "react";
import "./Editor.css";

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      <textarea
        className="w-100"
        rows="5"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
      ></textarea>
    </>
  );
};

export default CustomInput;
