import React from 'react';
import Menu from './layout/Menu';
import Header from './layout/Header';
import './App.css';

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default App;
