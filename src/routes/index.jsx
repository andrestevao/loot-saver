import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import BudgetPage from '../pages/BudgetPage';
import DefaultLayout from '../layouts/DefaultLayout';
import PrivateRoute from './PrivateRoute';
import ExpensesPage from '../pages/ExpensesPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute path="/" exact component={DashboardPage} layout={DefaultLayout} />
      <PrivateRoute path="/budget" component={BudgetPage} layout={DefaultLayout} />
      <PrivateRoute path="/expenses" component={ExpensesPage} layout={DefaultLayout} />
      <Route>
        <p>Unknown: 404</p>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
