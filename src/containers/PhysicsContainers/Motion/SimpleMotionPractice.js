import React, { Component } from "react";

import AllPages from "../../../components/PDF/AllPages";

import MotionPrac from "./MotionDisplacementPrac.pdf"

 
class SimpleMotionPractice extends Component {
  render() {
    return (
      <div className="myclass">  
        <h4>Simple Motion Practice 1 - Dist v Disp</h4>
        <AllPages pdf={MotionPrac} />
      </div>
    );
  }
}
 
export default SimpleMotionPractice;