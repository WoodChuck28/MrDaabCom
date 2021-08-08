import React, { Component } from "react";
import "../../../styles/Diving.css";

class ArmSwing extends Component {
  render() {
    return (
      <div className="daabdive">
          <div>
            <h3>The Walk</h3>
            <p>The arm swing, as you might guess, involves moving the arms in synchronization with each step in the walk. 
                The arm swing is easy to syncopate with the steps. If the diver takes five steps, the arms move backward 
                as the first step is taken. If diver takes four steps, the arms move forward as the first step is taken. 
                Many divers and diving coaches overlook the importance of the arm swing, focusing more on what happens at 
                the end of the approach than on what happens at the beginning. Of course, both are important; however, even 
                though the arm swing may seem like a simple and unassuming element of the forward approach, it is more 
                critical than divers and coaches might first think.</p> 
                
            <p>
                The diving board is like a stringed musical instrument 
                with its own vibration and rhythm, and the diver must be in rhythm with the board. The board won’t 
                accommodate the diver; the diver must accommodate the board. In other words, the diver’s rhythm must 
                match the board’s rhythm. At a U.S. national championship, one of my divers had a disastrous event on 
                the 1-meter springboard, pounding the board with every hurdle and finishing in last place. In a 
                late-evening practice, I asked him to focus on swinging his arms and finding more rhythm in his approach. 
                That did the trick. In the next day’s event, the 3-meter springboard, he caught the board at its apex with 
                every hurdle and made finals. 
            </p>
                
            <p>
                When swinging the arms in the approach, the diver must remember to disengage 
                the trapezius muscles so that the arms swing freely. A big part of diving is learning which muscles to 
                engage and which to disengage during motor performance.
            </p>
            <div className="ImageClass">
                <img style={{maxHeight: "300px", maxWidth: "500px"}} src="./as1.PNG" alt ="as1"></img>
                <img style={{maxHeight: "300px", maxWidth: "500px"}} src="./as2.PNG" alt ="as2"></img>
                <img style={{maxHeight: "300px", maxWidth: "500px"}} src="./as3.PNG" alt ="as3"></img>
            </div>


          </div>
          

      </div>
    );
  }
}
 
export default ArmSwing;