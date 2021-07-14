import React from "react";
import "./styles/SideNav.css"

const SideNav = (props) => {
return (
<div className='sidenav' style={{ width: "25%", paddingTop: "20px" }}>
   <a href='#section'>About</a>
   <a href='#section'>Services</a>
   <a href='#section'>Clients</a>
   <a href='#section'>Contact</a>
   <a href="#section">{props.name}</a>
</div>
 );
};
export default SideNav;
