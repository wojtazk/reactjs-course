import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatchAction = useDispatch();
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};
  //
  const incrementHandler = () => {
    dispatchAction({ type: 'increment' });
  };
  //
  const decrementHandler = () => {
    dispatchAction({ type: 'decrement' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
