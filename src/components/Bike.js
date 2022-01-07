import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DisplayFlagsButton from "./DisplayFlagsButton";

export default class Bike extends Component {
  constructor(props) {
    super(props);
    this.state = { dropDownVisible: false, flag: props.bike.flag };

    this.onUpdateClick = this.onUpdateClick.bind(this);
    this.updateFlagQuery = this.updateFlagQuery.bind(this);
  }

  onUpdateClick() {
    this.setState({ dropDownVisible: !this.state.dropDownVisible });
  }

  updateFlagQuery(value, id_bike) {
    Axios.put("http://localhost:3001/updateFlag", {
      flag: value,
      id_bike: id_bike,
    }).then((response) => {
      console.log("updated");
    });
    this.setState({ flag: value });
    this.setState({ dropDownVisible: false });
  }

  render() {
    const {
      id_bike,
      image,
      frame_nr,
      checkin_date,
      brand,
      color,
      flag,
      comment,
      sold,
    } = this.props.bike;
    var checkin_date_short = this.props.bike.checkin_date.substring(0, 10);
    console.log(this.props.bike.checkin_date);
    console.log(checkin_date_short);
    const [year, month, day] = checkin_date_short.split("-");
    checkin_date_short = [day, month, year].join("-");
    return (
      <tr>
        <th className="imgTmbn">
          <img src={this.props.bike.image} alt="" />
        </th>
        <th>{this.props.bike.frame_nr}</th>
        <th>{checkin_date_short}</th>
        <th>{this.props.bike.brand}</th>
        <th>{this.props.bike.color}</th>

        <th className="flagsIcons">
          {/* <button
            className="update updateFlag"
            name={this.props.index}
            onClick={this.onUpdateClick}
          >
            <DisplayFlags flagCode={this.state.flag} />
          </button> */}

          <DisplayFlagsButton
            flagCode={this.props.bike.flag}
            id_bike={this.props.bike.id_bike}
          />

          <div
            className="drpdwn-content"
            id={"flagDrpdwn" + this.props.index}
            style={{ display: this.state.dropDownVisible ? "flex" : "none" }}
          >
            <button
              className="flagDrpdownButton"
              value={1}
              onClick={() => {
                this.updateFlagQuery(1, this.props.bike.id_bike);
              }}
            >
              <img src={process.env.PUBLIC_URL + "/yellowFlag.png"} alt="" />
            </button>
            <button
              className="flagDrpdownButton"
              value={2}
              onClick={() => {
                this.updateFlagQuery(2, this.props.bike.id_bike);
              }}
            >
              <img src={process.env.PUBLIC_URL + "/greenFlag.png"}></img>
            </button>
            <button
              className="flagDrpdownButton"
              value={3}
              onClick={() => {
                this.updateFlagQuery(3, this.props.bike.id_bike);
              }}
            >
              <img src={process.env.PUBLIC_URL + "/greenFlag.png"} alt="" />
              <img src={process.env.PUBLIC_URL + "/yellowFlag.png"}></img>
            </button>
            <button
              className="flagDrpdownButton"
              value={4}
              onClick={() => {
                this.updateFlagQuery(4, this.props.bike.id_bike);
              }}
            >
              <img src={process.env.PUBLIC_URL + "/greenFlag.png"} alt="" />
              <img src={process.env.PUBLIC_URL + "/greenFlag.png"} alt="" />
            </button>
          </div>
        </th>
        <th>{this.props.bike.comment}</th>
        <th>{this.props.bike.sold == 0 ? "No" : "Yes"}</th>
        <th>
          <Link
            className="toStatusLink"
            to={`/bikes/${this.props.bike.id_bike}`}
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-squares-01/3/33-512.png"
              alt=""
            />
          </Link>
        </th>
      </tr>
    );
  }
}
