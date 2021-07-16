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
                <NavLink to="/kinematics" style={{color: "white"}}>Kinematics</NavLink>
                <Route path="/kinematics" component={Kinematics}/>
              </div>
              <div className="entry">
              <NavLink to="/dynamics" style={{color: "white"}}>Dynamics</NavLink>
              <Route path="/dynamics" component={Dynamics}/>
              </div>
              <div className="entry">
                <NavLink to="/energy" style={{color: "white"}}>Energy</NavLink>
                <Route path="/energy" component={Energy}/>
              </div>
              <div className="entry">
                <NavLink to="/momentum" style={{color: "white"}}>Momentum</NavLink>
                <Route path="/momentum" component={Momo}/>
              </div>

            </div>
            
          </Card>
          
        
        <div className="content">
          
          
          
          <Route path="/momentum" component={Momo}/>
          
        </div>
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