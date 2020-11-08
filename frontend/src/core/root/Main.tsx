import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';
import { Home } from 'core/body/Home';

export function Main(): React.ReactElement {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
