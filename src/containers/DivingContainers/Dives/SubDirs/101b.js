import React, { Component } from "react";
import YoutubeEmbed from "../../../../components/youTubeEmbed";
import "../../../styles/CollegeBoardDoc.css";
 
class frontPike extends Component {
  render() {
    return (
        <div className="App">
        <h1>Youtube Embed</h1>
        <YoutubeEmbed embedId="2KTgZ5C0Sis" />
      </div>
    );
  }
}

export default frontPike;