import TextBox from "./component/TextBox";
import Button from "./component/Button";
import Arrows from "./component/Arrows";
import Modal from "./component/Modal";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [showModal, setShowModal] = useState(null);
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("Thai");
  const [languages, setLanguages] = useState(null);

  const getLanguages = async () => {
    const options = {
      method: "GET",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
      headers: {
        // 'Accept-Encoding': 'application/gzip',
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        "X-RapidAPI-Key": "1140f7f4dbmshdf074eb43357541p10822bjsn392eae3766ba",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.data.languages);
        setLanguages(response.data.data.languages);
        // const arrayOfData = Object.keys(response.data.data.languages).map(
        //   (key) => response.data.data.languages[key]
        // );
        // setLanguages(arrayOfData);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getLanguages();
  }, []);

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
      {showModal && <Modal setShowModal={setShowModal} languages={languages} />}
    </div>
  );
}

export default App;
