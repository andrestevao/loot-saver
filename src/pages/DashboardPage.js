import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changePageTitle } from '../actions/layoutReducer';

const DashboardPage = (props) => {
    useEffect(() => {
        props.dispatch(changePageTitle('Dashboard'));
    });

    return (
        <h1>DashboardPage</h1>
    );
}

export default connect()(DashboardPage)