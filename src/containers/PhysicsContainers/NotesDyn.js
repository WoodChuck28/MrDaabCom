import React, { Component } from "react";
import Iframe from 'react-iframe'

class NotesDyn extends Component {
  render() {
    return (
      <div>
      <Iframe src="https://onedrive.live.com/embed?cid=453322899BA6D77B&resid=453322899BA6D77B%21132057&authkey=AGYCOJvpsGEst1U&em=2" 
      width="100%" height="500" frameborder="0" scrolling="yes"></Iframe>
      </div>
    );
  }
}
 
export default NotesDyn;