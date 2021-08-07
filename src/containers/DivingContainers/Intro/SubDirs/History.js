import React, { Component } from "react";
import Iframe from 'react-iframe'
import "../../../styles/CollegeBoardDoc.css";
 
class DivingHistory extends Component {
  render() {
    return (
      <div className="myDivingClass">
      <Iframe src="https://onedrive.live.com/embed?cid=453322899BA6D77B&resid=453322899BA6D77B%21143706&authkey=AFcIkVC5UcfiHww&em=2" 
      width="100%" height="500px" frameborder="0" scrolling="no"></Iframe>
      </div>
    );
  }
}
 
export default DivingHistory;