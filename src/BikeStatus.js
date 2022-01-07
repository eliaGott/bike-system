import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";
import "./BikeStatus.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Moment from "moment";
import classnames from "classnames";
import DisplayFlagsButton from "./components/DisplayFlagsButton";
import StatusTextInput from "./components/StatusTextInput";

function BikeStatus() {
  const { idBike } = useParams();
  const [statusList, setStatusList] = useState([]);
  const [statusText, setStatusText] = useState([]);
  const [bikeInfo, setbikeInfo] = useState([
    {
      image: "",
      frame_nr: "0",
      checkin_date: "",
      flag: 0,
    },
  ]);

  // checkboxes functions down here
  const [checkedState, setCheckedState] = useState(new Array(27).fill(false));
  // questa funzione viene chiamata dal component checkbox, il quale la riceve nei props dal component BikeElement
  // chiamato in questa funzione BikeStatus. Una volta cliccato il checkbox rimanda su una variabile che rappresenta
  // l'evento onclick salvata nella var (position) qui sotto, dal quale si può estrarre il valore del checkbox.
  // Col valore del checkbox capiamo quale checkbox ha chiamato l'onclick function e con quello possiamo aggiornare
  // l'array degli stati CheckedState che viene sempre inizializzato tutto Falso.
  // NECESSARIO CHE I VALORi DEI CHECKBOXes SIANO SALVATI IN DATABASE E RECUPERATO QUANDO SI CARICA LA PAGINA DI STATO DELLA BICI
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index == position.target.value ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };
  // end checkboxes functions

  useEffect(() => {
    getbikeInfo();
    getText();
    getStatus();
  }, []);

  const getStatus = () => {
    Axios.get("http://localhost:3001/getStatus", {
      params: {
        idBike: idBike,
      },
    }).then((response) => {
      setStatusList(response.data);
    });
  };

  const getbikeInfo = () => {
    Axios.get("http://localhost:3001/getbikeInfo", {
      params: {
        idBike: idBike,
      },
    }).then((response) => {
      setbikeInfo(response.data);
      const [year, month, day] = response.data[0].checkin_date
        .substring(0, 10)
        .split("-");
      const dateFormatted = [day, month, year].join("-");
      // console.log(dateFormatted);
    });
  };

  const getText = () => {
    Axios.get("http://localhost:3001/getStatusText").then((response) => {
      setStatusText(response.data);
      // console.log(response.data);
    });
  };

  return (
    <section className="statusDisplay">
      <Link className="backButton" to="/bikes">
        <img
          src="https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-part-2/512/previous_next_back_stop_play-512.png"
          alt=""
        />
      </Link>
      <div className="statusHeader">
        <img className="headerImg" src={bikeInfo[0].image} alt="" />
        <div className="moreInfo">
          <BikeInfoLine
            nameClass="frameNr"
            infoName="Frame Nr"
            value={bikeInfo[0].frame_nr}
          />
          <BikeInfoLine
            nameClass="ckInDate"
            infoName="Check-in date"
            value={Moment(bikeInfo[0].checkin_date)
              .utcOffset("+0000")
              .format("DD-MM-YYYY")}
          />

          <div className="infoLine flagLine">
            <div className="wColumns">Flag:</div>
            <div className="flagButtonContainer">
              <DisplayFlagsButton
                flagCode={bikeInfo[0].flag}
                id_bike={idBike}
              />
            </div>
          </div>
        </div>
        <div className="qrCode">
          <QRCode value={window.location.href} size={125} />
        </div>
      </div>
      <div className="gridStatusContainer">
        {/* <div>bike element</div>
        <div>status</div>
        <div>done</div>
        <div>person</div> */}
        {statusList.map((bikeElement, index) => {
          return (
            <BikeElement
              bikeElement={bikeElement}
              statusText={statusText}
              handleOnChange={handleOnChange}
            ></BikeElement>
          );
        })}
      </div>
    </section>
  );
}

const BikeElement = (props) => {
  const { id_bike, type, status, done, name, photo_before, photo_after } =
    props.bikeElement;
  // this if statement avoids react to fail loading the page, if it hasnt still run the funcion that sets statusText variable
  // I believe it has something to do with syncronous or asyncr functions and stuff like that
  if (typeof props.statusText[type - 1] === "undefined") {
    return "";
  } else {
    return (
      <div className="statusRow">
        <div className="bikePart">
          <article className="statusTitles">
            <p style={{ fontWeight: "bold" }}>
              {props.statusText[type - 1].name_status_type_EN}
            </p>
            <p className="german">
              {props.statusText[type - 1].name_status_type_DE}
            </p>
          </article>
          <article className="statusDescriptions">
            <p>{props.statusText[type - 1].descr_status_type_EN}</p>
            <p className="german">
              {props.statusText[type - 1].descr_status_type_DE}
            </p>
          </article>
        </div>
        <div className="statusComment">
          <span style={{ fontWeight: "bold" }}>
            status: <br></br>
          </span>
          <StatusTextInput id_bike={id_bike} type={type} text={status} />
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>
            done: <br></br>
          </span>
          {/* {done} */}
          <Checkbox
            label=""
            index={props.index}
            onChange={props.handleOnChange}
          />
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>
            person: <br></br>
          </span>
          <StatusTextInput id_bike={id_bike} type={type} text={name} />
        </div>
      </div>
    );
  }
};

const BikeInfoLine = (props) => {
  return (
    <div className={classnames("infoLine", props.nameClass)}>
      <div className="wColumns">{props.infoName}:</div>
      <span>{props.value}</span>
    </div>
  );
};

const Checkbox = ({ label, value, onChange, index }) => {
  return (
    <label>
      <input type="checkbox" value={index} checked={value} onClick={onChange} />
      {label}
    </label>
  );
};

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}
export default BikeStatus;
