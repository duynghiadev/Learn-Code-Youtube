import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Book Keeper</h2>
      <nav style={{ borderBottom: "1px solid", paddingBottom: "1rem" }}>
        <Link to="/invoices">Invoices</Link> | {""}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
