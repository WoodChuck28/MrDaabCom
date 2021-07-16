import React from "react";
import "./styles/Physics.css";
import {
  Route,
  HashRouter,
  NavLink,
} from "react-router-dom";

import Kinematics from "../containers/Kinematics";
import Dynamics from "../containers/PhysicsContainers/Dynamics";
import Energy from "../containers/PhysicsContainers/Energy";
import Momo from "../containers/PhysicsContainers/Momo";
import { Card } from "@material-ui/core";

export default function Physics() {
  function displayMainPhysics() {
    return (
      <div className="mainClass" style={{backgroundColor: "#354e01"}}>
        <HashRouter>
          <Card>
            <div className="body">
              <div className="entry">
                <NavLink to="/kinematics" style={{color: "black"}}>Kinematics</NavLink>
                <p style={{width: "80%"}}>
                  This unit will cover everything from vector addition to 2-body kinematics problems. 
                </p>
                
              </div>
              <div className="entry">
              <NavLink to="/dynamics" style={{color: "black"}}>Dynamics</NavLink>
              <Route path="/dynamics" component={Dynamics}/>
              </div>
              <div className="entry">
                <NavLink to="/energy" style={{color: "black"}}>Energy</NavLink>
                <Route path="/energy" component={Energy}/>
              </div>
              <div className="entry">
                <NavLink to="/momentum" style={{color: "black"}}>Momentum</NavLink>
                <Route path="/momentum" component={Momo}/>
              </div>

            </div>
            
          </Card>
        </HashRouter>
      </div>
    );
  }

  return (
    <div className="Physics" style={{minHeight: "750px"}}>
      {displayMainPhysics()}
    </div>
  );
}