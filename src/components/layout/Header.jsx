import React from 'react';
import './Header.css';
import ToggleButton from './ToggleButton';
import {
  faToggleOff
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import AuthenticationButton from './AuthenticationButton';

const Header = () => {
  return (
      <div className="header">
        <ToggleButton className="header-btn"icon={faToggleOff} size="1x"/>
        <h2 className="header-h2" >AlgoRythm</h2>
        <AuthenticationButton />
        <Link to="/profile">
        <p className="menu-text">Profile</p>
      </Link>
      </div>
  );
};

export default Header;
