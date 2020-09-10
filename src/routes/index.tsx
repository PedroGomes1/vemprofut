import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Matches from '../pages/Matches';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/home" exact component={Home} />
      <Route path="/matches" exact component={Matches} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
