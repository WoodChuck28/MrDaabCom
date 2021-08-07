import React, { Component } from "react";
import Iframe from 'react-iframe'
import "../styles/Master.css";
 
class BendingLight extends Component {
  render() {
    return (
    <div className="BendingLight">
    <Iframe src="https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_en.html" 
    width="100%" height="500" scrolling="no" allowfullscreen></Iframe>
      </div>
    );
  }
}
 
export default BendingLight;