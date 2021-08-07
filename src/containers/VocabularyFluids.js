import React, { Component } from "react";
import Iframe from 'react-iframe'
import "./styles/CollegeBoardDoc.css";
 
class Vocabulary extends Component {
  render() {
    return (
      <div>
      <div className="FluidVocab">
      <Iframe src="https://onedrive.live.com/embed?cid=453322899BA6D77B&resid=453322899BA6D77B%21132066&authkey=ACWztXrognqc23w&em=2" 
      width="100%" height="500" frameborder="0" scrolling="yes"></Iframe>
        </div>
      </div>
    );
  }
}
 
export default Vocabulary;