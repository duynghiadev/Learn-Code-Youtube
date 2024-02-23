import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { fetchUsers } from "./features/users/usersSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchPosts } from "./features/posts/postsSlice";

// we want to load the users and posts when the app loads
store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
