import React from 'react';
import { connect } from 'react-redux';
import { incrementCount } from '../actions/countReducer';

class DashboardPage extends React.Component {
    constructor(props){
        super(props);
        
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(incrementCount());
        this.props.dispatch(incrementCount());
    }

    render() {
        return <p>DashboardPage</p>;
    }
}

const mapStateToProps = (state) => {
    const { count } = state;
    return {
        count
    }
}

export default connect(mapStateToProps)(DashboardPage)