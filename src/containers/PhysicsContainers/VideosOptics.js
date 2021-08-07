import React, { Component } from "react";
import ReactPlayer from "react-player"
import "./styles/VideoOptics.css"

class VideosOptics extends Component {
  render() {
    return (
      <div>
        <div class="grid-container">
       
              <ReactPlayer  url="https://www.youtube.com/watch?v=IXxZRZxafEQ&list=PL7OxSyLdQ97UZ42m0IthkKwus1ZqjMbhh"/>
              <ReactPlayer  url="https://www.youtube.com/watch?v=IRBfpBPELmE&list=PL7OxSyLdQ97UZ42m0IthkKwus1ZqjMbhh&index=2"/>
              
        
        </div>
        <div class="grid-container">
       
              <ReactPlayer  url="https://www.youtube.com/watch?v=Um0ZXhrQUJ4&list=PL7OxSyLdQ97UZ42m0IthkKwus1ZqjMbhh&index=3"/>
              <ReactPlayer  url="https://www.youtube.com/watch?v=Oh4m8Ees-3Q&list=PL7OxSyLdQ97UZ42m0IthkKwus1ZqjMbhh&index=4"/>
              
        
        </div>
        </div>
    );
  }
}
 
export default VideosOptics;

