import React, { Component } from "react";
import Iframe from 'react-iframe'
import "./styles/CollegeBoardDoc.css";
 
class SimsFluids extends Component {
  render() {
    return (
    <div className="myclass">
    <Iframe src="https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_en.html" 
    width="100%" height="500" scrolling="no" allowfullscreen></Iframe>
      </div>
    );
  }
}
 
export default SimsFluids;