import React from 'react';
import './ModalPage.css';

const ModalPage = () => {
  return (
    <React.Fragment>
      <button id="myBtn" className="modal-btn">Open Modal</button>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ModalPage;
