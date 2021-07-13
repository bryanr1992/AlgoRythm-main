import React from 'react';
import Menu from './layout/Menu';
import Header from './layout/Header';
import './App.css';

const App = () => {
  return (
    <div class="container">
      <Header />
      <div class="menu-container">
        <Menu />
      </div>
    </div>
  );
};

export default App;
