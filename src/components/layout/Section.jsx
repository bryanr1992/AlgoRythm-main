import React from 'react';
import { Link } from 'react-router-dom';
import './Section.css';

const Section = ({ to, name }) => {
  return (
    <div className="section-container">
      <div className="section-rectangle">
        <div className="line"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
        <div className="line-5"></div>
        <div className="line-6"></div>
        <div className="line-7"></div>
        <div className="line-8"></div>
        <div className="line-9"></div>
        <div className="line-10"></div>
        <div className="line-11"></div>
        <div className="line-12"></div>
        <div className="line-13"></div>
        <div className="line-14"></div>
        <div className="inner-rectangle">
          <Link className="section-p" to={to}>{name}</Link>
        </div>
      </div>
    </div>
  );
};

export default Section;
