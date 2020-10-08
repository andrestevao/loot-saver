import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changePageTitle } from "../actions/layoutReducer";

const ExpensesPage = ({ dispatch }) => {
  useEffect(() => {
    dispatch(changePageTitle("Expenses"));
  });

  return (
    <p
      className="
                    font-libre-franklin
                    text-2xl
                "
    >
      ExpensesPage
    </p>
  );
};

ExpensesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(ExpensesPage);
