import React from "react";
import { useState, useEffect } from "react";

function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  useEffect(() => {
    window.addEventListener("resize", () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    );

    return () => {
      window.removeEventListener("resize", () =>
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      );
    };
  }, []);

  return <h4>Window size: {windowSize.width + "x" + windowSize.height}</h4>;
}

export default WindowSize;
