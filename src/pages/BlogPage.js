/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import "./styles/Home.css";
import BlogsVisual from "../containers/VisualBlogs"
import BlogsVisual2 from "../containers/VisualBlogs2";
import BlogsVisual3 from "../containers/VisualBlogs3";

import "./styles/Blog.css";




export default function BlogPage() {
  const galaxy_img = require("../assets/resources/img/th.jpg");
  const my_logo = require("../assets/resources/img/Serverless.PNG");
  
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
                <img src={require("../assets/resources/img/galaxy3.jpg")} height="200" alt="galaxy" class="border-tlr-radius"/>
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
                  <img src={my_logo} width="50" height= "50" alt="user" id="myImage"/>
                  <div class="card__author-content">
                    By <a href="/home">Mr. Daab</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="card radius shadowDepth1" style={{maxWidth: "300px", margin: "20px"}}>
              <div class="card__image border-tlr-radius">
                <img src={galaxy_img} height="200" alt="me" class="border-tlr-radius"/>
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
                  <img src={my_logo} width="50" height="50" alt="user" id="myImage"/>
                  <div class="card__author-content">
                    By <a href="/home">Mr. Daab</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog3 */}
            <div class="card radius shadowDepth1" style={{maxWidth: "300px", margin: "20px"}}>
              <div class="card__image border-tlr-radius">
                <img src={galaxy_img} height="200" alt="me" class="border-tlr-radius"/>
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
                  <img src={my_logo} width="50" height="50" alt="user" id="myImage"/>
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
