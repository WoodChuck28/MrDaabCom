import React from "react";
import "./styles/Physics.css";


import NewPhysicsGrid from "../components/NewPhysicsGrid";

export default function NewPhysics() {
  function displayMainPhysics() {
    return (
      <div className="mainClass" style={{backgroundColor: "#354e01"}}>
        <NewPhysicsGrid style={{background:"#354e01",  backgroundColor: "#354e01"}} className="testertester"></NewPhysicsGrid>
      </div>
    );
  }

  return (
    <div className="Physics" style={{minHeight: "750px"}}>
      {displayMainPhysics()}
    </div>
  );
}