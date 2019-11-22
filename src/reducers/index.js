import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});

// Start projects with emprty combineReducers({});
// OR start with dummy data to get rid of error messages
// replaceMe: () => 'dummy data'
// This allows you to get boilerplate up before you know what reducers you need


// In big projects import up multpile reducers from different files


// Reducers rules 
// 1) must return any value besides undefined
// 2) Produces state only using previous state and the action (pure functions)
// 3)