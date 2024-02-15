import React, { useEffect } from "react";

const useEventListener = (type, handler, target = window) => {
  useEffect(() => {
    const isTargetRef = target.hasOwnProperty("current");

    const currentTarget = isTargetRef ? target.current : target;

    if (!currentTarget) return;

    console.log("Event Listener added");

    currentTarget.addEventListener(type, handler);

    return () => {
      if (currentTarget) {
        console.log("cleaning up");
        currentTarget.removeEventListener(type, handler);
      }
    };
  }, [type, target, handler]);
};

export default useEventListener;
