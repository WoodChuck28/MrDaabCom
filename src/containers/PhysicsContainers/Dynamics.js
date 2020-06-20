import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import CBDyn from './CBDyn';
import NotesDyn from './NotesDyn';
import VocabDyn from './VocabDyn';
import { Card, CardContent } from "@material-ui/core";

import "./styles/Master.css";


class Dynamics extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header" style={{background: "#001a00"}}>
          <li><NavLink to="/collegeboardDyn" style={{color: "white"}}>CB</NavLink></li>
          <li><NavLink to="/notesDyn" style={{color: "white"}}>NOTES</NavLink></li>
          <li><NavLink to="/vocabDyn" style={{color: "white"}}>VOCAB</NavLink></li>
          <li><NavLink to="/practiceDyn" style={{color: "white"}}>Example Problems</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/collegeboardDyn" component={CBDyn}/>
          <Route path="/notesDyn" component={NotesDyn}/>
          <Route path="/vocabDyn" component={VocabDyn}/>
          </div>
        </div>
        <Card style={{background: "inherit"}}>
          <CardContent style={{textAlign: "center"}}>
          <h4>Dynamics - branch of physical science and subdivision of mechanics that is concerned with the motion of material 
          objects in relation to the physical factors that affect them: force, mass, momentum, energy.</h4>
            <img src="https://miro.medium.com/max/3840/1*6q1-rTOP10j1qV9A7ACm_g.jpeg"
            style={{width: "60%", height:"300px"}} alt="Dynamics" />
          </CardContent>
        </Card>
        </HashRouter>
    );
  }
}
 
export default Dynamics;