import React, { Component } from "react";
import "../../../styles/CollegeBoardDoc.css";
import { Document } from 'react-pdf';
 
class DaabDiving extends Component {
  render() {
    return (
      <div className="myDivingClass">
          <Document file="DaabDiving.pdf"></Document>
      </div>
    );
  }
}
 
export default DaabDiving;