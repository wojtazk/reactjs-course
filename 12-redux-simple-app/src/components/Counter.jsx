import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatchAction = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatchAction({ type: 'increment' });
  };
  //
  const increaseHandler = (amount) => {
    dispatchAction({ type: 'increase', amount });
  };
  //
  const decrementHandler = () => {
    dispatchAction({ type: 'decrement' });
  };
  //
  const toggleCounterHandler = () => {
    dispatchAction({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler.bind(null, 5)}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
