import React from "react";
import ResponsiveDivingGrid from "../components/MyDiveGrid";
import { Card } from "@material-ui/core";

  export default function DivingPage() {
      return(
        <div className="mainClass" style={{backgroundColor: "#354e01", paddingTop: "25px"}}>
      
        <Card className="physHeader" style={{background: "#354e01", backgroundColor: "#354e01", padding: "5px"}}>
          <h1>Click on a button below to check out that CS topic.</h1>
          <br/>
        </Card>
        <Card style={{padding: "10px", background: "inherit"}}>
            <ResponsiveDivingGrid style={{background:"#354e01",  backgroundColor: "#354e01"}} className="testertester"></ResponsiveDivingGrid>
        </Card>
        <Card style={{background: "inherit"}}>
          <h4>About Coach Daab</h4>
          <hr/>
          <br/>
          <ul style={{color: "white"}}>
            <li>Chip:&nbsp;&nbsp;Swimming for 28 years</li>
            <li>MotherBoard:&nbsp;&nbsp;Diving Coach 3 years</li>
            <li>RAM:&nbsp;&nbsp;Summer Swim Coach 1 year</li>
            <li>SD:&nbsp;&nbsp;Teaches AP Physics 1 at NGHS</li>
            <li>Graphics:&nbsp;&nbsp;Married and baby on way!</li>
            <li>Case:&nbsp;&nbsp;Love swimming, being silly, being outdoors, fishing, and going on adventures!</li>
          </ul>
        </Card>
      </div>
      );
  }  