import React from "react";
import ResponsiveDivingGrid from "../components/MyDiveGrid";
import { Card } from "@material-ui/core";


  export default function DivingPage() {
      return(
        <div className="mainClass" style={{backgroundColor: "#354e01", paddingTop: "25px", textAlign: "center"}}>
      
        <Card className="physHeader" style={{background: "#354e01", backgroundColor: "#354e01", padding: "5px"}}>
          <h1>Click on a button below to check out that Diving topic.</h1>
          <img style={{maxHeight: "300px", maxWidth: "500px"}} src="./diving101.jpg" alt ="Diving"></img>
          <br/>
        </Card>
        <Card style={{padding: "10px", background: "inherit"}}>
            <ResponsiveDivingGrid style={{background:"#354e01",  backgroundColor: "#354e01"}} className="testertester"></ResponsiveDivingGrid>
        </Card>
        <Card style={{background: "inherit", borderColor: "black"}}>
          <h4 style={{paddingLeft: "10px"}}>About Coach Daab</h4>
          <hr/>
          <br/>
          <ul style={{color: "white"}}>
            <li>Swimming:&nbsp;&nbsp;Swimming for 28 years</li>
            <li>Coaching:&nbsp;&nbsp;Diving Coach 3 years</li>
            <li>Coaching:&nbsp;&nbsp;Summer Swim Coach 1 year</li>
            <li>Work:&nbsp;&nbsp;Teaches AP Physics 1 at NGHS</li>
            <li>Personal:&nbsp;&nbsp;Married and baby on way!</li>
            <li>Interests:&nbsp;&nbsp;Love swimming, being silly, being outdoors, fishing, and going on adventures!</li>
          </ul>
        </Card>
      </div>
      );
  }  