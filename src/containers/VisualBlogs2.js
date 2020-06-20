import React, { Component } from "react";
import { CardContent, Card } from "@material-ui/core";

class BlogsVisual2 extends Component {
  render() {
    return (
      <div className="Blog">
        <Card>
            <CardContent>
                <h3>A Serverless Website?</h3>
                <p>June 14, 2020</p>
            </CardContent>
        </Card>
        <Card>
            <CardContent style={{textAlign: "left", padding: "20px"}}>
                <p>MRDaab.com is a serverless website built on Javascript, HTML, React, and Amazon Web Services. The incredible thing 
                about a SERVLESS framework is the scalability. I am only charged WHEN someone executes a function in my site. Generally, 
                developers use a pay per hour type structure which can be expensive as you scale your webpage. This website operated on 
                SPA concept (single page application). The other awesome benefit to a SPA is that all of the content is loaded beforehand.
                This is why my website loads pages so much faster than other web pages. I am also using AWS authentication. I could have 
                users register and then I could give special privleges to users who have registered. <br/> <br/>
                Obviously things change at lightspeed (3.08 x 10^8), but I would be willing to bet that most new websites, moving forward
                will follow this serverless framework. I will say, based on my limited experience, that the serverless framework is a lot
                more difficult to work with when it comes to API calls in AWS. I am working on a simpler method and I will keep you posted.
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
 
export default BlogsVisual2;