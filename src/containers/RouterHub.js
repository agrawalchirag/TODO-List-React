import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Login';
import EnterTaskDetails from './EnterTaskDetails';

const RouterHub = () => (
  <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route exact path="/todolist" component={EnterTaskDetails} />
      </Switch>
  </Router>
);

export default RouterHub;
