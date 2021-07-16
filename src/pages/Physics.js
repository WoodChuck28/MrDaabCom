import React from "react";
import "./styles/Physics.css";


import MyGrid from "../components/MyGrid";

export default function Physics() {
  function displayMainPhysics() {
    return (
      <div className="mainClass" style={{backgroundColor: "#354e01"}}>
        <MyGrid style={{background:"#354e01",  backgroundColor: "#354e01"}} className="testertester"></MyGrid>
      </div>
    );
  }

  return (
    <div className="Physics" style={{minHeight: "750px"}}>
      {displayMainPhysics()}
    </div>
  );
}