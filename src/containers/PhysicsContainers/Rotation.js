import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import CBRotation from './CBRotation';
import NotesRotation from './NotesRotation';
import VocabRotation from './VocabRotation';
import "./styles/Rotation.css";


class Rotation extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header">
          <li><NavLink to="/collegeboardRotation">CB</NavLink></li>
          <li><NavLink to="/notesRotation">NOTES</NavLink></li>
          <li><NavLink to="/vocabRotation">VOCAB</NavLink></li>
          <li><NavLink to="/practiceRotation">Example Problems</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/collegeboardRotation" component={CBRotation}/>
          <Route path="/notesRotation" component={NotesRotation}/>
          <Route path="/vocabRotation" component={VocabRotation}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Rotation;