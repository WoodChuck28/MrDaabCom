import React, { Component } from "react";
import "../../../styles/CollegeBoardDoc.css";
import React from 'react';
import { render } from 'react-dom';
import Sample from './Sample';
 
class DaabDiving extends Component {
  render() {
    return (
      <div className="myDivingClass">
          <Sample />, document.getElementById('react-root')
      </div>
    );
  }
}
 
export default DaabDiving;