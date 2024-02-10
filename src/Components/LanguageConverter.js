import React, { useState } from "react";
import Nepali from "nepalify-react";
import nepaliscript from "nepscript";

const LanguageConverter = () => {
  const [englishText, setEnglishText] = useState("");
  const [nepaliText, setNepaliText] = useState("");

  const handleEnglishValue = (e) => {
    setEnglishText(e.target.value);
    setNepaliText(nepaliscript(e.target.value));
  };

  return (
    <div className="d-flex justify-content-around align-items-center py-4">
      <div className="english-text w-25">
        <label htmlFor="english-text" className="fw-bold">
          English Text
        </label>
        <input
          type="text"
          id="english-text"
          placeholder="Enter text..."
          name="english-text"
          value={englishText}
          onChange={(e) => handleEnglishValue(e)}
          className="form-control"
        />
      </div>
      <div className="nepali-text w-25">
        <label htmlFor="nepali-text" className="fw-bold">
          Nepali Text
        </label>
        <Nepali
          funcname="unicodify"
          inputType="text"
          className="form-control"
          placeholder="Nepali text..."
          id="nepali-text"
          value={nepaliText}
          valueChange={(e, value) => setNepaliText(value)}
        />
      </div>
    </div>
  );
};

export default LanguageConverter;
