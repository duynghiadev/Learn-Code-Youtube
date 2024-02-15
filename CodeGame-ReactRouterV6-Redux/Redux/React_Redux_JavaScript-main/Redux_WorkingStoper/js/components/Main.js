import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Counter from "../containers/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Main = () => (
  <Provider store={store}>
    <BrowserRouter>
      {/* browser - sluzy do routingu */}
      <Routes>
        <Route path="/:initValue?" element={<Counter />} />
        {/* odlicvznaie od initValue */}
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default Main;
