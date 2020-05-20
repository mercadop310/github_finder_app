import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar.js';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Alert from './components/layout/Alert.js';
import User from './components/users/User';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <nav className='navbar bg-primary'>
              <Navbar />
            </nav>
            <div className='container'>
              <Alert />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route exact path='/about' render={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
