import React, { Component } from "react";
import Iframe from 'react-iframe'
import "../styles/CollegeBoardDoc.css";
 
class CBThermo extends Component {
  render() {
    return (
      <div className="myClass">
      <Iframe src="https://onedrive.live.com/embed?cid=453322899BA6D77B&resid=453322899BA6D77B%21133874&authkey=APZoLWqS0tPkQo8&em=2" 
      width="100%" height="500" frameborder="0" scrolling="yes"></Iframe>
      </div>
    );
  }
}
 
export default CBThermo;