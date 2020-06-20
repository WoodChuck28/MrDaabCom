import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import CBEnergy from './CBEnergy';
import NotesEnergy from './NotesEnergy';
import VocabEnergy from './VocabEnergy';
import "./styles/Energy.css";
import SimsEnergy from "./SimsEnergy";


class Energy extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header" style={{background: "#001a00"}}>
          <li><NavLink to="/collegeboardEnergy" style={{color: "white"}}>CB</NavLink></li>
          <li><NavLink to="/notesEnergy" style={{color: "white"}}>NOTES</NavLink></li>
          <li><NavLink to="/vocabEnergy" style={{color: "white"}}>VOCAB</NavLink></li>
          <li><NavLink to="/practiceEnergy" style={{color: "white"}}>Example Problems</NavLink></li>
          <li><NavLink to="/simsEnergy" style={{color: "white"}}>Simulation</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/collegeboardEnergy" component={CBEnergy}/>
          <Route path="/notesEnergy" component={NotesEnergy}/>
          <Route path="/vocabEnergy" component={VocabEnergy}/>
          <Route path="/simsEnergy" component={SimsEnergy}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Energy;