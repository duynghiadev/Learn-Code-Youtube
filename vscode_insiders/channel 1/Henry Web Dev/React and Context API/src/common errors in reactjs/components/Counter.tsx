import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
    </>
  );
};

export default Counter;
