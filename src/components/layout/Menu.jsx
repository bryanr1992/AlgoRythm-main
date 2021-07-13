import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div id="mySidenav" class="sidenav">
      <a href="#">
        <img className="menu-icons" src="../assets/icon/book.svg"></img>
        <p className="menu-text">Learn</p>
      </a>
      <a href="#">
        <img className="menu-icons" src="../assets/icon/trophy.svg"></img>
        <p className="menu-text">Challenge</p>
      </a>
      <a href="#">
        <img className="menu-icons" src="../assets/icon/focus.svg"></img>
        <p className="menu-text">Practice</p>
      </a>
      <a href="#">
        <img className="menu-icons" src="../assets/icon/notes.svg"></img>
        <p className="menu-text">Notes</p>
      </a>
    </div>
  );
};

export default Menu;
