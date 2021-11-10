import React from 'react';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import Home from './components/Home';
import DrinkName from './components/DrinkName';
import SingleDrink from './components/SingleDrink';
import DrinkList from './components/DrinkList';
import Page404 from './components/Page404';
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
        <SideNav/>
        <Switch>
          <Route path = '/home'>
            <Home/>
          </Route>
        </Switch>
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
