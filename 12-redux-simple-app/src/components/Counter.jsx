import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
  const dispatchAction = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatchAction(counterActions.increment());
  };
  //
  const increaseHandler = (amount) => {
    dispatchAction(counterActions.increase(amount));
  };
  //
  const decrementHandler = () => {
    dispatchAction(counterActions.decrement());
  };
  //
  const toggleCounterHandler = () => {
    dispatchAction(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler.bind(null, 10)}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
