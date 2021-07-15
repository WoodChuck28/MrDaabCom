import React, { Component } from "react";
import "../../../styles/CollegeBoardDoc.css";
import SinglePage from "../../../../components/PDF/SinglePage";
import DaabDivingPDF from "./DaabDiving.pdf";
 
class DaabDiving extends Component {
  render() {
    return (
      <div className="App">
      <h4>Single Page</h4>
      <SinglePage pdf={DaabDivingPDF} />
    </div>
    );
  }
}
 
export default DaabDiving;