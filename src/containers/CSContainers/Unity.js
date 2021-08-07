import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import { Card, CardContent } from "@material-ui/core";

import "../styles/Master.css";
import AboutUnity from "./Unity/AboutUnity";
import GamesUnity from "./Unity/GamesUnity";
import MyGameUnity from "./Unity/MyGameUnity";


class Unity extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header" style={{background: "#001a00", maxHeight: "100px"}}>
          <li><NavLink to="/aboutUnity" style={{color: "white"}}>About Unity</NavLink></li>
          <li><NavLink to="/gamesUnity" style={{color: "white"}}>Games Built on Unity</NavLink></li>
          <li><NavLink to="/myGameUnity" style={{color: "white"}}>Clips from My Game</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/aboutUnity" component={AboutUnity}/>
          <Route path="/gamesUnity" component={GamesUnity}/>
          <Route path="/myGameUnity" component={MyGameUnity}/>
          </div>
        </div>
        <Card style={{background: "inherit"}}>
          <CardContent style={{textAlign: "center"}}>
          <h4>Unity - </h4>
            
          </CardContent>
        </Card>
        </HashRouter>
    );
  }
}
 
export default Unity;