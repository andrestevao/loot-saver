import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import DefaultLayout from "../layouts/DefaultLayout";

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

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  component: PropTypes.elementType.isRequired,
};

PrivateRoute.defaultProps = {
  exact: false,
};

export default PrivateRoute;
