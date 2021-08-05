import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { setTheme } from './scripts/theme';

(() => {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
  } else {
    setTheme('theme-light');
  }
})();

ReactDOM.render(<App />, document.querySelector('#root'));
