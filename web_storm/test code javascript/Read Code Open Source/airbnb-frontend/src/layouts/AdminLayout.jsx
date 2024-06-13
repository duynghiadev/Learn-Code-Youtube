import React, { useState } from "react";
import HeaderAdmin from "../components/admin/HeaderAdmin/HeaderAdmin";
import { Outlet, useLocation } from "react-router-dom";
import DesktopSidebar from "../components/admin/SidebarAdmin/DesktopSidebar/DesktopSidebar";
import MobileSidebar from "../components/admin/SidebarAdmin/MobileSidebar/MobileSidebar";
import { themeLocalStorage } from "../api/localService";
import PrivateRoute from "./PrivateRoute";

const AdminLayout = () => {
  const theme = themeLocalStorage.get();
  if (theme) {
    document.querySelector("html").classList.add("dark");
  } else {
    if (document.querySelector("html").classList.contains("dark")) {
      document.querySelector("html").classList.remove("dark");
    }
  }

  const [toggleSideMenu, setToggleSideMenu] = useState(false);

  const handleToggleSideMenu = () => {
    setToggleSideMenu(!toggleSideMenu);
  };

  const { pathname } = useLocation();
  if (
    pathname.includes("admin/login") ||
    pathname.includes("admin/register") ||
    pathname.includes("admin/forgot-password")
  ) {
    return <Outlet />;
  }

  return (
    <PrivateRoute>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* <!-- Desktop sidebar --> */}
        <DesktopSidebar />

        {/* <!-- Mobile sidebar --> */}
        {/* <!-- Backdrop --> */}
        {toggleSideMenu && (
          <div
            x-show="isSideMenuOpen"
            x-transition:enter="transition ease-in-out duration-150"
            x-transition:enter-start="opacity-0"
            x-transition:enter-end="opacity-100"
            x-transition:leave="transition ease-in-out duration-150"
            x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0"
            className="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
          ></div>
        )}
        <MobileSidebar toggleSideMenu={toggleSideMenu} />

        <div className="flex flex-col flex-1 w-full">
          <HeaderAdmin handleToggleSideMenu={handleToggleSideMenu} />
          <Outlet />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default AdminLayout;
