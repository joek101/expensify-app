import {createStore} from 'redux';

// Action generator
const incrementCount = ({ incrementBy = 1  } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

// no need for a default because we set it at 101
const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
       case 'INCREMENT':        
       return {
            count: state.count + action.incrementBy
        };

        case 'DECREMENT':         
            return {
                count: state.count - action.decrementBy
            }
        
        case 'SET':
            return {
                count: action.count
            }

        case 'RESET': 
            return {
                count: 0
            }

        default: 
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Incrememt the count
/* store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
}); */

store.dispatch(incrementCount({ incrementBy: 5 }));

//unsubscribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());

/* store.dispatch({
    type: 'RESET'
}); */

// will decrement by the default which is one
store.dispatch(decrementCount());

store.dispatch(decrementCount( { decrementBy: 10 } ));

store.dispatch(setCount({ count: 101 }));

/* store.dispatch({
    type: 'SET',
    count: 101
}); */