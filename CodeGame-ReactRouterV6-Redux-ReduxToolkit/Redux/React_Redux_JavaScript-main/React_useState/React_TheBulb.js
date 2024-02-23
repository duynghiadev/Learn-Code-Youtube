import React, { useState } from "react";

export default function Bulb() {
  const [isOn, setIsOn] = useState(true);
  return (
    <div
      style={{
        width: 100,
        height: 100,
        background: isOn ? "yellow" : "white",
      }}
    >
      <button onClick={() => setIsOn((prev) => !prev)}>
        {isOn ? "Off" : "On"}
      </button>
    </div>
  );
}
