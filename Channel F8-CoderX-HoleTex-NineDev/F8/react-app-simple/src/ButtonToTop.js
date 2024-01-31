import React from "react";
import { useState, useEffect } from "react";

function ButtonToTop() {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setDisplay(window.scrollY >= 200);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setDisplay(window.scrollY >= 200);
      });
    };
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    display && (
      <button
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px"
        }}
        onClick={handleClick}
      >
        To top
      </button>
    )
  );
}

export default ButtonToTop;
