import { useState } from "react";

const CounterBatchUpdate = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>Counter Batch Update</h1>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((n: number) => n + 1);
          setNumber((n: number) => n + 1);
          setNumber((n: number) => n + 1);
        }}
      >
        +3
      </button>
    </>
  );
};

export default CounterBatchUpdate;
