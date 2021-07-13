import React, { Component } from "react";
import YoutubeEmbed from "../../../../components/youTubeEmbed";
import "../../../styles/CollegeBoardDoc.css";
import "../../../../pages/styles/Diving.css"
 
class frontPike extends Component {
  render() {
    return (
        <div className="App">
        <h1>Peter S. GHSA State Championship 5134D</h1>
        <YoutubeEmbed embedId="2KTgZ5C0Sis" />
      </div>
    );
  }
}

export default frontPike;