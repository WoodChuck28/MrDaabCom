import React, { Component } from "react";

import AllPages from "../../../components/PDF/AllPages";

import MotionNotes from "./1DMotionNotes.pdf"

 
class SimpleMotionNotes extends Component {
  render() {
    return (
      <div className="myclass">  
        <h4>Simple Motion Notes - Graphing Focus</h4>
        <AllPages pdf={MotionNotes} />
      </div>
    );
  }
}
 
export default SimpleMotionNotes;