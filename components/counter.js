import classes from "./counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const show=useSelector((state)=>state.counter.showCounter);
  const toggleIncrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const toggleDecrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseBy2 = () => {
    dispatch(counterActions.increase(2));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={toggleIncrementHandler} className={classes.buttons}>
          Increment Counter
        </button>
        <button onClick={increaseBy2} className={classes.buttons}>
          Increase by 2
        </button>
        <button onClick={toggleDecrementHandler} className={classes.buttons}>
          Decrement counter
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle counter</button>
    </main>
  );
};

export default Counter;
