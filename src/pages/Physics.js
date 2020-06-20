import React from "react";
import ResponsiveGrid from "../components/MyGrid";
import { Card } from "@material-ui/core";
import "./styles/Physics.css";

export default function Physics() {
  function displayMainPhysics() {
    return (
      <div className="mainClass" style={{backgroundColor: "#354e01"}}>
      <div></div>
        <Card className="physHeader" style={{background: "#354e01", backgroundColor: "#354e01", borderColor: "black", borderWidth: "3px", borderStyle: "solid", 
        padding: "5px"}}>
          <h1>Guide to using the physics pages:</h1>
 
          <ul style={{textAlign: "center", backgroundColor: "#354e01",  background: "#354e01"}}>
            <li style={{background: "#354e01", backgroundColor: "#354e01" }}><strong style={{fontSize: "18px"}}>1. CB: Link to Collegeboard's unit outline guide. Includes standards, science practices, and I can statements</strong></li>
            <li><strong style={{fontSize: "18px"}}>2. NOTES: Link to comprehensive notes guide with example problems throughout</strong></li>
            <li><strong style={{fontSize: "18px"}}>3. NOTES OUTLINE: Link to fill in the blank notes guide with practice problems</strong></li>
            <li><strong style={{fontSize: "18px"}}>4. VOCAB: Link to vocabulary for this unit</strong></li>
            <li><strong style={{fontSize: "18px"}}>5. EXAMPLES: Link to worked examples from the notes tab</strong></li>
            </ul>
        </Card>
        <ResponsiveGrid style={{background:"#354e01",  backgroundColor: "#354e01"}} className="testertester"></ResponsiveGrid>
      </div>
    );
  }

  return (
    <div className="Physics">
      {displayMainPhysics()}
    </div>
  );
}