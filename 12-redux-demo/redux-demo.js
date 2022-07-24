const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + 1 };

    case 'decrement':
      return { counter: state.counter - 1 };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();

  console.log(latestState);
};

store.subscribe(counterSubscriber);
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });

store.dispatch({ type: 'decrement' });
store.dispatch({ type: 'decrement' });
store.dispatch({ type: 'increment' });
