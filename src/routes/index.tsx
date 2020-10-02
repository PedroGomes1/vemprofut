import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Landing from '../pages/Landing';
import Home from '../pages/Home';
import Matches from '../pages/Matches';

import Route from './Route';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/landing" exact isPrivate component={Landing} />
      <Route path="/home" exact isPrivate component={Home} />
      <Route path="/matches" exact isPrivate component={Matches} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
