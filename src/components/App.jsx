import React from 'react';
import Menu from './layout/Menu';
import Header from './layout/Header';
import './App.css';
import QueueInst from './pages/QueueInst';

const App = () => {
  const setTheme = () => {
    document.documentElement.className = 'theme-light';
    console.log('theme selected');
  };

  setTheme();
  return (
    // <div class="container">
    //   <Header />
    //   <div class="menu-container">
    //     <Menu />
    //   </div>
    // </div>
    <QueueInst />
  );
};

export default App;
