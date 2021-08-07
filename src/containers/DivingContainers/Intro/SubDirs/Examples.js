import React, { Component } from "react";
import {
  Route,
  HashRouter,
  NavLink
} from "react-router-dom";

import StraightPosition from "./Positions/straight";
import TuckPosition from "./Positions/tuck";
import PikePosition from "./Positions/pike";
import FreePosition from "./Positions/free";

import { Card } from "@material-ui/core";

class DivingTypes extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      <h2 style={{textAlign: "center", marginTop: "70px"}}>Diving Position Examples: </h2>
      <ul className="header" style={{background: "#001a00", height: "70px"}}>
      <li><NavLink to="/divingExamples/straight" style={{color: "white"}}>Straight Position</NavLink></li>
      <li><NavLink to="/divingExamples/tuck" style={{color: "white"}}>Tuck Position</NavLink></li>
      <li><NavLink to="/divingExamples/pike" style={{color: "white"}}>Pike Position</NavLink></li>
      <li><NavLink to="/divingExamples/free" style={{color: "white"}}>Free Position</NavLink></li>
      </ul>
        
        <div className="content">
          <Route path="/divingExamples/straight" component={StraightPosition}/>
          <Route path="/divingExamples/tuck" component={TuckPosition}/>
          <Route path="/divingExamples/pike" component={PikePosition}/>
          <Route path="/divingExamples/free" component={FreePosition}/>
        </div>
        <Card style={{textAlign: "center", background: "inherit"}}>
        </Card>
        <li>Credit to Swimming.com for descriptions and images.</li>
      </div>
      </HashRouter>
        
        
        
    );
  }
}
 
export default DivingTypes;