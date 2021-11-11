import React from 'react';
import TopNav from './components/TopNav';
import Home from './components/Home';
import DrinkName from './components/DrinkName';
import SingleDrink from './components/SingleDrink';
import DrinkList from './components/DrinkList';
import Page404 from './components/Page404';
import About from './components/About';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App(props) {
  return (
    <div className = 'App'>
      <Router>
        <TopNav/>
        <Switch>
          <Route path = '/home'>
            <Home/>
          </Route>
        </Switch>
        <Route path = '/about'>
          <About/>
        </Route>
        <Route path = '/name'>
          <DrinkName/>
        </Route>
        <Route path = '/letter'>
          <DrinkList/>
        </Route>
        <Route path = '/drink'>
          <SingleDrink/>
        </Route>
        <Route path = '/404'>
          <Page404/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
