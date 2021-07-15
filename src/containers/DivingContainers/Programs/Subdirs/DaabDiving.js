import React, { Component } from "react";
import "../../../styles/CollegeBoardDoc.css";

import SinglePage from "../../../../components/PDF/SinglePage";
import AllPages from "../../../../components/PDF/AllPages";

import DaabDive from "./daabdive.pdf"

class DaabDiving extends Component {
  render() {
    return (
      <div className="App">
      <h4>Single Page</h4>
      <SinglePage pdf={DaabDive} />

      <hr />

      <h4>All Pages</h4>
      <div className="all-page-container">
        <AllPages pdf={DaabDive} />
      </div>

      <hr />
    </div>
    );
  }
}
 
export default DaabDiving;