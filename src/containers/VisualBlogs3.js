import React, { Component } from "react";
import { CardContent, Card } from "@material-ui/core";

class BlogsVisual3 extends Component {
  render() {
    return (
      <div className="Blog3">
        <Card>
            <CardContent>
                <h3>Racism in America</h3>
                <p>June 18, 2020</p>
            </CardContent>
        </Card>
        <Card>
            <CardContent style={{textAlign: "left", padding: "20px"}}>
                <p>
                    It seems like 2020 is destined to be a signigicant time in our history. Between
                    opposing political views, a never-before-seen global pandemic, revisting equality amongst races,
                    and a plethora of geopolitical tensions, it can be hard to remain hopeful and continue to work 
                    towards promulgating positive change. I wanted to share my bi-partisan opinion on how you can navigate
                    these tumultuous times while continuing to make progress towards your professional, cultural, and 
                    personal goals.
                    <br/>
                    First, I want to make something abundantly clear: If you are <strong>not</strong> using the time 
                    you have been given to improve your self (both professionally and personally), you had better start!
                    Since March 12, I have almost finished my basement (adds $$ to home value), learned C++ (yuck) in order 
                    to develop a stock tracking platform (adding a marketable skill), and created and began work on this reactJS
                    based website. I don't tell you this to flex, I just want you to know what you are capable of doing 
                    during this time. It can be easy to "become bored" or to sit on your phone for hours (and believe me, I 
                    still do this occasionally) but this is not constructive to your growth as an individual. I like to think 
                    of it as one big competition. When this pandemic is over, and we return to status quo, we are all going to 
                    emerge almost as if time was paused (professionally speaking, not culturally obviously). Whatever your goal, 
                    whether it be making first team, breaking a record, or learning a skill, your "training" period is right now. 
                    Use this time to "train" so that when you emerge, you will be far better off than those who argued on facebook
                    the entire time, or those that created 756 tik tok videos.
                    <br/>
                    The main focus of this post is to address how to navigate the current landscape while not getting discouraged, 
                    and while maintaining hope for humankind. The funny thing is I truly believe we over-complicate the solution, 
                    and this combined with our general impatience makes progress difficult to ascertain. To me, in order to solve
                    issues facing our society today, you need to start with respect/kindness towards all humans.

                    TO BE CONTINUED LATER TODAY (8:54am 6-18-20)
                    <br/>
                    <br/>
                    <p>-MR. DAAB</p>
                </p>
            </CardContent>
        </Card>
           
      </div>
    );
  }
}
 
export default BlogsVisual3;