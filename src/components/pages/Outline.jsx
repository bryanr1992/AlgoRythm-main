import React, { useEffect } from 'react';
import Section from '../layout/Section';
import './Outline.css';

const Outline = () => {
  const changeIndex = () => {};

  return (
    <React.Fragment>
      <h1 className="outline-h1"> Section 1</h1>
      <hr className="outline-hr"></hr>
      <div className="section-container">
        <div className="outline-div">
          <Section to="/stacks" name="Stacks" />
        </div>
        <div className="outline-div">
          <Section to="/queues" name="Queues" />
        </div>
        <div className="outline-div">
          <Section to="/bubble" name="Bubble Sort" />
        </div>
        <div className="outline-div">
          <Section to="/" name="test" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Outline;
