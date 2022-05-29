import TextBox from "./component/TextBox";
import Button from "./component/Button";
import Arrows from "./component/Arrows";
import Modal from "./component/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(null);
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("Thai");

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  };

  return (
    <div className="app">
      {!showModal && (
        <>
          <TextBox
            selectedLanguage={inputLanguage}
            style="input"
            setShowModal={setShowModal}
          />
          <div className="arrow-container" onClick={handleClick}>
            <Arrows />
          </div>
          <TextBox
            selectedLanguage={outputLanguage}
            style="output"
            setShowModal={setShowModal}
          />
        </>
      )}
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
