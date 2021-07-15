//import useState hook to create menu collapse state
import React, { useState } from "react";
import CollegeBoardKine from "../../containers/CBKine"
import Dynamics from "../../containers/PhysicsContainers/Dynamics"
import Energy from "../../containers/PhysicsContainers/Energy"
import Momentum from "../../containers/PhysicsContainers/Momo"

import PhysicsMenuButton from "../PhysicsMenuButton";

import {
  Route,
  HashRouter,
  NavLink
} from "react-router-dom";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons

import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
   
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu>
              <HashRouter>
              <MenuItem active={true} >
                Home
              </MenuItem>
              <MenuItem style={{fontSize: "10px"}}><PhysicsMenuButton></PhysicsMenuButton></MenuItem>
              <MenuItem style={{fontSize: "10px"}}><NavLink to="/dynamics" style={{color: "black"}}>Dynamics</NavLink></MenuItem>
              <MenuItem style={{fontSize: "10px"}}><NavLink to="/energy" style={{color: "black"}}>Energy</NavLink></MenuItem>
              <MenuItem style={{fontSize: "10px"}}><NavLink to="/momentum" style={{color: "black"}}>Momentum</NavLink></MenuItem>
              </HashRouter>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
        <div className="content">
          <Route path="/CollegeBoard" component={CollegeBoardKine}/>
          <Route path="/dynamics" component={Dynamics}/>
          <Route path="/energy" component={Energy}/>
          <Route path="/momentum" component={Momentum}/>
          </div>
      </div>
    
  );
};

export default Header;