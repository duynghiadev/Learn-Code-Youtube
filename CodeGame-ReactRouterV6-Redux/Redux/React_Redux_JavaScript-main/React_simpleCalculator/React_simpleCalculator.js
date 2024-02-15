import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

let a = Number(prompt("a"));
let b = Number(prompt("b"));
let znak = prompt("+ - * /");

let calc = (a, b, operation) => {
  if (operation === "+") {
    return <h1>{a + b}</h1>;
  } else if (operation === "-") {
    return <h2>{a - b}</h2>;
  } else if (operation === "*") {
    return <h3>{a * b}</h3>;
  } else if (operation === "/") {
    return <h4>{a / b}</h4>;
  }
};

const result = calc(a, b, znak);
root.render(<div> {result} </div>);
