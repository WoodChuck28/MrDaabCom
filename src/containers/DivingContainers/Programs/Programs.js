import React, { Component } from "react";
import {
  Route,
  HashRouter,
  NavLink
} from "react-router-dom";

import DaabDiving from "./Subdirs/DaabDiving";

import { Card } from "@material-ui/core";

class Programs extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      <h2 style={{textAlign: "center", marginTop: "70px"}}>Below are the current year-round dive programs offered in the area</h2>
      <ul className="header" style={{background: "#001a00", height: "70px"}}>
      <li><NavLink to="/daabDiving" style={{color: "white"}}>Diving w the Daab - Suwanee</NavLink></li>
      <li><NavLink to="/bulldog" style={{color: "white"}}>UGA Diving - Athens</NavLink></li>
      <li><NavLink to="/ada" style={{color: "white"}}>ADA - Ga Tech - Atlanta</NavLink></li>
      </ul>
        
        <div className="content">
          <Route path="/daabDiving" component={DaabDiving}/>
          <Route path="/bulldog" component={DaabDiving}/>
          <Route path="/ada" component={DaabDiving}/>
        </div>
        <Card style={{textAlign: "center", background: "inherit"}}>
        </Card>
      </div>
      </HashRouter>
        
        
        
    );
  }
}
 
export default Programs;