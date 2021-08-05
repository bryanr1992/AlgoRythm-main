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
import Section from './layout/Section';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  const setTheme = () => {
    document.documentElement.className = 'theme-light';
    console.log('theme selected');
  };

  setTheme();

  return (
    <div className="main-wrapper">
      <Router>
        <Header />
        <Menu />
        <div id="main" className="main-container">
          <Switch>
            <Route path="/" component={Logo} exact />
            <Route path="/stack-p" component={Stack} />
            <Route path="/queue-p" component={Queues} />
            <Route path="/bubble" component={BubbleInst} />
            <Route path="/queues" component={QueueInst} />
            <Route path="/outline" component={Outline} />
            <Route path="/stacks" component={StackInst} />
            <Route path="/notes" component={Notes} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
