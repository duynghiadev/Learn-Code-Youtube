import { useState } from "react";
import "./App.css";
import { store } from "./store";

function App() {
  const [count, setCount] = useState(null);

  store.subscribe(() => setCount(store.getState().value));
  return (
    <div className="App">
      Tìm hiểu luồng chạy của Redux
      <button onClick={() => store.dispatch({ type: "ADD", payload: 1 })}>
        ADD
      </button>
      <b>{count}</b>
      <button onClick={() => store.dispatch({ type: "ADD", payload: -1 })}>
        SUB
      </button>
    </div>
  );
}

export default App;
