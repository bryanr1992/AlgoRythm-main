import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';

const StickyButton = () => {
  return (
    <div className="sticky">
      <button className="sticky-button">
        <div className="sticky-custom-icon">
          <FontAwesomeIcon icon={faStickyNote} size="2x" />
        </div>
      </button>
    </div>
  );
};

export default StickyButton;
