import * as React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from 'src/components/routing/RouteWithLayout';
// import SimpleRouter from 'src/components/routing/SimpleRouter';

import MainLayout from 'src/components/layout/MainLayout';

// Views
import Dashboard from 'src/views/Dashboard';
import Freemancers from './views/Freemancers';
import NotFound from 'src/views/NotFound';
import Login from './views/Login/Login';
import SimpleRouter from './components/routing/SimpleRouter';
import Settings from './views/Settings';

const Routes = () => (
  <Switch>
    <Redirect exact from="/" to="/dashboard" />
    <SimpleRouter component={Login} exact path="/login" />
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
      component={Settings}
      exact
      layout={MainLayout}
      path="/settings"
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
