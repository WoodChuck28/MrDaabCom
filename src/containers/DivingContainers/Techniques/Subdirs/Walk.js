import React, { Component } from "react";
import "../../../styles/Diving.css";

class Walk extends Component {
  render() {
    return (
      <div className="daabdive">
          <div>
            <h3>The Walk</h3>
            <p>The walk constitutes the steps taken toward the end of the board. 
                Diving rules state that a diver must take a minimum of three steps 
                in a forward approach. Although there is no hard-and-fast rule about 
                the maximum number of steps, I have always taught divers to take at 
                least four steps. A walk with four or five steps allows the diver 
                to make a grander impression with the judges and to more easily get 
                in rhythm with the board—and rhythm is important for the forward approach, 
                as we will see. During the walk, the diver’s shoulders should be forward 
                over the plane of the toes, angling from the ankles and not the hips.</p>
          </div>
          <div>
            <img style={{maxHeight: "300px", maxWidth: "500px"}} src="./Walk.PNG" alt ="Walk"></img>
          </div>

      </div>
    );
  }
}
 
export default Walk;