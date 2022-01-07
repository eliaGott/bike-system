import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Bikes from "./Bikes";
import BikeStatus from "./BikeStatus";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/bikes">Bikes</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Bikes">
          <Bikes />
        </Route>
        <Route path="/Bikes/:idBike">
          <BikeStatus />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
