import React from "react";
import "./styles/Physics.css";
import Header from "../components/Header/Header";
import {
  Route,
  HashRouter,
} from "react-router-dom";

import Kinematics from "../containers/Kinematics";
import Dynamics from "../containers/PhysicsContainers/Dynamics";
import Energy from "../containers/PhysicsContainers/Energy";
import Momo from "../containers/PhysicsContainers/Momo";
import Rotation from "../containers/PhysicsContainers/Rotation";

export default function Physics() {
  function displayMainPhysics() {
    return (
      <div className="mainClass" style={{backgroundColor: "#354e01"}}>
        <HashRouter>
          
        <div className="content">
        <Header></Header>
          <Route path="/kinematics" component={Kinematics}/>s
          <Route path="/dynamics" component={Dynamics}/>
          <Route path="/energy" component={Energy}/>
          <Route path="/momentum" component={Momo}/>
          <Route path="/rotation" component={Rotation}/>
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