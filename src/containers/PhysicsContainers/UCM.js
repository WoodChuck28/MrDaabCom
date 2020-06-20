import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import CBUCM from './CBUCM';
import NotesUCM from './NotesUCM';
import VocabUCM from './VocabUCM';
import "./styles/UCM.css";


class UCM extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header" style={{background: "#001a00"}}>
          <li><NavLink to="/collegeboardUCM" style={{color: "white"}}>CB</NavLink></li>
          <li><NavLink to="/notesUCM" style={{color: "white"}}>NOTES</NavLink></li>
          <li><NavLink to="/vocabUCM" style={{color: "white"}}>VOCAB</NavLink></li>
          <li><NavLink to="/practiceUCM" style={{color: "white"}}>Example Problems</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/collegeboardUCM" component={CBUCM}/>
          <Route path="/notesUCM" component={NotesUCM}/>
          <Route path="/vocabUCM" component={VocabUCM}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default UCM;