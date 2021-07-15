import React, { Component } from "react";
import "../../../styles/CollegeBoardDoc.css";
import SinglePage from "../../../../components/PDF/SinglePage";
import DaabDiving from "./DaabDiving.pdf";
 
class DaabDiving extends Component {
  render() {
    return (
      <div className="App">
      <h4>Single Page</h4>
      <SinglePage pdf={DaabDiving} />
    </div>
    );
  }
}
 
export default DaabDiving;