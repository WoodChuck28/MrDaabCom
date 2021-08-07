import React, { Component } from "react";
import Iframe from 'react-iframe'
import "../../styles/CollegeBoardDoc.css";
 
class PythonSyntax extends Component {
  render() {
    return (
      <div className="mySyntaxClass">
      <Iframe src="https://onedrive.live.com/embed?cid=453322899BA6D77B&resid=453322899BA6D77B%21133873&authkey=AGTnDJJltOzZ5Js&em=2" 
      width="100%" height="500" frameborder="0" scrolling="yes"></Iframe>
      </div>
    );
  }
}
 
export default PythonSyntax;