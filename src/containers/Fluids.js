import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";

import SimsFluids from "./SimsFluids"
import CollegeBoardFluid from './CollegeBoardDoc';
import Notes from './Notes';
import Vocabulary from './VocabularyFluids';
import NotesOutline from "./NotesOutlineFluids";
import MyMenuButton from "../components/MyMenuButton";
import MyMenuButton2 from "../components/MyMenuButton2";
import MyMenuButton3 from "../components/MyMenuButton3";
import VideosFluids from "./PhysicsContainers/VideosFluids";
import FluidsLabOne from "./PhysicsContainers/labs/FluidsLab1";

import "./styles/PhysicsStyles.css";
import BucketLab from "./PhysicsContainers/labs/FluidsLab2";
import { Card } from "@material-ui/core";
 
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
        </div>
          
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
          <Card style={{textAlign: "center", background: "inherit", color: "white"}}>
            <h3>Fluid Dynamics - Study of the movement of fluids through various mediums.</h3>
            <hr></hr>
            <img src="https://www.paraview.org/wp-content/uploads/2014/04/full_F35-6.png" height="auto" width="auto" alt="fluid" 
            style={{paddingTop: "20px"}}/>
          </Card>
        
        
        </HashRouter>
    );
  }
}
 
export default Fluids;