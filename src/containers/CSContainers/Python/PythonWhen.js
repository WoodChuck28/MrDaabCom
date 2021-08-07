import React, { Component } from "react";
import "../../styles/CollegeBoardDoc.css";
 
class PythonWhen extends Component {
  render() {
    return (
      <div className="mySyntaxClass">
        <h2 style={{textAlign:"left", color: "white", }}>I suggest using Python when you want to do the following: </h2>
        <hr></hr>
        <br/>
        <ul>
            <ul>
                <li>Webscraping - extracting lots of data from web</li>
                <li>Quantitative Finance - Manipulating big data</li>
                <li>Plotting and visualizing large sets of data</li>
                <li>Simple Games</li>
                <li>Security</li>
                <li>White/Black Hat Hacking - because of high level language</li>
            </ul>
        </ul>
      </div>
    );
  }
}
 
export default PythonWhen;