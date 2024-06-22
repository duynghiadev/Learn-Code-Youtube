import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Expenses from "./pages/Expenses.tsx";
import Invoice from "./pages/Invoice.tsx";
import Invoices from "./pages/Invoices.tsx";
import NewInvoice from "./pages/NewInvoice.tsx";
import NotFound from "./pages/NotFound.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <h2 style={{ padding: "1rem" }}>Please select an Invoice</h2>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
            <Route path="new" element={<NewInvoice />} />
          </Route>
          <Route path="expenses" element={<Expenses />} />
          {/* No other routes match */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
