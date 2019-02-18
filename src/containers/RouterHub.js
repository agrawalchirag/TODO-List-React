import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Main from './Main';

const RouterHub = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route exact path="/main" component={Main} />
    </Switch>
  </Router>
);

export default RouterHub;
