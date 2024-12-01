import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App1 from "./App1";
import store from "./react-redux-core/redux/store";
import { Provider } from "react-redux";
import App2 from "./App2";

ReactDOM.render(
  <Provider store={store}>
    {/* this is component for folder react-redux-core 1️⃣ */}
    {/* <App /> */}

    {/* this is component for folder react-redux-toolkit 2️⃣ */}
    {/* <App1 /> */}

    {/* this is component for folder react-redux-thunk 3️⃣ */}
    <App2 />
  </Provider>,
  document.getElementById("root")
);
