import * as React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from 'src/components/routing/RouteWithLayout';
// import SimpleRouter from 'src/components/routing/SimpleRouter';

import MainLayout from 'src/components/layout/MainLayout';

// Views
import Dashboard from 'src/views/Dashboard';
import Freemancers from './views/Freemancers';
import NotFound from 'src/views/NotFound';

const Routes = () => (
  <Switch>
    <Redirect exact from="/" to="/dashboard" />
    <RouteWithLayout
      component={Dashboard}
      exact
      layout={MainLayout}
      path="/dashboard"
    />
    <RouteWithLayout
      component={Freemancers}
      exact
      layout={MainLayout}
      path="/freemancers"
    />
    <RouteWithLayout
      component={NotFound}
      exact
      layout={MainLayout}
      path="/not-found"
    />

    <Redirect to="/not-found" />
  </Switch>
);

export default Routes;
