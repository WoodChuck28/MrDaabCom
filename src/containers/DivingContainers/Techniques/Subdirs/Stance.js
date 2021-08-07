import React, { Component } from "react";
import "../../../styles/Diving.css";

class Stance extends Component {
  render() {
    return (
      <div className="daabdive">
          <div>
            <h3>The Ready Stance</h3>
            <p>The stance is the position the diver assumes before taking the first step in the hurdle. 
            It is important for several reasons. First, because it is the initial impression the diver gives the judges, 
            it needs to be a good one. Second, the stance is also important because the diver needs to be in the body 
            alignment that will be used during the walk in the approach. The diver should stand with head neutral, shoulders  
            square but relaxed, feet together, abdomen in, front of torso slightly concave, hips rolled under, arms at the 
            side of the body, and fingers straight.</p>
          </div>
          <div>
            <img style={{maxHeight: "300px", maxWidth: "500px"}} src="./stance.PNG" alt ="Stance"></img>
          </div>

      </div>
    );
  }
}
 
export default Stance;