import React from "react";
import withTimer, { useTimer } from "./withTimer";

// Zamień ciało funkcji tak aby renderowała Stopper wg. treści zadania
const Stopper = ({ stop, start, time }) => {
  return (
    <div>
      {time}
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};

const Stopper2 = () => {
  const { stop, start, time } = useTimer();
  return (
    <div>
      {time}
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};

const StopperWithTimer = withTimer(Stopper);

export { Stopper, StopperWithTimer, Stopper2 };
