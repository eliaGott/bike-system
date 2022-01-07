import React from "react";
import InsertBikePrompt from "./InsertBikePrompt";
import "./PopupInsertBike.css";

function PopupInsertBike(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <h3>Insert new bike</h3>
          <button
            className="closeButton"
            onClick={() => props.setTrigger(false)}
          >
            X
          </button>
        </div>

        <InsertBikePrompt></InsertBikePrompt>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopupInsertBike;
