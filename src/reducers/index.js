import {combineReducers} from 'redux';
import counterReducer from './counter';
import loggedInReducer from './isLoggedIn';

const allReducer = combineReducers({
    counter : counterReducer,
    isLoggedIn: loggedInReducer
})

export default allReducer;