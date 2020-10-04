import { combineReducers } from 'redux';
import countReducer from './countReducer';
import layoutReducer from './layoutReducer';

export default combineReducers({
    count: countReducer,
    layout: layoutReducer
});