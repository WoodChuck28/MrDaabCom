import React, { Component } from "react";
import {
  Route,
  HashRouter,
  NavLink
} from "react-router-dom";
import frontPike from "./SubDirs/101b";
import frontTwoHalfPike from "./SubDirs/105b";
import { Card } from "@material-ui/core";

class Dives extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      <h2 style={{textAlign: "center", marginTop: "70px"}}>Examples of Select Dives:</h2>
      <ul className="header" style={{background: "#001a00", height: "70px"}}>
      <li><NavLink to="/101b" style={{color: "white"}}>101B</NavLink></li>
      <li><NavLink to="/102b" style={{color: "white"}}>102B</NavLink></li>
      <li><NavLink to="/103b" style={{color: "white"}}>103B</NavLink></li>
      <li><NavLink to="/104b" style={{color: "white"}}>104B</NavLink></li>
      </ul>
        
        <div className="content">
          <Route path="/101b" component={frontPike}/>
          <Route path="/105b" component={frontTwoHalfPike}/>
          <Route path="/103b" component={frontPike}/>
          <Route path="/104b" component={frontPike}/>
        </div>
        <Card style={{textAlign: "center", background: "inherit"}}>
        </Card>
      </div>
      </HashRouter>
        
        
        
    );
  }
}
 
export default Dives;