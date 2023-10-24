import { useState, useEffect } from "react";

export default function AsyncState() {
  const [num, setNum] = useState(0);

  const onIncrement = () => {
    setNum((prevNum) => prevNum + 1);
    setNum((prevNum) => prevNum + 1);
  };

  useEffect(() => {
    console.log("🕍 updated:", num);
  }, [num]);

  
  console.log("🕍 render:", num);

  return (
    <div className="container">
      <div>Number: {num}</div>
      <button onClick={onIncrement} className="btn">
        Increment
      </button>
    </div>
  );
}
