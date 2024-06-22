import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Expenses from "./pages/Expenses.tsx";
import Invoices from "./pages/Invoices.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="invoices" element={<Invoices />} />
          <Route path="expenses" element={<Expenses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
