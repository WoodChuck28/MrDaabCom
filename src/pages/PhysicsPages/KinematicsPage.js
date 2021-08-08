import { Card } from "@material-ui/core";
import React from "react";
import "./../styles/Physics.css";
import "./../styles/NewPhysics.css"
import { HashRouter, NavLink, Route } from "react-router-dom";
import SimpleMotionVocab from "../../containers/PhysicsContainers/SimpleMotionVocab";
import SimpleMotionNotes from "../../containers/PhysicsContainers/Motion/SimpleMotionNotes";
import SimpleMotionPractice from "../../containers/PhysicsContainers/Motion/SimpleMotionPractice";
import MotionSimulation from "../../containers/PhysicsContainers/Motion/MotionSimulation";

export default function PhysicsKinematics() {
  function displayPage() {
    return (
        
      <div className="mainClass" style={{backgroundColor: "#354e01", color: "white"}}>
          
        <Card className="collapse" id="demo" class="collapse" style={{color: "white"}}>
            <h1>Welcome to Simple Motion.</h1>
            <h3 style={{color: "white"}}>This unit is all about kinematics and motion</h3>
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
                    <NavLink to="/SimpleMotion/KinematicsVocab" style={{color: "white"}}>Vocabulary</NavLink>
                </button>
                <button type="button" class="btn btn-info" >
                    <NavLink to="/SimpleMotion/KinematicsNotes" style={{color: "white"}}>Notes</NavLink>
                </button>
                <button type="button" class="btn btn-info" >
                    <NavLink to="/SimpleMotion/KinematicsPractice" style={{color: "white"}}>Practice</NavLink>
                </button>
                <button type="button" class="btn btn-info" >
                    <NavLink to="/SimpleMotion/KinematicsSimulation" style={{color: "white"}}>Vector Simulation</NavLink>
                </button>
                </ul>
                
                <Route path="/SimpleMotion/KinematicsVocab" component={SimpleMotionVocab}></Route>
                <Route path="/SimpleMotion/KinematicsNotes" component={SimpleMotionNotes}></Route>
                <Route path="/SimpleMotion/KinematicsPractice" component={SimpleMotionPractice}></Route>
                <Route path="/SimpleMotion/KinematicsSimulation" component={MotionSimulation}></Route>
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