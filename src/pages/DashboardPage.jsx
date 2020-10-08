import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changePageTitle } from "../actions/layoutReducer";

const DashboardPage = ({ dispatch }) => {
  useEffect(() => {
    dispatch(changePageTitle("Dashboard"));
  });

  return <h1>DashboardPage</h1>;
};

DashboardPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(DashboardPage);
