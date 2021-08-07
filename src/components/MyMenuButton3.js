import React from 'react';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';
import { NavLink } from 'react-router-dom';
 
const menuItemWords = ['Homework', 'LabOne', 'LabTwo'];
 
export default class MyMenuButton3 extends React.Component {
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
        <Button className='MyMenuButton-button'>
          Assignments
        </Button>
        <Menu className='MyMenuButton-menu'>
          <ul>{menuItems}</ul>
        </Menu>
      </Wrapper>
    );
  }
}
 
function handleSelection(value, event) { }