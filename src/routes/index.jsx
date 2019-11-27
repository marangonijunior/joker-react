import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../views/home';
import Search from '../views/search';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />  
      <Route exact path="/home" component={Home} />
      <Route exact path="/search" component={Search} />
    </Switch>
  </BrowserRouter>
);