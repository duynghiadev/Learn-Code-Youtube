import React from "react";
import { useDispatch } from "react-redux";
import { incrementAction, decrementAction, resetAction } from "./Action";

const CounterInput = () => {
  // Dispatch action
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(incrementAction())}>+</button>
      <button onClick={() => dispatch(decrementAction())}>-</button>
      <button onClick={() => dispatch(resetAction())}>Reset Counter</button>
    </div>
  );
};

export default CounterInput;
