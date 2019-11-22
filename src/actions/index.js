
import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

// export const fetchPosts = () => {
    // BAD APPROACH
    // we need middleware to make this work (ie. redux-thunk)
    // In reality babel transpiles the code to ES 2015 which is NOT a simple object
    // It contains a while and switch 
    // const response = await jsonPlaceholder.get('/posts');

    // return {
    //     type: 'FETCH_POSTS',
    //     payload: response
    // };

//     // using thunk
//     return async (dispatch, getState) => {
//         const response = await jsonPlaceholder.get('/posts');
        
//         dispatch({type: 'FETCH_POSTS', payload: response.data})
//     };
// };


// alternate syntax
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
        
    dispatch({type: 'FETCH_POSTS', payload: response.data })
};

// redux goes through its render cycle in a fraction of a milisecond (from an action to updating state)
// redux-thunk allows us to return an asyncronous function or a plain object from action creator

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
        
    dispatch({type: 'FETCH_USER', payload: response.data })
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts()); // we have to pass the result of this function into the dispatch
    // console.log(getState().posts);
    const userIds = _.uniq(_.map(getState().posts, 'userId')); // using lodash this gives us an array of just the unique userId's
    // console.log(userIds)
    userIds.forEach(id => dispatch(fetchUser(id))); // fetch each user based on id from userIds

    // // another option to execute logic
    // _.chain(getState().posts)               // lodash the chain function allows us to chain multiple manipulations chain like a promise
    //     .map('userId')                      // the functions automatically take the first argument given above, so anything fed in here are the second, third, fourth... etc.
    //     .uniq()
    //     .forEach(id => dispatch(fetchUser(id)))
    //     .value();                                // must call .value() execute all steps
};


// using lodash to memoize fetchUser this only allows you to fetch a user one time in you app, not great if user on api changes and you have to refetch
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });


// export const fetchUser = id => dispatch => {
//     fetchUser(id, dispatch);
// };

