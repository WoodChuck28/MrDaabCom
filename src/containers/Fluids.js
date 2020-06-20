import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";

import SimsFluids from "./SimsFluids"
import CollegeBoardFluid from '../containers/CollegeBoardDoc';
import Notes from '../containers/Notes';
import Vocabulary from './VocabularyFluids';
import NotesOutline from "../containers/NotesOutlineFluids";
import MyMenuButton from "../components/MyMenuButton";
import MyMenuButton2 from "../components/MyMenuButton2";
import MyMenuButton3 from "../components/MyMenuButton3";
import VideosFluids from "./PhysicsContainers/VideosFluids";
import FluidsLabOne from "./PhysicsContainers/labs/FluidsLab1";

import "./styles/PhysicsStyles.css";
import BucketLab from "./PhysicsContainers/labs/FluidsLab2";
 
class Fluids extends Component {
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
            <Route path="/CollegeBoard" component={CollegeBoardFluid}/>
            <Route path="/Notes" component={Notes}/>
            <Route path="/Outline" component={NotesOutline}/>
            <Route path="/Vocabulary" component={Vocabulary}/>
            <Route path="/Simulations" component={SimsFluids}/>
            <Route path="/Videos" component={VideosFluids}/>
            <Route path="/Homework" component={Notes}/>
            <Route path="/LabOne" component={FluidsLabOne}/>
            <Route path="/LabTwo" component={BucketLab}/>
          </div>
        </div>
        
        </HashRouter>
    );
  }
}
 
export default Fluids;