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
import Logo from './layout/Logo';
import Outline from './pages/Outline';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  const setTheme = () => {
    document.documentElement.className = 'theme-light';
    console.log('theme selected');
  };

  setTheme();

  return (
    // <BrowserRouter>
    //   <div className="main-wrapper">
    //     <div class="container">
    //       <Header />
    //       <div class="menu-container">
    //         <Menu />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="main-container">
    //     <Switch>
    //       <Route path="/" component={Logo} exact />
    //       <Route path="/outline" component={Outline} />
    //       <Route path="/stacks" component={StackInst} />
    //       <Route path="/notes" component={Notes} />
    //     </Switch>
    //   </div>
    // </BrowserRouter>
    <div className="main-wrapper">
      <BrowserRouter>
        <Header />
        <Menu />
        <div className="main-container">
          <Switch>
            <Route path="/" component={Logo} exact />
            <Route path="/outline" component={Outline} />
            <Route path="/stacks" component={StackInst} />
            <Route path="/notes" component={Notes} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
