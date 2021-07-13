import React, { Component } from "react";
import Iframe from 'react-iframe';
import "../../styles/CollegeBoardDoc.css";

class DivingNumbers extends Component {
    render() {
      return (
        <div className="myDivingClass" style={{paddingTop: "25px"}}>
        <Iframe src="https://onedrive.live.com/embed?cid=453322899BA6D77B&resid=453322899BA6D77B%21143708&authkey=AP1FCRVZwsXl1O0&em=2" 
        width="100%" height="500" frameborder="0" scrolling="no"></Iframe>
        </div>
      );
    }
  }
   
  export default DivingNumbers;