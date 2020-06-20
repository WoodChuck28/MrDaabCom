import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import CBMomo from './CBMomo';
import NotesMomo from './NotesMomo';
import VocabMomo from './VocabMomo';
import "./styles/Momo.css";


class Momo extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header">
          <li><NavLink to="/collegeboardMomo">CB</NavLink></li>
          <li><NavLink to="/notesMomo">NOTES</NavLink></li>
          <li><NavLink to="/vocabMomo">VOCAB</NavLink></li>
          <li><NavLink to="/practiceMomo">Example Problems</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/collegeboardMomo" component={CBMomo}/>
          <Route path="/notesMomo" component={NotesMomo}/>
          <Route path="/vocabMomo" component={VocabMomo}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Momo;