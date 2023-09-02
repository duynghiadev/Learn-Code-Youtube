import React from "react";
import * as ReactDOM from "react-dom/client";
import "./core/style/index.css";
import App from "./presentation/App";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
