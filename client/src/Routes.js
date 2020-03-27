import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './App/Home';

function Routes() {
  return (
    <Switch>
      <Route to="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
