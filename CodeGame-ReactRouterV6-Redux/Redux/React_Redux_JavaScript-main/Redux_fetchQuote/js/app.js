import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";

import Quote from "./containers/Quote";
import Favourites from "./containers/Favourites";

const App = () => (
  <Provider store={store}>
    <Quote />
    {/*<Favourites/>*/}
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
