import React, { Component } from "react";
import Iframe from 'react-iframe'
import "../../styles/CollegeBoardDoc.css";
 
class FluidsLabOne extends Component {
  render() {
    return (
      <div className="BargeLab">
      <Iframe src="https://docs.google.com/forms/d/e/1FAIpQLScyo0B1JIrJ0dDcRwso-7jvA4RoCLG6Z8BFPPMe-zCRoqYZwg/viewform?embedded=true" 
      width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</Iframe>
      </div>
    );
  }
}
 
export default FluidsLabOne;