import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import ErrorBoundary from "./components/ErrorBoundary";
import { AppContext } from "./libs/contextLib";
import { onError } from "./libs/errorLib";
import Routes from "./Routes";
import MyFooter from "./components/myFooter"
import "./App.css";

function App(props, state) {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        onError(e);
      }
    }

    setIsAuthenticating(false);
  }

  return (
    !isAuthenticating && (
      <div className="App container">
        <Navbar fluid collapseOnSelect >
          <Navbar.Header id="myNavHeader">
            <Navbar.Brand style={{padding: "0"}}>
              <Link to="/"><img src={"https://zzocpg.bl.files.1drv.com/y4mouc6fiNDTFVlmP5o_lprWzHZspTq2SsFgrb3KDLdhlvNq4ZunTA6bnQij168BHPb9FfWQj559VvnoB3rR-qEoxCfM0q2-TmCmEVKHoDLP76GJeTmi2nqKMb9AeuPMWK-E1yXlJSTZoxMXUN8eihkWH-d3ebaOG2kAOxOdUFKBU2bvlI_jVD1pBAmKGgAomp_k4Ekd5dqIvHhDXzgQ5ud4w?width=660&height=440&cropmode=none"} 
              alt="Home" style={{height: "inherit", width: "inherit"}}/></Link>
            </Navbar.Brand> 
          </Navbar.Header>
              <a href="/schedule"><button className="btn btn-navbar"  style={{float: "right"}}>Schedule</button></a>
              <a href="/computerScience"><button className="btn btn-navbar"  style={{float: "right"}}>CS</button></a>
              <a href="/swimanddive"><button className="btn btn-navbar"  style={{float: "right"}}>Swim and Dive</button></a>
              <a href="/physics"><button className="btn btn-navbar"  style={{float: "right"}}>Physics</button></a>
        </Navbar>
        <ErrorBoundary>
          <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
            <Routes />
          </AppContext.Provider>
        </ErrorBoundary>
        <MyFooter />
      </div>
    )
  );
}

export default App;
