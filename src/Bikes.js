import "./Bikes.css";
import Bike from "./components/Bike";
import React, { Component } from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import PopupInsertBike from "./components/PopupInsertBike";
import StringSearchIcon from "./components/SearchIcons";

function Bikes() {
  const [bikeList, setBikeList] = useState([]);
  const [insertPopupState, setInsertPopupState] = useState(false);

  const getBikes = () => {
    Axios.get("http://localhost:3001/getBikes").then((response) => {
      setBikeList(response.data);
      // console.log(response.data);
    });
  };
  useEffect(() => {
    getBikes();
  }, []);
  return (
    <>
      <section id="bikesTableSection">
        <div className="navigation">
          <button className="newBike" onClick={() => setInsertPopupState(true)}>
            Register a new bike
          </button>
        </div>
        <div className="bikeDisplay">
          <table>
            <tr className="tableHeader">
              <th>Bike Image</th>
              <th>
                Frame Nr <StringSearchIcon></StringSearchIcon>
              </th>
              <th>
                Checked-in <StringSearchIcon></StringSearchIcon>
              </th>
              <th>
                Brand <StringSearchIcon></StringSearchIcon>
              </th>
              <th>
                Color <StringSearchIcon></StringSearchIcon>
              </th>
              <th>Flag</th>
              <th>Comment</th>
              <th>Given?</th>
              <th>Status</th>
            </tr>
            {/* una volta inserita la prima riga della tabella, cicla sull'array
        bikes definito all'inizio. è un array di oggetti, quindi quando returno
        il componente Bike (definito sotto) gli passo come props bike = {bike}
        per dirgli che si tratta di un oggetto, in pratica gli sto passando
        {bike} che è ciò che viene iterato all'interno dell'array bikes definito
        sopra. nel componete Book poi, dovrò destruttrare il prop bike = {bike} */}
            {bikeList.map((bike, index) => {
              return <Bike bike={bike} index={index}></Bike>;
            })}
          </table>
        </div>

        <PopupInsertBike
          trigger={insertPopupState}
          setTrigger={setInsertPopupState}
        />
      </section>
    </>
  );
}

// const Bike = (props) => {
//   const [showDropDown, setShowDropDown] = useState("none");
//   const onClickUpdate = (id, show) => {
//     var a = getElementBy;
//   };
//   const {
//     id_bike,
//     image,
//     frame_nr,
//     checkin_date,
//     brand,
//     color,
//     flag,
//     comment,
//     sold,
//   } = props.bike;
//   let checkin_date_short = checkin_date.substring(0, 10);
//   // console.log(props);
//   return (
//     <tr>
//       <th className="imgTmbn">
//         <img src={image} alt="" />
//       </th>
//       <th>{frame_nr}</th>
//       <th>{checkin_date_short}</th>
//       <th>{brand}</th>
//       <th>{color}</th>
//       <th className="flagsIcons">
//         <button
//           className="update updateFlag"
//           name={props.index}
//           onClick={onClickUpdate(props.index, "flex")}
//         >
//           update
//         </button>
//         <DisplayFlags flag={flag} />
//         <div
//           className="drpdwn-content"
//           id={"flagDrpdwn" + props.index}
//           style={{ display: showDropDown }}
//         >
//           <button className="flagDrpdownButton">
//             <img src={process.env.PUBLIC_URL + "/greenFlag.png"} alt="" />
//           </button>
//           <button className="flagDrpdownButton">
//             <img src={process.env.PUBLIC_URL + "/yellowFlag.png"}></img>
//           </button>
//           <button className="flagDrpdownButton">
//             <img src={process.env.PUBLIC_URL + "/greenFlag.png"} alt="" />
//             <img src={process.env.PUBLIC_URL + "/yellowFlag.png"}></img>
//           </button>
//           <button className="flagDrpdownButton">
//             <img src={process.env.PUBLIC_URL + "/greenFlag.png"} alt="" />
//             <img src={process.env.PUBLIC_URL + "/greenFlag.png"} alt="" />
//           </button>
//         </div>
//       </th>
//       <th>{comment}</th>
//       <th>{sold}</th>
//       <th>
//         <Link to={`/bikes/${id_bike}`}>Status</Link>
//       </th>
//     </tr>
//   );
// };

const Button = (props) => {
  return <button>{props.text}</button>;
};

export default Bikes;
