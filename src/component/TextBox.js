import React from "react";
import SelectDropDown from "./SelectDropDown";

function TextBox({ selectedLanguage, style, setShowModal }) {
  return (
    <div className={style}>
      <SelectDropDown
        style={style}
        setShowModal={setShowModal}
        selectedLanguage={selectedLanguage}
      />
      <textarea
        placeholder={style === "input" ? "Enter Text" : "Translation"}
        disabled={style === "output"}
      />
    </div>
  );
}

export default TextBox;
