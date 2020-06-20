import React, { Component } from "react";
import "./styles/Energy.css";
import { HashRouter, NavLink, Route } from "react-router-dom";
import BendingLight from "./multiSims/BendingLight";
import WavesInterference from "./multiSims/WaveInterference";
 
class SimsOptics extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <ul className="header" style={{background: "#001a00"}}>
        <li><NavLink to="/simsOptics/bendingLight" style={{color: "white"}}>Bending Light</NavLink></li>
        <li><NavLink to="/simsOptics/waveInterference" style={{color: "white"}}>Wave Interference</NavLink></li>
        </ul>
        <div className="content">
        <Route path="/simsOptics/bendingLight" component={BendingLight}/>
        <Route path="/simsOptics/waveInterference" component={WavesInterference}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}
 
export default SimsOptics;