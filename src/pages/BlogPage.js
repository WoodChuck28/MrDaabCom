import React from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

import BlogsVisual from "../containers/VisualBlogs"
import BlogsVisual2 from "../containers/VisualBlogs2";
import BlogsVisual3 from "../containers/VisualBlogs3";
import serverless from "./images/Serverless.PNG";


import "./styles/Home.css";
import "./styles/Blog.css";



export default function BlogPage() {
  function displayBlogs() {
    return (
      <div className="container" >
        <div className="header">
              <h2>The Adventures of Mr. Daab</h2>
              <p>Click on a blog and its content will appear below on this page!</p></div>
              <HashRouter>
            <div>
            <div class="wrapper" style={{display: "contents", margin: "20px"}}>
            
            <div class="row card__padding" style={{display: "flex", marginLeft: "10px"}}>
            <div class="card radius shadowDepth1" style={{maxWidth: "300px", margin: "20px"}}>
              <div class="card__image border-tlr-radius">
                <img src={"https://aqgr4q.bl.files.1drv.com/y4mHdcaYdO16ektAqz7YOYxlX49u7U6_imXCtkZUQTjqF1lbKvYqqrO98TKIg0OGajb9-4fGIEDeMcBxP40tTb74sr-XywRhg6cjVqMBe_YRYfOB6qjWY2lGAlC0_U0qtAnndtB6ztD72lQhJCPzVgWpv8nFDLfsYxpDEza9rkkgD__YFke9YiTD5aB6bTlM_uNXS11PP9Buk7yGmqE9MARjg?width=400&height=300&cropmode=none"} height="200" alt="Galaxy" class="border-tlr-radius"/>
              </div>
              <div class="card__content card__padding">
                        <div class="card__share">
                            <div class="card__social">  
                                
                            </div>
                        </div>
                <div class="card__meta">
                  <a href="/general">General</a>
                    <time>13 June 2020</time>
                </div>
                <article class="card__article">
                  <h4><NavLink to="/firstPost" style={{color: "black"}}>First Post - A little about this site</NavLink></h4>
                  <p>I created this site in an effort to assist with Physics education at a college level. Additionally...</p>
                </article>
              </div>
              <div class="card__action">
                <div class="card__author">
                  <img src={"https://zzocpg.bl.files.1drv.com/y4mouc6fiNDTFVlmP5o_lprWzHZspTq2SsFgrb3KDLdhlvNq4ZunTA6bnQij168BHPb9FfWQj559VvnoB3rR-qEoxCfM0q2-TmCmEVKHoDLP76GJeTmi2nqKMb9AeuPMWK-E1yXlJSTZoxMXUN8eihkWH-d3ebaOG2kAOxOdUFKBU2bvlI_jVD1pBAmKGgAomp_k4Ekd5dqIvHhDXzgQ5ud4w?width=256&height=239&cropmode=none"} width="50" height= "50" alt="user" id="myImage"/>
                  <div class="card__author-content">
                    By <a href="/home">Mr. Daab</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="card radius shadowDepth1" style={{maxWidth: "300px", margin: "20px"}}>
              <div class="card__image border-tlr-radius">
                
                <img src={serverless} height="200" alt="TESTING" class="border-tlr-radius" />
                    </div>

              <div class="card__content card__padding">
                <div class="card__meta">
                  <a href="/development">Development</a>
                    <time>14 June 2020</time>
                </div>
                <article class="card__article">
                  <h4><NavLink to="/secondPost" style={{color: "black"}}>Serverless Framework - How this site works</NavLink></h4>
                  <p>MRDaab.com is a serverless website built on Javascript, HTML, React, and Amazon Web Services. The incredible thing 
                  about a SERVLESS framework is...</p>
                </article>
              </div>
              <div class="card__action">
                <div class="card__author">
                <img src={"https://zzocpg.bl.files.1drv.com/y4mouc6fiNDTFVlmP5o_lprWzHZspTq2SsFgrb3KDLdhlvNq4ZunTA6bnQij168BHPb9FfWQj559VvnoB3rR-qEoxCfM0q2-TmCmEVKHoDLP76GJeTmi2nqKMb9AeuPMWK-E1yXlJSTZoxMXUN8eihkWH-d3ebaOG2kAOxOdUFKBU2bvlI_jVD1pBAmKGgAomp_k4Ekd5dqIvHhDXzgQ5ud4w?width=256&height=239&cropmode=none"} width="50" height= "50" alt="user" id="myImage"/>
                  <div class="card__author-content">
                    By <a href="/home">Mr. Daab</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog3 */}
            <div class="card radius shadowDepth1" style={{maxWidth: "300px", margin: "20px"}}>
              <div class="card__image border-tlr-radius">
                <img src={"https://fahsxg.bl.files.1drv.com/y4mB8jO3uKsgTrJAX1MeeS4plgMeGgYcpfw8s15iJgdPBJKxkXFW9_e3ql1dS8_tiClRS2pOWbzzfzAndOv0_kkAiz8I1EiOP2nR5LuofYd3xEjtPi55yMiG6OiVZLedFR56CTyx_Xgw59lVWntQ83HBWNvLLM4Ix5GKzK5-5vqQVlxZw5VRhLj1pAQ2lGhJFDQlSa1c7E7rscWh-o4pktpYg?width=611&height=660&cropmode=none"} 
                height="200" width="100%" alt="me" class="border-tlr-radius" />
              </div>
              <div class="card__content card__padding">
                <div class="card__meta">
                  <a href="/development">Development</a>
                    <time>14 June 2020</time>
                </div>
                <article class="card__article">
                  <h4><NavLink to="/thirdPost" style={{color: "black"}}>Navigating the Current Landscape</NavLink></h4>
                  <p>It seems like 2020 is destined to be a signigicant time in our history. Between
                  opposing political views, a never-before-seen global...</p>
                </article>
              </div>
              <div class="card__action">
                <div class="card__author">
                <img src={"https://zzocpg.bl.files.1drv.com/y4mouc6fiNDTFVlmP5o_lprWzHZspTq2SsFgrb3KDLdhlvNq4ZunTA6bnQij168BHPb9FfWQj559VvnoB3rR-qEoxCfM0q2-TmCmEVKHoDLP76GJeTmi2nqKMb9AeuPMWK-E1yXlJSTZoxMXUN8eihkWH-d3ebaOG2kAOxOdUFKBU2bvlI_jVD1pBAmKGgAomp_k4Ekd5dqIvHhDXzgQ5ud4w?width=256&height=239&cropmode=none"} width="50" height= "50" alt="user" id="myImage"/>
                  <div class="card__author-content">
                    By <a href="/home">Mr. Daab</a>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
            
          </div>
              <div className="content">
              <Route path="/firstPost" component={BlogsVisual}/>
              <Route path="/secondPost" component={BlogsVisual2}/>
              <Route path="/thirdPost" component={BlogsVisual3}/>
              </div>
            </div>
            </HashRouter>
               
        </div>
    );
  }


  return (
    <div className="Home">
      {displayBlogs()}
    </div>
  );
}
