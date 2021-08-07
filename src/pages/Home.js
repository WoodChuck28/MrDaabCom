/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import "./styles/Home.css";
import CarouselPage from "../components/Carousel"

export default function Home() {
  function displayHome() {
    return (<div className="container">
    <CarouselPage style={{marginTop: "25px"}}/>
    <h3 style={{textAlign: "center"}}>MR Daab's students should go to physics tab for physics content.</h3>
      <div className="grid-container">
        <div className="left">
              <div className="content" id="myContent">
                <a href="/physics" >
                <div className="content-overlay"></div>
                <img src="https://okpuzg.bl.files.1drv.com/y4mLaArqBQgSb-_pvoxNqVkQIodO9IPRgRG8GuYJtaVlwXMKeV9LPvPGTWQAzheivrDuojDWUTjgmigtxgZjXDIrgeV4oS_p1N6crMs0V5KL3bzK1ZwsTb6JHMt11a58VWlc1kuRpf-grfVhk5f8T6DciFK7BorQ4oSEqeYpCBEOIrsTbIfKb9HCovnyOGLxxA0ZguSzZlV42xeQcR3cBwVWg?width=660&height=371&cropmode=none" 
                width="100%" height="200" alt="physics" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">PHYSICS</h3>
                    <p className="content-text">Here you can learn everything about <br></br>AP Physics 1 and 2!</p>
                </div>
                </a>
              </div>
        </div>
        <div className="middle">
        <div className="content" id="myContent">
        <a href="/computerScience" >
        <div className="content-overlay"></div>
        <img src="https://ox8wcq.bl.files.1drv.com/y4mt_0C-12zD_-qZlO5caw1n3ZulBvZPgIXiK4gd3XvZbUxTzz3th_bpcUb8SJiSLC-kK06yW_jKaYyxkVxiyvZaZKIJATQLFyadBTLrx_NH52n8OWSBTSt-lyk6gb5DsCG4vsjEWl66DzrN-C7eTTRiE77X3JScYyI2sxxu-G-jVYBWH9nUJEU40mBuIDtnrQJj9c1q8-QTsHPkuAZ8evgYw?width=660&height=440&cropmode=none" 
        width="100%" height="200" alt="MD"/>
        <div className="content-details fadeIn-bottom">
          <h3 className="content-title">MR DAAB CS PAGE</h3>
            <p className="content-text">Here Mr Daab will cover all <br></br>of his latest CS projects and provide 
            general info about all types of programming</p>
        </div>
        </a>
      </div>
        </div>
        <div className="right">
        <div className="content" id="myContent">
        <a href="/swimanddive" >
        <div className="content-overlay"></div>
        <img src={"https://zzocpg.bl.files.1drv.com/y4mouc6fiNDTFVlmP5o_lprWzHZspTq2SsFgrb3KDLdhlvNq4ZunTA6bnQij168BHPb9FfWQj559VvnoB3rR-qEoxCfM0q2-TmCmEVKHoDLP76GJeTmi2nqKMb9AeuPMWK-E1yXlJSTZoxMXUN8eihkWH-d3ebaOG2kAOxOdUFKBU2bvlI_jVD1pBAmKGgAomp_k4Ekd5dqIvHhDXzgQ5ud4w?width=660&height=440&cropmode=none"} 
        width="100%" height="200" alt="Blogs"/>
        <div className="content-details fadeIn-bottom">
          <h3 className="content-title">Coach Daab</h3>
            <p className="content-text">Everything about swim and dive!</p>
        </div>
        </a>
      </div>
        </div> 
</div>
</div>
    );
  }
  return (
    <div className="Home">
      {displayHome()}
    </div>
  );
}
