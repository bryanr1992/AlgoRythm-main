import React from 'react';
import Menu from './layout/Menu';
import Header from './layout/Header';
import './App.css';
import QueueInst from './pages/QueueInst';
import StackInst from './pages/StackInst';
import Notes from './pages/Notes';
import BubbleInst from './pages/BubbleInst';
import Stack from './pages/Stack';
import Queues from './pages/Queues';

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
    // <QueueInst />
    // <StackInst />
    // <Notes />
    //<BubbleInst />
    //<Stack />
    <Queues />
  );
};

export default App;
