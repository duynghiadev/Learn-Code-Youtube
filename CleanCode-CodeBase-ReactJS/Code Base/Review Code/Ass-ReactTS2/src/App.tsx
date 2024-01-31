import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import Header from "./components/Header";
import AdminProduct from "./pages/Admin/AdminLaptop";
import AdminPhone from "./pages/Admin/Phone/AdminPhone";
import User from "./pages/Users/User";
import AdminLayout from "./components/Layouts/AdminLayout";
import AdminTableComputer from "./pages/Admin/AdminTableComputer";
import PhoneAdd from "./pages/Admin/Phone/PhoneAdd";
import PhoneEdit from "./pages/Admin/Phone/PhoneEdit";
import SignIn from "./pages/Users/Signin";
import SignUp from "./pages/Users/Signup";
import AdminCategory from "./pages/Admin/Category/AdminCategory";
import CategoryAdd from "./pages/Admin/Category/CategoryAdd";


export const ThemeContext = React.createContext({
  theme: "light",
  setTheme: () => {},
});
function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Route>

        <Route path="/user">
          <Route index element={<User />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="laptop" element={<AdminProduct />} />
          <Route path="phone">
            <Route index element={<AdminPhone />} />
            <Route path="add" element={<PhoneAdd />} />
            <Route path="edit/:id" element={<PhoneEdit />} />
          </Route>
          <Route path="category">
            <Route index element={<AdminCategory />} />
            <Route path="add" element={<CategoryAdd />} />
          </Route>
          <Route path="tabcomputer" element={<AdminTableComputer />} />
        </Route>
      </Routes>
    </Container>
  );
}

const Container = styled.div``;

export default App;
