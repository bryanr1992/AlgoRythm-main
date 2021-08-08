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
import Profile from './pages/Profile';
import Section from './layout/Section';
import ProtectedRoute from './Auth0/ProtectedRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BETester from './pages/BETester';

const App = () => {

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
            <ProtectedRoute path="/profile" component={Profile} />
            <Route path="/BETester" component={BETester} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
