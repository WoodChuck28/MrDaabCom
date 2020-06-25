import React from "react";
import ResponsiveCSGrid from "../components/MyCSGrid";
import { Card, CardContent } from "@material-ui/core";

  export default function CSPage() {
      return(
        <div className="mainClass" style={{backgroundColor: "#354e01", paddingTop: "25px"}}>
      
        <Card className="physHeader" style={{background: "#354e01", backgroundColor: "#354e01", padding: "5px"}}>
          <h1>Click on a button below to check out that CS topic.</h1>
          <br/>
        </Card>
        <Card style={{padding: "10px", background: "inherit"}}>
            <ResponsiveCSGrid style={{background:"#354e01",  backgroundColor: "#354e01"}} className="testertester"></ResponsiveCSGrid>
        </Card>
        <Card style={{background: "inherit"}}>
          <h4>My Current Build:</h4>
          <hr/>
          <br/>
          <ul>
            <li>Chip:&nbsp;&nbsp;AMD Ryzen 5 3600 6 CORE (First AMD Chip)</li>
            <li>MotherBoard:&nbsp;&nbsp;Aorus Elite Gaming ATX</li>
          </ul>
        </Card>
      </div>
      );
  }  