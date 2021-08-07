import React from 'react';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';
import { NavLink } from 'react-router-dom';
import "./styles/MyMenuButton.css"
 
const menuItemWords = ['Vocabulary', 'Notes', 'Problems', 'Videos', 'Simulations'];
 
export default class SimpleMotionMenuOne extends React.Component {
  render() {
    const menuItems = menuItemWords.map((word, i) => {
      return (
        <li key={i}><NavLink to={word} style={{color: "white"}}>
          <MenuItem className='MyMenuButton-menuItem'>
            {word}
          </MenuItem>
          </NavLink>
        </li>
      );
    });
 
    return (
      <Wrapper
        className='MyMenuButton'
        onSelection={handleSelection}
      >
        <Button  className='MyMenuButton-button'>
          Main Content
        </Button>
        <Menu style={{minWidth: "300px"}} className='MyMenuButton-menu'>
          <ul>{menuItems}</ul>
        </Menu>
      </Wrapper>
    );
  }
}
 
function handleSelection(value, event) { }