import React, { Component, Fragment } from "react";
import { Card, CardContent } from "@material-ui/core";
import "../../styles/CollegeBoardDoc.css";
import "./styles/FluidsLabTwo.css"

 
class BucketLab extends Component {
  render() {
    return (
      <Fragment>
        <header>
            <h2 style={{textAlign: "center"}}>There's a Hole in my Bucket...</h2>
        </header>
        <Card className="main">
            <CardContent className="content">
                <h4 style={{color: "black"}}>In this lab we are going to experimentally determine cross-sectional 
                area of a hole drilled in a bucket that will be filled with water.</h4>  <hr />
                <p><strong>Each group of three-four students will need the following equipment (there are only four buckets):</strong></p>
                <ul>
                    <ul>
                    <li>
                        <ol>
                            <li>One Bucket</li>
                            <li>5 meter sticks</li>
                            <li>one stop watch</li>
                        </ol>
                    </li>
                    </ul>
                </ul>
                <p><strong>At some point, you need to make the following measurements of your empty bucket:</strong></p>
                <ol>
                    <li>height of the bottom of the hole above the base of the bucket (cm)</li>
                    <li>height of each liter making above the base of the bucket (cm)</li>
                    <li>diameter of the hole (centimeters to at least one, preferably two decimal places)</li>
                    <li>circumference of the bucket at the 2-liter mark (cm)</li>
                    <li>circumference of the bucket at the 8-liter mark (cm)</li>
                    <li>circumference of the bucket at the 14-liter mark (cm)</li>
                    <li>height of outside bench (cm)</li>
                    <hr />
                </ol>
                <p>When we go outside, you will fill your bucket up to the 14-liter mark. Make sure that the hole 
                remains covered until you are ready to start the experiment. Place it on a level bench - the bucket 
                must NOT be slanted. <hr />

                When you are ready to start timing, you must immediately also be ready to place the meter sticks on 
                the ground to mark the range of the water as each liter mark is reached. Remember to get the original 
                14-liter range when the hole is initially uncovered. [If you wish, you may place a litter more than 14 
                liters in the buckets and start your timers and range measurements when the water level first reaches 
                the 14-liter mark. <hr />
                
                Remember that the water will have a parabolic trajectory and will splash, so you need to quickly ascertain 
                its range when each time is called. After measuring each range, you can then pick up the meter stick to use 
                for another timing mark. <hr />

                Someone needs to watch the water levels and tell the timer and the range-finder when to record their measurements.
                You will run the experiment twice, each time filling the bucket up to the 14-liter mark and then emptying it. 
                Each run will have its own independent timing and range data. </p>
            </CardContent>
        </Card>
      </Fragment>
    );
  }
}
 
export default BucketLab;