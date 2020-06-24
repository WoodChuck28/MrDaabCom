import React from "react";
import ResponsiveCSGrid from "../components/MyCSGrid";
import { Card } from "@material-ui/core";

  export default function CSPage() {
      return(
        <div className="mainClass" style={{backgroundColor: "#354e01", paddingTop: "25px"}}>
      
        <Card className="physHeader" style={{background: "#354e01", backgroundColor: "#354e01", borderColor: "black", borderWidth: "3px", borderStyle: "solid", 
        padding: "5px"}}>
          <h1>Click on a button below to check out that CS topic.</h1>
 
          
        </Card>
        <ResponsiveCSGrid style={{background:"#354e01",  backgroundColor: "#354e01"}} className="testertester"></ResponsiveCSGrid>
      </div>
      );
  }  