import React, { useEffect, useRef } from 'react';
import './ModalPage.css';

const ModalPage = ({ customStyle }) => {
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

    const onModalClick = (event) => {
      if (ref.current.contains(event.target)) {
        modal.style.display = 'none';
        container.style.zIndex = -1;
      }
    };

    document.body.addEventListener('click', onModalClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onModalClick, {
        capture: true,
      });
    };
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
      <button onClick={handleClick} id="myBtn" className={customStyle}>
        Open Modal
      </button>
      <div ref={ref} id="myModal" className="modal">
        <div className="modal-content">
          <span onClick={handleClose} className="close">
            &times;
          </span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ModalPage;
