import DisplayFlags from "./DisplayFlags";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./DisplayFlagsButton";

const DisplayFlagsButton = (props) => {
  const [flagCode, setFlagCode] = useState(props.flagCode);
  const [dropDownVisible, setDropDownVisible] = useState(false);

  useEffect(() => {
    setFlagCode(props.flagCode);
  }, [props.flagCode]);

  const onUpdateClick = () => {
    setDropDownVisible(!dropDownVisible);
  };

  const updateFlagQuery = (value, id_bike) => {
    Axios.put("http://localhost:3001/updateFlag", {
      flag: value,
      id_bike: id_bike,
    }).then((response) => {});
    setDropDownVisible(false);
    setFlagCode(value);
  };

  return (
    <>
      <button onClick={onUpdateClick}>
        {console.log(flagCode)}
        <DisplayFlags flagCode={flagCode}></DisplayFlags>
      </button>
      <div
        className="drpdwn-content"
        style={{ display: dropDownVisible ? "flex" : "none" }}
      >
        <button
          className="flagDrpdownButton"
          value={1}
          onClick={() => {
            updateFlagQuery(1, props.id_bike);
          }}
        >
          <img src={process.env.PUBLIC_URL + "/yellowFlag.png"} alt="" />
        </button>
        <button
          className="flagDrpdownButton"
          value={2}
          onClick={() => {
            updateFlagQuery(2, props.id_bike);
          }}
        >
          <img src={process.env.PUBLIC_URL + "/greenFlag.png"}></img>
        </button>
        <button
          className="flagDrpdownButton"
          value={3}
          onClick={() => {
            updateFlagQuery(3, props.id_bike);
          }}
        >
          <img src={process.env.PUBLIC_URL + "/greenFlag.png"} alt="" />
          <img src={process.env.PUBLIC_URL + "/yellowFlag.png"}></img>
        </button>
        <button
          className="flagDrpdownButton"
          value={4}
          onClick={() => {
            updateFlagQuery(4, props.id_bike);
          }}
        >
          <img src={process.env.PUBLIC_URL + "/greenFlag.png"} alt="" />
          <img src={process.env.PUBLIC_URL + "/greenFlag.png"} alt="" />
        </button>
      </div>
    </>
  );
};

export default DisplayFlagsButton;
