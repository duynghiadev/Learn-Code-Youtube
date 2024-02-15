import React from "react";
import CounterInput from "./CounterInput";
import CounterOutput from "./CounterOutput";
import "./../styles/app.css";

const App = () => {
  return (
    <div className="main-container">
      <div className="counter-container">
        <CounterOutput />
        <br />
        <CounterInput />
      </div>
    </div>
  );
};

export default App;
