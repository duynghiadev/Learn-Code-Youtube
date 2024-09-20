import React from "react";
import { useLocation } from "react-router-dom";
import UserCreateModal from "../../Button/Create/User/UserCreateModal";
import RoomCreateButton from "../../Button/Create/Room/RoomCreateButton";

const DesktopSidebar = () => {
  const { pathname } = useLocation();
  return (
    <aside className="admin-sidebar fixed z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
      <div className="py-4 text-gray-500 dark:text-gray-400">
        <a href="#">
          <img
            src="/images/Airbnb_Logo_Bélo.svg.png"
            className="pl-6 w-[140px]"
            alt=""
          />
        </a>
        <ul className="mt-6">
          <li className="relative px-6 py-3">
            {pathname === "/admin" && (
              <span
                className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
            )}
            <a
              className={`inline-flex items-center w-full text-sm font-semibold ${
                pathname === "/admin"
                  ? "text-gray-800 dark:text-gray-200"
                  : "dark:text-gray-400"
              }  transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 `}
              href="/admin"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <span className="ml-4">Dashboard</span>
            </a>
          </li>
        </ul>
        <ul>
          <li className="relative px-6 py-3">
            {pathname === "/admin/user" && (
              <span
                className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
            )}
            <a
              className={`inline-flex items-center w-full text-sm ${
                pathname === "/admin/user"
                  ? "text-gray-800 dark:text-gray-200"
                  : "dark:text-gray-400"
              } font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 `}
              href="/admin/user"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span className="ml-4">Người dùng</span>
            </a>
          </li>
          <li className="relative px-6 py-3">
            {pathname === "/admin/room" && (
              <span
                className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
            )}
            <a
              className={`inline-flex items-center w-full ${
                pathname === "/admin/room"
                  ? "text-gray-800 dark:text-gray-200"
                  : "dark:text-gray-400"
              } text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 `}
              href="/admin/room"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
              </svg>
              <span className="ml-4">Hệ thống phòng</span>
            </a>
          </li>

          <li className="relative px-6 py-3">
            {pathname === "/admin/chart" && (
              <span
                className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
            )}
            <a
              className={`inline-flex items-center w-full ${
                pathname === "/admin/chart"
                  ? "text-gray-800 dark:text-gray-200"
                  : "dark:text-gray-400"
              } text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 `}
              href="/admin/chart"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
              </svg>
              <span className="ml-4">Biểu đồ</span>
            </a>
          </li>
          {/* <li className="relative px-6 py-3">
            <a
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="buttons.html"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
              </svg>
              <span className="ml-4">Buttons</span>
            </a>
          </li>
          <li className="relative px-6 py-3">
            <a
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="modals.html"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
              <span className="ml-4">Modals</span>
            </a>
          </li>
          <li className="relative px-6 py-3">
            <a
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="tables.html"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
              </svg>
              <span className="ml-4">Tables</span>
            </a>
          </li>
          <li className="relative px-6 py-3">
            <button
              className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              //   @click="togglePagesMenu"
              aria-haspopup="true"
            >
              <span className="inline-flex items-center">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                </svg>
                <span className="ml-4">Pages</span>
              </span>
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <template x-if="isPagesMenuOpen">
              <ul
                x-transition:enter="transition-all ease-in-out duration-300"
                x-transition:enter-start="opacity-25 max-h-0"
                x-transition:enter-end="opacity-100 max-h-xl"
                x-transition:leave="transition-all ease-in-out duration-300"
                x-transition:leave-start="opacity-100 max-h-xl"
                x-transition:leave-end="opacity-0 max-h-0"
                className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                aria-label="submenu"
              >
                <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <a className="w-full" href="pages/login.html">
                    Login
                  </a>
                </li>
                <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <a className="w-full" href="pages/create-account.html">
                    Create account
                  </a>
                </li>
                <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <a className="w-full" href="pages/forgot-password.html">
                    Forgot password
                  </a>
                </li>
                <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <a className="w-full" href="pages/404.html">
                    404
                  </a>
                </li>
                <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <a className="w-full" href="pages/blank.html">
                    Blank
                  </a>
                </li>
              </ul>
            </template>
          </li> */}
        </ul>
        {pathname === "/admin/user" && <UserCreateModal />}
        {pathname === "/admin/room" && <RoomCreateButton />}
      </div>
    </aside>
  );
};

export default DesktopSidebar;
