import React from "react";
import { useState, useEffect } from "react";

function ClockComponent() {
  const [nowTime, setNowTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const updateTime = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      setNowTime(now);
    }, 1000);

    return () => {
      clearInterval(updateTime);
    };
  }, []);

  return (
    <h1
      style={{
        position: "fixed",
        top: "0px",
        right: "64px",
        float: "right",
        background: "lightblue",
        color: "blue",
        padding: "0 1em"
      }}
    >
      {nowTime}
    </h1>
  );
}

export default ClockComponent;
