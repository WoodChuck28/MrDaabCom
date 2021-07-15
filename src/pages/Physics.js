import React from "react";
import "./styles/Physics.css";
import Header from "../components/Header/Header";
import {
  Route,
  HashRouter,
} from "react-router-dom";

import Kinematics from "../containers/Kinematics";

export default function Physics() {
  function displayMainPhysics() {
    return (
      <div className="mainClass" style={{backgroundColor: "#354e01"}}>
        <HashRouter>
          <Header></Header>
        <div className="content">
          <Route path="/kinematics" component={Kinematics}/>
        </div>
        </HashRouter>
      </div>
    );
  }

  return (
    <div className="Physics">
      {displayMainPhysics()}
    </div>
  );
}