import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './components/Main';

import Page from './components/Page';


const Routes = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/page" component={Page} />
  </Switch>
  </BrowserRouter>
);

export default Routes;
