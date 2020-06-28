import React, { Component } from "react";
import Iframe from 'react-iframe'
import "./styles/Energy.css";
 
class SimsThermo extends Component {
  render() {
    return (
    <div className="myclass">
    <Iframe src="https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_en.html" 
    width="100%" height="500" scrolling="no" allowfullscreen></Iframe>
      </div>
    );
  }
}
 
export default SimsThermo;