import React from "react";
import { useState } from "react";

function Modal({ setShowModal, languages }) {
  const [searchedLanguage, setSearchedLanguage] = useState("");

  console.log("languages Modal", languages);

  // const filteredLanguages = languages;

  const filteredLanguages = languages.filter((language) => {
    console.log(searchedLanguage);
    return language.language
      .toLowerCase()
      .startsWith(searchedLanguage.toLowerCase());
  });

  console.log("FilteredLangu Modal", filteredLanguages);

  const handleChange = (e) => {
    setSearchedLanguage(e.target.value);
  };

  const handleClick = (e) => {
    // setChosenLanguage(e.target.textContent)
    setShowModal(false);
  };

  console.log(JSON.stringify(languages));

  return (
    <div className="option-list">
      <div className="search-bar">
        <input value={searchedLanguage} onChange={handleChange} />
        <div className="close-button" onClick={() => setShowModal(null)}>
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </div>
      </div>
      <div className="option-container">
        <ul>
          {filteredLanguages?.map((language, _index) => (
            <div className="list-item">
              <div className="icon">
                {/* {chosenLanguages === filteredLanguages ? "✓" : ""} */}
              </div>
              <li
                key={_index}
                onClick={handleClick}
                // style={{
                //       color: chosenLanguage === filteredLanguages ? '#8ab4f8' : null,
                //     }}
              >
                {language.language}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Modal;
