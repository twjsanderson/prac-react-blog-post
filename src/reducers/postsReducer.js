export default (state =[], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};

// reducers rule
// reducers cant return undefined
// first time reducer called is undefined so we change that value to null
// example: const whateverReducer = (selectedThing = null, action) => { ...}
// reducers should be pure, they should not reach outside themselves to API's
// reducers must not mutate state 
// strings and numbers are immutable 
// ex. const name = 'Sam';
// name[0] === "S"
// name[0] = 'X'
// console.log(name) === 'Sam' because the string is immutable unlike an array or object
// we can't mutate state because redux only cares about state's location in memory not its contents
// BUT if we create a new object or array, redux will realize that the previous state compared to the new state don't share the same point in memory and must be different
// THEN redux will return the new state
// THEREFORE we don't want to simply modify or mutate state but return a new state all together (ie. 2 points in memory)


// Javascript methdods for altering objects, arrays, strings

//                                              good for redux                                                    bad for redux

// removing element from array           state.filter(element => element !== 'hi')                           state.pop()

// add element to array                  [...state, 'hi']                                                    state.push('hi')

// replace element in array              state.map(element => element === 'hi' ? 'bye' : element)            state[0]= 'hi'

// update property in object             {...state, name: 'Sam'}                                             state.name = 'Sam'

// add property to object                {...state, age: 30}                                                 state.age = 30

// remove property from object           {...state, agae: undefined} OR _.omit(state.'age') *lodash          delete state.name


