import { createStore } from 'redux';

const inistialState = { counter: 0, showCounter: true };

const counterReducer = (state = inistialState, action) => {
  switch (action.type) {
    default:
      return state;
    case 'increment':
      return { ...state, counter: state.counter + 1 };

    case 'increase':
      return {
        ...state,
        counter: state.counter + action.amount,
      };

    case 'decrement':
      return { ...state, counter: state.counter - 1 };

    case 'toggle':
      return { ...state, showCounter: !state.showCounter };
  }
};

const store = createStore(counterReducer);

export default store;
