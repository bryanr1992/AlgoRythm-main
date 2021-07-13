import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div id="mySidenav" class="sidenav">
      <a href="#">
        <img className="menu-icons" src="../assets/icon/book.svg"></img>
      </a>
      <a href="#">
        <img className="menu-icons" src="../assets/icon/trophy.svg"></img>
      </a>
      <a href="#">
        <img className="menu-icons" src="../assets/icon/focus.svg"></img>
      </a>
      <a href="#">
        <img className="menu-icons" src="../assets/icon/notes.svg"></img>
      </a>
    </div>
  );
};

export default Menu;
