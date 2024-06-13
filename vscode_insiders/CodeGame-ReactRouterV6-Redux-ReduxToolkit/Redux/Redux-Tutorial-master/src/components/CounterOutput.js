import React, { useSelector } from "react-redux";

const CounterOutput = () => {
  // Use Selector
  const counter = useSelector((state) => state.counter);

  return <div>Counter Value: {counter}</div>;
};

export default CounterOutput;
