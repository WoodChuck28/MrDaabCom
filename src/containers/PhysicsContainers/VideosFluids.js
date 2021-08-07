import React, { Component } from "react";
import ReactPlayer from "react-player"
import "./styles/VideoFluids.css"

class VideosFluids extends Component {
  render() {
    return (
        <div class="grid-container">
            <ReactPlayer  url="https://www.youtube.com/watch?v=Fy1ngIoKmeQ"/>
            <ReactPlayer  url="https://www.youtube.com/watch?v=XAaDjrbmFe0"/>
        </div>
    );
  }
}
 
export default VideosFluids;

