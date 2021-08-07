import { Card } from "@material-ui/core";
import React from "react";
import "./../styles/Physics.css";
import "./../styles/NewPhysics.css"
import { HashRouter, NavLink, Route } from "react-router-dom";
import SimpleMotionVocab from "../../containers/PhysicsContainers/SimpleMotionVocab";
import SimpleMotionNotes from "../../containers/PhysicsContainers/Motion/SimpleMotionNotes";
import SimpleMotionPractice from "../../containers/PhysicsContainers/Motion/SimpleMotionPractice";
import MotionSimulation from "../../containers/PhysicsContainers/Motion/MotionSimulation";

export default function PhysicsSimpleMotion() {
  function displayPage() {
    return (
        
      <div className="mainClass" style={{backgroundColor: "#354e01"}}>
          
        <Card className="collapse" id="demo" class="collapse" style={{color: "white"}}>
            <h1>Welcome to Simple Motion.</h1>
            <h3 style={{color: "white"}}>This unit is all about the basics of simple motion.</h3>
            <ul>Overarching Topics:</ul>
            <li>Vectors</li>
            <li>Vector Addition</li>
            <li>Component Vectors</li>
            <li>Scalar Vs. Vector</li>
            <li>Distance Vs Displacement</li>
            <li>Speed Vs Velocity</li>
            <li>Basic Acceleration</li>
        </Card>
        <div className="NavigationClass">
            <HashRouter>
                <ul className="header" style={{background: "#001a00"}}>
                <button type="button" class="btn btn-info" >
                    <NavLink to="/SimpleMotion/MotionVocab" style={{color: "white"}}>Vocabulary</NavLink>
                </button>
                <button type="button" class="btn btn-info" >
                    <NavLink to="/SimpleMotion/MotionNotes" style={{color: "white"}}>Notes</NavLink>
                </button>
                <button type="button" class="btn btn-info" >
                    <NavLink to="/SimpleMotion/MotionPractice" style={{color: "white"}}>Practice</NavLink>
                </button>
                <button type="button" class="btn btn-info" >
                    <NavLink to="/SimpleMotion/MotionSimulation" style={{color: "white"}}>Vector Simulation</NavLink>
                </button>
                </ul>
                
                <Route path="/SimpleMotion/MotionVocab" component={SimpleMotionVocab}></Route>
                <Route path="/SimpleMotion/MotionNotes" component={SimpleMotionNotes}></Route>
                <Route path="/SimpleMotion/MotionPractice" component={SimpleMotionPractice}></Route>
                <Route path="/SimpleMotion/MotionSimulation" component={MotionSimulation}></Route>
            </HashRouter>
        </div>
      </div>
      
    );
  }

  return (
    <div className="PhysicsSimpleMotion" style={{minHeight: "750px"}}>
      {displayPage()}
    </div>
  );
}