import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";

import CollegeBoardKine from '../containers/CBKine';
import NotesKine from '../containers/NotesKine';
import VocabularyKine from '../containers/VocabularyKine';
import MyMenuButton from "../components/MyMenuButton";
import MyMenuButton2 from "../components/MyMenuButton2";
import MyMenuButton3 from "../components/MyMenuButton3";
import SimsFluids from "./SimsFluids";
import VideosFluids from "./PhysicsContainers/VideosFluids";

import "./styles/PhysicsStyles.css";

class Kinematics extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <ul className="header" style={{background: "#001a00"}}>
        <MyMenuButton />
        <li><MyMenuButton2 /></li>
        <li><MyMenuButton3 /></li>
        </ul>
        
        <div className="content">
          <Route path="/CollegeBoard" component={CollegeBoardKine}/>
          <Route path="/Notes" component={NotesKine}/>
          <Route path="/Outline" component={NotesKine}/>
          <Route path="/Vocabulary" component={VocabularyKine}/>
          <Route path="/Simulations" component={SimsFluids}/>
          <Route path="/Videos" component={VideosFluids}/>
          <Route path="/Homework" component={NotesKine}/>
          <Route path="/Labs" />
        </div>
      </div>
      </HashRouter>
        
        
        
    );
  }
}
 
export default Kinematics;