import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAdminPage from "./pages/Admin/Product/product";
import AdminLayout from "./components/Layout/admin";
import UserLayout from "./components/Layout/user";
import HomePage from "./pages/Home/home";
import AddProductPage from "./pages/Admin/Product/add";
import DetailPage from "./pages/Home/Detail";
import SigninPage from "./pages/Auth/signin";
import AddCategoriesPage from "./pages/Admin/Categories/Add";
import CategoriesAdminPage from "./pages/Admin/Categories/categories";
import EditProductPage from "./pages/Admin/Product/Product_Edit";
import SignupPage from "./pages/Auth/signup";
import Cart from "./pages/Home/Cart";
import PrivateRouter from "./api/PrivateRouter";
function App(props: any) {
  return (
    <div className="App">
      <Routes>
        {/* Auth */}
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* User layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="detail/:id" element={<DetailPage />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        {/* Admin layout */}
        <Route
          path="admin"
          element={
            <PrivateRouter>
              {" "}
              <AdminLayout />
            </PrivateRouter>
          }
        >
          <Route index element={<ProductAdminPage />} />
          <Route path="product/add" element={<AddProductPage />} />
          <Route path="categories" element={<CategoriesAdminPage />} />
          <Route path="categories/add" element={<AddCategoriesPage />} />
          <Route path="product/edit/:id" element={<EditProductPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
