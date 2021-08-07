import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { setTheme } from './scripts/theme';
import Auth0ProviderWithHistory from './components/layout/Auth0/Auth0ProviderWithHistory';

(() => {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
  } else {
    setTheme('theme-light');
  }
})();

ReactDOM.render(
<Auth0ProviderWithHistory> 
  <App />
</Auth0ProviderWithHistory>, 
document.querySelector('#root')

);
