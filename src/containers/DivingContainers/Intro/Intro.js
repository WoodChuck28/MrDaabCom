import React, { Component } from "react";
import {
  Route,
  HashRouter,
  NavLink
} from "react-router-dom";

import DivingHistory from "./SubDirs/History";
import DivingCompetition from "./SubDirs/Competition";
import DivingSuccess from "./SubDirs/Success";
import DivingExamples from "./SubDirs/Examples";
import { Card } from "@material-ui/core";

class DivingIntro extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      <h2 style={{textAlign: "center", marginTop: "70px"}}>Swim and Dive Home Base</h2>
      <ul className="header" style={{background: "#001a00", height: "70px"}}>
      <li><NavLink to="/divingHistory" style={{color: "white"}}>History of Sport</NavLink></li>
      <li><NavLink to="/divingCompetition" style={{color: "white"}}>How Competition Works</NavLink></li>
      <li><NavLink to="/divingSuccess" style={{color: "white"}}>Who is Successful?</NavLink></li>
      <li><NavLink to="/divingExamples" style={{color: "white"}}>Diving Examples</NavLink></li>
      </ul>
        
        <div className="content">
          <Route path="/divingHistory" component={DivingHistory}/>
          <Route path="/divingCompetition" component={DivingCompetition}/>
          <Route path="/divingSuccess" component={DivingSuccess}/>
          <Route path="/divingExamples" component={DivingExamples}/>
        </div>
        <Card style={{textAlign: "center", background: "inherit"}}>
        </Card>
      </div>
      </HashRouter>
        
        
        
    );
  }
}
 
export default DivingIntro;