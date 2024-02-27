import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Gallery from '../components/Gallery';
import Home from '../components/Home';
export const History=createBrowserHistory();

export const routes=(
  <Router history={History}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
    </Switch>
  </Router>
);
