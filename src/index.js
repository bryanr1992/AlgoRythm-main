import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { setTheme } from './scripts/theme';
import { Auth0Provider } from "@auth0/auth0-react";


(() => {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
  } else {
    setTheme('theme-light');
  }
})();

ReactDOM.render(
  <Auth0Provider
  domain="dev-06ahjyxx.us.auth0.com"
  clientId="RZwIZVIy8sGKwxTIZlF7fLBq5iFa46BR"
  redirectUri={window.location.origin}
  useRefreshTokens={true}
  cacheLocation="localstorage"
> 

<App />

</Auth0Provider>, 
document.querySelector('#root')

);
