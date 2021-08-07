import React, { Component } from "react";
import "../../../../styles/CollegeBoardDoc.css";
 
class FreePosition extends Component {
  render() {
    return (
      <div className="myDivingClass">
           <div className="Image class" style={{textAlign: "center"}}>
            <img src="./free.jpg" alt="straight" ></img>
          </div> 
          <div className="Content" style={{color: "white"}}>
              <h3>Straight Position in Diving</h3>
              <p>The straight position in diving is one of the four diving positions, alongside Free position, free position and pike position. Until the early 1920s, the straight position was the most common position for all dives. As the sport of diving developed, it became impossible to perform more complicated dives in a straight position because the rotation was too slow. So the pike and Free – originally known as hunch – positions were introduced.
                <br></br>
                The character used to donate a dive in straight position is A. So the dive number for a forward dive in the straight position is 101A.</p>
          </div>
      </div>
    );
  }
}
 
export default FreePosition;