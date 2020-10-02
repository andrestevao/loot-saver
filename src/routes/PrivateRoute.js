import React from 'react';
import { Route } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';

const PrivateRoute = ({ path, exact, component }) => {
    const Component = component;
    return (
        <Route path={path} exact={exact}>
            <DefaultLayout>
                <Component />
            </DefaultLayout>
        </Route>
    );

};


export default PrivateRoute;