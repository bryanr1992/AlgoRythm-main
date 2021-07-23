import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div id="mySidenav" class="sidenav">
      <Link className="my-a" to="/outline">
        <img className="menu-icons" src="../assets/icon/book.svg"></img>
        <p className="menu-text">Learn</p>
      </Link>
      <Link className="my-a" to="/challenge">
        <img className="menu-icons" src="../assets/icon/trophy.svg"></img>
        <p className="menu-text">Challenge</p>
      </Link>
      <Link className="my-a" to="/practice">
        <img className="menu-icons" src="../assets/icon/focus.svg"></img>
        <p className="menu-text">Practice</p>
      </Link>
      <Link className="my-a" to="/notes">
        <img className="menu-icons" src="../assets/icon/notes.svg"></img>
        <p className="menu-text">Notes</p>
      </Link>
    </div>
  );
};

export default Menu;
