import React, { Component } from "react";
import { CardContent, Card } from "@material-ui/core";

 
class BlogsVisual extends Component {
  render() {
    return (
      <div className="Blog">
        <Card>
            <CardContent>
                <h3>A little bit about this site</h3>
                <p>June 14, 2020</p>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <p>I created this site in an effort to assist with Physics education at a college level. Additionally I want the 
                site to be a hodge podge of everything that I do and discover on a regular basis. This means the blogs will cover a 
                lot of physics and computer science topics, but it will also cover my random adventures like creating an automated 
                hydroponic garden that grows me peppers, squash, cucumber, and tomatoes. Or maybe I will talk about a day that I go 
                free-diving down in Key-West on my friends sailboat. My goal is to share photos and experiences from any adventure I
                think someone may find interesting. I hope you guys enjoy!</p>
            </CardContent>
        </Card>
           
      </div>
    );
  }
}
 
export default BlogsVisual;