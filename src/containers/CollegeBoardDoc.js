import React, { Component } from "react";
import Iframe from 'react-iframe'
import "./styles/CollegeBoardDoc.css";
 
class CollegeBoardFluid extends Component {
  render() {
    return (
      <div className="myclass">
      <Iframe src="https://onedrive.live.com/embed?cid=453322899BA6D77B&resid=453322899BA6D77B%2156885&authkey=AHdL72m63bAKwiE&em=2" 
      width="100%" height="500" frameborder="0" scrolling="yes"></Iframe>
      </div>
    );
  }
}
 
export default CollegeBoardFluid;