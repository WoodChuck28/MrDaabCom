import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import CBOptics from './CBOptics';
import NotesOptics from './NotesOptics';
import VocabOptics from './VocabOptics';

import "./styles/Master.css";
import WorkedExamplesOptics from "./WorkedExamplesOptics";
import VideosOptics from "./VideosOptics";
import SimsOptics from "./SimsOptics";


class Optics extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header" style={{background: "#001a00"}}>
          <li><NavLink to="/collegeboardOptics" style={{color: "white"}}>CB</NavLink></li>
          <li><NavLink to="/notesOptics" style={{color: "white"}}>NOTES</NavLink></li>
          <li><NavLink to="/vocabOptics" style={{color: "white"}}>VOCAB</NavLink></li>
          <li><NavLink to="/examplesOptics" style={{color: "white"}}>Example Problems</NavLink></li>
          <li><NavLink to="/simsOptics" style={{color: "white"}}>Simulations</NavLink></li>
          <li><NavLink to="/videosOptics" style={{color: "white"}}>Videos</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/collegeboardOptics" component={CBOptics}/>
          <Route path="/notesOptics" component={NotesOptics}/>
          <Route path="/vocabOptics" component={VocabOptics}/>
          <Route path="/examplesOptics" component={WorkedExamplesOptics}/>
          <Route path="/simsOptics" component={SimsOptics}/>
          <Route path="/videosOptics" component={VideosOptics}/>
          </div>
        </div>
        
        </HashRouter>
    );
  }
}
 
export default Optics;