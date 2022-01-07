import React from "react";

function InputLine({ type, label, name, placeHolder, onChangeHandle, accept }) {
  return (
    <div className="inputAtInsert">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeHolder}
        onChange={onChangeHandle}
        accept={accept}
      />
    </div>
  );
}

export default InputLine;
