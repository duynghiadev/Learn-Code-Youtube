import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-[800px] mx-auto px-2 py-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
