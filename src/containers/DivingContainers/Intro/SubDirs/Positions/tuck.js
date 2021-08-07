import React, { Component } from "react";
import "../../../../styles/CollegeBoardDoc.css";
 
class TuckPosition extends Component {
  render() {
    return (
      <div className="myDivingClass">
           <div className="Image class" style={{textAlign: "center"}}>
            <img src="./tuck.jpg" alt="straight" ></img>
          </div> 
          <div className="Content" style={{color: "white"}}>
              <h3>Tuck Position in Diving</h3>
              <p>The tuck position in diving is one of the four diving positions, alongside pike position, free position and straight position. 
                  While tuck is often referred to as the easiest diving position, it still requires a great deal of abdominal strength and 
                  flexibility.
                
                <br></br>
                The character used to donate a tuck position in diving is C. So the dive number for a forward 2 ½ somersaults in tuck is 105C.</p>
          </div>
      </div>
    );
  }
}
 
export default TuckPosition;