import React, { Component } from "react";
import Iframe from "react-iframe";

 
class MotionSimulation extends Component {
  render() {
    return (
      <div className="myclass">  
        <h4>Vector Addition - Courtesy of PhET</h4>
        <Iframe src="https://phet.colorado.edu/sims/html/vector-addition/latest/vector-addition_en.html" 
        width="800" height="550" scrolling="no" allowfullscreen></Iframe>

      </div>
    );
  }
}
 
export default MotionSimulation;