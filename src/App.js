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

function App() {
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
            <Navbar.Brand>
              <Link to="/">MR DAAB</Link>
            </Navbar.Brand> 
          </Navbar.Header>
              <a href="/schedule"><button className="btn btn-navbar"  style={{float: "right"}}>Schedule</button></a>
              <a href="/blogs"><button className="btn btn-navbar"  style={{float: "right"}}>Blogs</button></a>
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
