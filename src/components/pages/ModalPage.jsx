import React, { useEffect, useRef } from 'react';
import './ModalPage.css';

const ModalPage = () => {
  var modal;
  var btn;
  var span;

  const ref = useRef();

  useEffect(() => {
    modal = document.getElementById('myModal');
    btn = document.getElementById('myBtn');
    span = document.getElementsByClassName('close')[0];

    const onModalClick = (event) => {
      if (ref.current.contains(event.target)) {
        modal.style.display = 'none';
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
  };

  const handleClose = () => {
    modal.style.display = 'none';
  };

  return (
    <React.Fragment>
      <button onClick={handleClick} id="myBtn" className="modal-btn">
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
