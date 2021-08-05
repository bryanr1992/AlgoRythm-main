import React, { useState, useEffect } from 'react';
import './ToggleButton.css';
import { toggleTheme } from '../../scripts/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';

const ToggleButton = ({ icon, size }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setToggle(true);
    }
  }, []);

  const handleClick = () => {
    toggleTheme();
    setToggle(!toggle);
  };

  return (
    <div className="header-button">
      <FontAwesomeIcon
        onClick={handleClick}
        className="icon"
        icon={toggle ? faToggleOn : icon}
        size={size}
      />
    </div>
  );
};

export default ToggleButton;
