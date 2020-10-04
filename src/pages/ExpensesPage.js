import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changePageTitle } from '../actions/layoutReducer';

const ExpensesPage = (props) => {
    useEffect(() => {
        props.dispatch(changePageTitle('Expenses'));
    });

    return (
            <p
                className="
                    font-libre-franklin
                    text-2xl
                "
            >ExpensesPage</p>
    );
}

export default connect()(ExpensesPage);