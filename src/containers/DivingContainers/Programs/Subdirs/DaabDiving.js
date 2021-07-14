import React, { Component } from "react";
import "../../../styles/CollegeBoardDoc.css";
import EmbedPDF from "../../../../components/PdfEmbed";
 
class DaabDiving extends Component {
  render() {
    return (
      <div className="myDivingClass">
          <EmbedPDF />, document.getElementById('react-root')
      </div>
    );
  }
}
 
export default DaabDiving;