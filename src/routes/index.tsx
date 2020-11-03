import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import RegisterPlayers from '../pages/RegisterPlayers';
import Matches from '../pages/Matches';
import ListMatches from '../pages/ListMatches';
import RegisterTeams from '../pages/RegisterTeams';
import PlayerStatus from '../pages/PlayerStatus';

import Route from './Route';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/home" exact isPrivate component={Home} />
      <Route
        path="/register-players"
        exact
        isPrivate
        component={RegisterPlayers}
      />
      <Route path="/list-matches" exact isPrivate component={ListMatches} />
      <Route path="/register-teams" exact isPrivate component={RegisterTeams} />
      <Route path="/matches" exact isPrivate component={Matches} />
      <Route path="/status-players" exact isPrivate component={PlayerStatus} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
