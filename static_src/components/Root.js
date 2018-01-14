import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import ProjectPage from './ProjectPage';
import TaskPage from './TaskPage';
import TaskInfoPage from './TaskInfoPage';
import TaskEditPage from './TaskEditPage';
import App from './App';

import requireAuth from '../utils/requireAuth';

import '../styles/base.css';

export default () => (
  <App>
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/projects" /> } />
      <Route exact path="/signin" component={ SigninForm } />
      <Route exact path="/signup" component={ SignupForm } />
      <Route exact path="/projects" component={ requireAuth(ProjectPage) } />
      <Route exact path="/tasks" component={ requireAuth(TaskPage) } />
      <Route exact path="/tasks/new" component={ requireAuth(TaskEditPage) } />
      <Route exact path="/tasks/:id/edit" component={ requireAuth(TaskEditPage) } />
      <Route exact path="/tasks/:id" component={ requireAuth(TaskInfoPage) } />
    </Switch>
  </App>
);