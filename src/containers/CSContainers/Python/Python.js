import React, { Component } from "react";
import {
  Route,
  HashRouter,
  NavLink
} from "react-router-dom";
import PythonSyntax from "./PythonSyntax";
import PythonWhen from "./PythonWhen";


class Python extends Component {
  render() {
    return (
      <HashRouter>
      <div>
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
      </div>
      </HashRouter>
        
        
        
    );
  }
}
 
export default Python;