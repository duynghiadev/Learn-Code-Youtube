import { useState } from "react";

const CounterAndAlert = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>Counter and Alert</h1>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setTimeout(() => {
            alert(number);
          }, 3000);
        }}
      >
        +5
      </button>
    </>
  );
};

export default CounterAndAlert;
