import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Login';
import ToDoList from './TodoList';

const RouterHub = () => (
  <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route exact path="/todolist" component={ToDoList} />
      </Switch>
  </Router>
);
export default RouterHub;
