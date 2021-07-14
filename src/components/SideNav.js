import React, {useState} from "react"
import "./styles/SideNav.css"

const SideNav = (props) => {
    const [wid, setWid] = useState("0%");
    const openSidenav = ( ) => {
        setWid("25%")
     };
     
return (
<div className='sidenav' style={{ width: props.width, paddingTop: "20px" }}>
<button onClick={openSidenav}>Open</button>
   <a href='#section'>About</a>
   <a href='#section'>Services</a>
   <a href='#section'>Clients</a>
   <a href='#section'>Contact</a>
   <a href="#section">{props.name}</a>
   <button onClick={props.closeNav}>X</button>
</div>
 );
};
export default SideNav;
