import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import "./styles/Master.css";
import CBEandM from './CBEandM';
import NotesEandM from './NotesEandM';
import VocabularyEandM from './VocabEandM';
import WorkedExamplesEandM from "./WorkedExamplesEandM.js";
import SimsEandM from "./SimsEandM";


class EandM extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header" style={{background: "#001a00"}}>
          <li><NavLink to="/CBEandM" style={{color: "white"}}>CB</NavLink></li>
          <li><NavLink to="/notesEandM" style={{color: "white"}}>NOTES</NavLink></li>
          <li><NavLink to="/vocabEandM" style={{color: "white"}}>VOCAB</NavLink></li>
          <li><NavLink to="/practiceEandM" style={{color: "white"}}>Example Problems</NavLink></li>
          <li><NavLink to="/simsEandM" style={{color: "white"}}>Simulations</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/CBEandM" component={CBEandM}/>
          <Route path="/notesEandM" component={NotesEandM}/>
          <Route path="/vocabEandM" component={VocabularyEandM}/>
          <Route path="/practiceEandM" component={WorkedExamplesEandM}/>
          <Route path="/simsEandM" component={SimsEandM}/>
          </div>
        </div>
        </HashRouter>
    );
  }

}
 
export default EandM;