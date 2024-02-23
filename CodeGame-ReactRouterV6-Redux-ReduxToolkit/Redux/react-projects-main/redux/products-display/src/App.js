import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllProductsPage from "./views/AllProductsPage";
import ProductsDetailPage from "./views/ProductsDetailPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllProductsPage />} />
        <Route path="/productDetail/:id" element={<ProductsDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
