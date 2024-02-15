import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/app.css";
import { Provider } from "react-redux";
import store from "./components/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
