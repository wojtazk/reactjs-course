import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    default:
      return state;
    case 'increment':
      return { counter: state.counter + 1 };
    case 'decrement':
      return { counter: state.counter - 1 };
  }
};

const store = createStore(counterReducer);

export default store;
