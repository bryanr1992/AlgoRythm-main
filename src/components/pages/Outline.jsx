import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from '../layout/Section';
import './Outline.css';

const Outline = () => {
  const changeIndex = () => {};

  return (
    <React.Fragment>
      <Section to="/stacks" name="Stacks" />
      <Section to="/queues" name="Queues" />
    </React.Fragment>
  );
};

export default Outline;
