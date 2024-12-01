import { useState } from "react";

const CounterMixUpdates = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n: number) => n + 1);
          // updated 42 😆
          // setNumber(42);
        }}
      >
        Increase the number
      </button>
    </>
  );
};

export default CounterMixUpdates;
