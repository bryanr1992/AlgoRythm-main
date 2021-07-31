import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStickyNote,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import './ModalPage.css';

const ModalPage = ({ flag, children }) => {
  var modal;
  var btn;
  var span;
  var container;

  const ref = useRef();

  useEffect(() => {
    modal = document.getElementById('myModal');
    btn = document.getElementById('myBtn');
    span = document.getElementsByClassName('close')[0];
    container = document.getElementById('main');

    // const onModalClick = (event) => {
    //   if (ref.current.contains(event.target)) {
    //     modal.style.display = 'none';
    //     container.style.zIndex = -1;
    //   }
    // };

    // document.body.addEventListener('click', onModalClick, { capture: true });

    // return () => {
    //   document.body.removeEventListener('click', onModalClick, {
    //     capture: true,
    //   });
    //};
  }, []);

  const handleClick = () => {
    modal.style.display = 'block';
    container.style.zIndex = 0;
  };

  const handleClose = () => {
    modal.style.display = 'none';
    container.style.zIndex = -1;
  };

  return (
    <React.Fragment>
      {/* <button onClick={handleClick} id="myBtn" className={customStyle}>
        Open Modal
      </button> */}
      <div className="sticky">
        <button onClick={handleClick} id="myBtn" className="sticky-button">
          <div className="sticky-custom-icon">
            <FontAwesomeIcon
              icon={flag ? faStickyNote : faQuestionCircle}
              size={flag ? '2x' : '3x'}
            />
          </div>
        </button>
      </div>
      <div ref={ref} id="myModal" className="modal">
        <div className="modal-content">
          <span onClick={handleClose} className="close">
            &times;
          </span>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ModalPage;
