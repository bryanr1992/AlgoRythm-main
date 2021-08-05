import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { setTheme } from './scripts/theme';

(() => {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
    console.log("setting theme dark");
  } else {
    setTheme('theme-light');
    console.log("setting theme light");
  }
})();

ReactDOM.render(<App />, document.querySelector('#root'));
