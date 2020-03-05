import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './components/Main';

const Routes = () => (
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Main} />
  </Switch>
  </BrowserRouter>
);

export default Routes;
