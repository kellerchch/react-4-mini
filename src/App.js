import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import One from './Route1'
import Two from './Route2'
import Three from './Route3'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/">Route 1</Link><br />
        <Link to="/2">Route 2</Link><br />
        <Link to="/3">Route 3</Link>

        <Switch>
          <Route exact path="/" component={One}/>
          <Route path="/2" component={Two}/>
          <Route path="/3" component={Three}/>
        </Switch>
      </div>
    );
  }
}

export default App;
