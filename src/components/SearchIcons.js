import Axios from "axios";
import React from "react";
import { useState } from "react";
import "./SearchIcons.css";

function StringSearchIcon(props) {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [inputText, setInputText] = useState("");

  return (
    <>
      <button
        onClick={() => setIsDropDownVisible(!isDropDownVisible)}
        className="StringSearchBtn frameSrc"
      >
        <img
          className
          src="https://img.icons8.com/ios/50/000000/search--v1.png"
        />
      </button>
      <div
        className="search-string-container"
        style={{ display: isDropDownVisible ? "flex" : "none" }}
      >
        <input
          onChange={(event) => {
            setInputText(event.target.value);
          }}
          type="text"
        />
        <button>search</button>
      </div>
    </>
  );
}

export default StringSearchIcon;
