import React, { Component } from "react";
import {
  Route,
  HashRouter,
  NavLink
} from "react-router-dom";
import frontPike from "./SubDirs/101b";
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
          <Route path="/102b" component={DivingCompetition}/>
          <Route path="/103b" component={DivingSuccess}/>
          <Route path="/104b" component={DivingExamples}/>
        </div>
        <Card style={{textAlign: "center", background: "inherit"}}>
          <img src="https://th.bing.com/th/id/OIP.Po8oq2jSJwuupdDRIMfxHQHaHa?w=167&h=180&c=7&o=5&dpr=1.25&pid=1.7" alt="python"
          style={{height: "200px", width: "200px"}}></img>
        </Card>
      </div>
      </HashRouter>
        
        
        
    );
  }
}
 
export default Dives;