import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={DashboardPage} />
            <Route path="/app">
                <p>App: /app</p>
            </Route>
            <Route exact={true}>
                <p>Unknown: 404</p>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;