import { useState } from "react";

function Color() {
  const [greeting, setGreeting] = useState({
    title: "Hello world",
    color: "aqua",
  });

  const onChange = () =>
    setGreeting((prevGreeting) => {
      return { ...prevGreeting, ...{ color: "crimson" } };
    });

  const { title, color } = greeting;

  return (
    <div>
      <h1 style={{ color }}>Say: {title}</h1>
      <button onClick={onChange}>Change</button>
    </div>
  );
}

export default Color;
