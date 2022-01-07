import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <div className="login">
        <img
          className="homeLogo"
          src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/12741901_588188518000273_6721925309496000190_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=973b4a&_nc_aid=0&_nc_ohc=YROCSe_EI_kAX-gAUw8&_nc_ht=scontent-ber1-1.xx&oh=5dcf2ba23f4182bdcb974866906fbf15&oe=6188C8A7"
          alt=""
        />
        <h1>Rückenwind</h1>
        <h2>Database</h2>
        <button>
          <Link to="./Bikes">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
