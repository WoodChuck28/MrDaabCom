import { Card } from "@material-ui/core";
import React from "react";
import "./../styles/Physics.css";
import "./../styles/NewPhysics.css"


export default function PhysicsIntro() {
  function displayPage() {
    return (
      <div className="mainClass" style={{backgroundColor: "inherit"}}>
        <Card className="HeaderClass" style={{backgroundColor: "inherit"}}>
            <h3 style={{color: "white"}}>Welcome to the wonderful world of Physics!</h3>
        </Card>
        <Card style={{backgroundColor: "inherit"}}>
            <p style={{color: "white"}}>Each page will contain notes, activities, simulations, and worked practice problems to help you master the content!</p>
                <ul style={{color: "white"}}> In order to be a Physics guru, you should hone these skills:
                    <li style={{color: "white"}}>Variable manipulation - rearranging algebraic equations</li>
                    <li style={{color: "white"}}>Reading Comprehension - figuring out what the question is asking.</li>
                    <li style={{color: "white"}}>Organization - on harder problems, staying organized so you don't get lost</li>
                </ul>
        </Card>
      </div>
    );
  }

  return (
    <div className="Physics" style={{minHeight: "750px"}}>
      {displayPage()}
    </div>
  );
}