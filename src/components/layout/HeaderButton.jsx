import React, { useState } from 'react';
import './HeaderButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';

const HeaderButton = ({ icon, size }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header-button">
      <FontAwesomeIcon
        onClick={() => setToggle(!toggle)}
        className="icon"
        icon={toggle ? faToggleOn : icon}
        size={size}
      />
    </div>
  );
};

export default HeaderButton;
