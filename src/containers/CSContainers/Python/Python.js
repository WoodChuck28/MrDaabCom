import React, { Component } from "react";
import {
  Route,
  HashRouter,
  NavLink
} from "react-router-dom";
import PythonSyntax from "./PythonSyntax";
import PythonWhen from "./PythonWhen";
import { Card } from "@material-ui/core";


class Python extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      <h2 style={{textAlign: "center", marginTop: "70px"}}>Python - Super High Level Programming Language</h2>
      <ul className="header" style={{background: "#001a00", height: "70px"}}>
      <li><NavLink to="/pythonSyntax" style={{color: "white"}}>Syntax</NavLink></li>
      <li><NavLink to="/pythonUsage" style={{color: "white"}}>When To Use</NavLink></li>
      <li><NavLink to="/pythonFrameworks" style={{color: "white"}}>Frameworks</NavLink></li>
      <li><NavLink to="/myPythonExamples" style={{color: "white"}}>My Python Examples</NavLink></li>
      </ul>
        
        <div className="content">
          <Route path="/pythonSyntax" component={PythonSyntax}/>
          <Route path="/pythonUsage" component={PythonWhen}/>
          <Route path="/pythonFrameworks" component={PythonSyntax}/>
          <Route path="/myPythonExamples" component={PythonSyntax}/>
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
 
export default Python;