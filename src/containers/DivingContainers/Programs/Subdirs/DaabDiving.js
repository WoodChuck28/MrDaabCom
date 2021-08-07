import React, { Component } from "react";
import "../../../styles/Diving.css";

import SinglePage from "../../../../components/PDF/SinglePage";

import DaabDive from "./daabdive.pdf"

class DaabDiving extends Component {
  render() {
    return (
      <div className="daabdive">
      <h4>Single Page</h4>
      <SinglePage pdf={DaabDive} />

    </div>
    );
  }
}
 
export default DaabDiving;