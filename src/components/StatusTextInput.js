import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./StatusTextInput.css";

function StatusTextInput(props) {
  const [text, setText] = useState(props.text);
  const updateFlagQuery = (text, id_bike, type) => {
    Axios.put("http://localhost:3001/updateStatusText", {
      text: text,
      id_bike: id_bike,
      type: type,
    }).then((response) => {});
    console.log("success");
  };
  return (
    <div className="inputTextArea">
      <textarea
        onChange={(event) => {
          setText(event.target.value);
        }}
        oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
      >
        {text}
      </textarea>
      <button
        className="saveButton"
        onClick={() => updateFlagQuery(text, props.id_bike, props.type)}
      >
        Save
      </button>
    </div>
  );
}

export default StatusTextInput;
