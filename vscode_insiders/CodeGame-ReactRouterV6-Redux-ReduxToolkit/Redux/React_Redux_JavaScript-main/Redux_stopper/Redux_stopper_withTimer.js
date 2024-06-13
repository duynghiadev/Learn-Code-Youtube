import React, { useEffect, useState } from "react";

const withTimer = (Component) => (props) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const id =
      isRunning &&
      setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    return () => {
      console.log(id);
      clearInterval(id);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };
  const stop = () => {
    setIsRunning(false);
  };

  return <Component {...props} stop={stop} start={start} time={time} />;
};

const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const id =
      isRunning &&
      setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    return () => {
      console.log(id);
      clearInterval(id);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };
  const stop = () => {
    setIsRunning(false);
  };

  return {
    time,
    start,
    stop,
  };
};

export { useTimer };
export default withTimer;
