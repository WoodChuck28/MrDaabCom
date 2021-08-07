import React from 'react';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';
import { NavLink } from 'react-router-dom';
 
const menuItemWords = ['Simulations', 'Videos', 'Worked Examples'];
 
export default class MyMenuButton2 extends React.Component {
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
        className='MyMenuButton2'
        onSelection={handleSelection}
      >
        <Button className='MyMenuButton-button'>
          Supplemental Resources
        </Button>
        <Menu className='MyMenuButton-menu'>
          <ul>{menuItems}</ul>
        </Menu>
      </Wrapper>
    );
  }
}
 
function handleSelection(value, event) { }