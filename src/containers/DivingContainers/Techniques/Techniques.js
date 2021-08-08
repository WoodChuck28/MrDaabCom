import React, { Component } from "react";
import {
  Route,
  HashRouter,
  NavLink
} from "react-router-dom";

import Stance from "./Subdirs/Stance";
import Walk from "./Subdirs/Walk";
import ArmSwing from "./Subdirs/ArmSwing";
import FootPlacement from "./Subdirs/FootPlacement";

import { Card } from "@material-ui/core";

class Techniques extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      <h2 style={{textAlign: "center", marginTop: "70px"}}>Below you will find basic tips and tricks for mastering the techniques<br></br>
      requird to be a master diver!</h2>
      <ul className="header" style={{background: "#001a00", height: "70px"}}>
      <li><NavLink to="/stance" style={{color: "white"}}>Ready Stance</NavLink></li>
      <li><NavLink to="/walk" style={{color: "white"}}>Walk</NavLink></li>
      <li><NavLink to="/armswing" style={{color: "white"}}>Arm Swing</NavLink></li>
      <li><NavLink to="/footplacement" style={{color: "white"}}>Foot Placement</NavLink></li>
      <li><NavLink to="/hurdle" style={{color: "white"}}>Hurdle</NavLink></li>
      </ul>
        
        <div className="content">
          <Route path="/stance" component={Stance}/>
          <Route path="/walk" component={Walk}/>
          <Route path="/armswing" component={ArmSwing}/>
          <Route path="/footplacement" component={FootPlacement}/>
          <Route path="/hurdle" component={Stance}/>
        </div>
        <Card style={{textAlign: "center", background: "inherit"}}>
        </Card>
      </div>
      </HashRouter>
        
        
        
    );
  }
}
 
export default Techniques;