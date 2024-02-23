import React, { useEffect, useRef } from "react";

const SampleComponent = () => {
  const btnref = useRef(null);

  useEffect(() => {
    const element = btnref.current;

    if (!element) return;

    const handleButtonClick = () => {
      console.log("I am clicked");
    };

    element.addEventListener("click", handleButtonClick);

    return () => {
      console.log("cleaing it up");
      element.removeEventListener("click", handleButtonClick);
    };
  }, []);

  return <button ref={btnref}>click me</button>;
};

export default SampleComponent;
