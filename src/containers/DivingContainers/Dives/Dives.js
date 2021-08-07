import React, { Component } from "react";
import {
  Route,
  HashRouter,
  NavLink
} from "react-router-dom";
import frontPike from "./SubDirs/101b";
import frontTwoHalfPike from "./SubDirs/105b";
import inwardTwoHalfTuck from "./SubDirs/405c";
import reverseTwoHalfTuck from "./SubDirs/305c";
import backTwoHalfPike from "./SubDirs/205c";

import { Card } from "@material-ui/core";

class Dives extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      <h2 style={{textAlign: "center", marginTop: "70px"}}>Examples of Select Dives:</h2>
      <ul className="header" style={{background: "#001a00", height: "70px"}}>
      <li><NavLink to="/105b" style={{color: "white"}}>105B</NavLink></li>
      <li><NavLink to="/205c" style={{color: "white"}}>205C</NavLink></li>
      <li><NavLink to="/305c" style={{color: "white"}}>305C</NavLink></li>
      <li><NavLink to="/405c" style={{color: "white"}}>405C</NavLink></li>
      <li><NavLink to="/5134d" style={{color: "white"}}>5134D</NavLink></li>
      </ul>
        
        <div className="content">
          <Route path="/105b" component={frontTwoHalfPike}/>
          <Route path="/205c" component={backTwoHalfPike}/>
          <Route path="/305c" component={reverseTwoHalfTuck}/>
          <Route path="/405c" component={inwardTwoHalfTuck}/>
          <Route path="/5134d" component={frontPike}/>
        </div>
        <Card style={{textAlign: "center", background: "inherit"}}>
        </Card>
      </div>
      </HashRouter>
        
        
        
    );
  }
}
 
export default Dives;