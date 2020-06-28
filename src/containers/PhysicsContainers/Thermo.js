import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";

import MyMenuButton from "../../components/MyMenuButton";
import MyMenuButton2 from "../../components/MyMenuButton2";
import MyMenuButton3 from "../../components/MyMenuButton3";

import CBThermo from './CBThermo';
import NotesThermo from './NotesThermo';
import VocabThermo from './VocabThermo';
import { Card, CardContent } from "@material-ui/core";

import "./styles/Master.css";
import SimsThermo from "./SimsThermo";


class Thermo extends Component {
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
        <Route path="/CollegeBoard" component={CBThermo}/>
        <Route path="/Notes" component={NotesThermo}/>
        <Route path="/Vocabulary" component={VocabThermo}/>
        <Route path="/Simulations" component={SimsThermo}/>
        <Route path="/Videos" component={CBThermo}/>
        <Route path="/Homework" component={CBThermo}/>
        <Route path="/LabOne" component={CBThermo}/>
        <Route path="/LabTwo" component={CBThermo}/>
        </div>
        
        <Card style={{background: "inherit"}}>
          <CardContent style={{textAlign: "center"}}>
          <h4>Thermodynamics - </h4>
            <img src="https://www.thoughtco.com/thmb/kbLw2vfRCeAxZ5TRlnq55XlCp2o=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/thermal-image-of-human-hand-913101800-5c48b143c9e77c0001968c60.jpg"
            style={{width: "40%", height:"300px"}} alt="Thermodynamics" />
          </CardContent>
        </Card>
        </HashRouter>
    );
  }
}
 
export default Thermo;