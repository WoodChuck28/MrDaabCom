import React, { Component } from "react";
import Iframe from 'react-iframe'
import "../styles/Energy.css";
 
class WavesInterference extends Component {
  render() {
    return (
    <div className="myclass">
    <Iframe src="https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_en.html" 
    width="100%" height="500" scrolling="no" allowfullscreen></Iframe>
      </div>
    );
  }
}
 
export default WavesInterference;