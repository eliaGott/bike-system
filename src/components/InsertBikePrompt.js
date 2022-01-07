import React from "react";
import InputLine from "./InputLine";
import { useState } from "react";
import "./InsertBikePrompt.css";

function InsertBikePrompt() {
  const [picture, setPicture] = useState("");
  const [frameNr, setFrameNr] = useState("");
  const [checkin, setCheckin] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [flag, setflag] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <form className="inputBikeForm" action="">
      <InputLine
        type="file"
        label="Image"
        name="image"
        placeHolder="insert image"
        accept="image/*;capture=camera"
        onChangeHandle={(event) => {
          setPicture(event.target.value);
        }}
      />
      <InputLine
        type="text"
        label="Frame Nr"
        name="framenr"
        InputLine
        placeHolder="insert frame number"
        onChangeHandle={(event) => {
          setFrameNr(event.target.value);
        }}
      />
      <InputLine
        type="date"
        label="Checkin Date"
        name="Checkin Date"
        onChangeHandle={(event) => {
          setCheckin(event.target.value);
        }}
      />
      <InputLine
        type="text"
        label="Brand"
        name="brand"
        placeHolder="insert brand"
        onChangeHandle={(event) => {
          setBrand(event.target.value);
        }}
      />
      <InputLine
        type="text"
        label="Color"
        name="color"
        placeHolder="insert color"
        onChangeHandle={(event) => {
          setColor(event.target.value);
        }}
      />
      <InputLine
        type="text"
        label="Comment"
        name="comment"
        placeHolder="insert comment"
        onChangeHandle={(event) => {
          setComment(event.target.value);
        }}
      />
      <button onClick={() => alert("Can't do it now. It will soon work")}>
        Register Bike!
      </button>
    </form>
  );
}

export default InsertBikePrompt;
