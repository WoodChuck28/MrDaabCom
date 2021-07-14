import React from "react";
import "./styles/SideNav.css"

const SideNav = (props) => {
return (
<div className='sidenav'>
   <a href='#section'>About</a>
   <a href='#section'>Services</a>
   <a href='#section'>Clients</a>
   <a href='#section'>Contact</a>
</div>
 );
};
export default SideNav;