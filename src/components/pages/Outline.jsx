import React, { useEffect } from 'react';
import './Outline.css';
import { Link } from 'react-router-dom';

const Outline = () => {
  const changeIndex = () => {};

//   useEffect(() => {
//     const changeIndex = () => {
//       const element = document.querySelector('.main-container');
//       element.style.zIndex= 1;
//       //console.log(element.style.zIndex);
//     };
//     changeIndex();
//   }, []);

  return (
    <React.Fragment>
      <ol class="gradient-list">
        <li>
          <Link to="/stacks">Stacks</Link>
        </li>
        <li>Insert link.</li>
        <li>Insert link</li>
        <li>Insert link.</li>
        <li>Insert link.</li>
        <li>Insert link.</li>
        <li>Insert link.</li>
        <li>Insert link.</li>
      </ol>
    </React.Fragment>
  );
};

export default Outline;
