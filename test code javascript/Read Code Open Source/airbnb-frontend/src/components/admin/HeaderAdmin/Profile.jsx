import React, { useState } from "react";
import { userAdminLocalStorage } from "../../../api/localService";
import ConfimLogoutModal from "./ConfimLogoutModal";
import ProfileModal from "./ProfileModal";

const Profile = ({ isProfileMenuOpen, toggleProfileMenu }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const closeLogoutModal = () => {
    setShowLogoutModal(false);
  };

  const closeProfileModal = () => {
    setShowProfileModal(false);
  };

  const user = userAdminLocalStorage.get();
  return (
    <>
      <li className="relative">
        <button
          className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
          onClick={toggleProfileMenu}
        >
          <img
            className="object-cover w-8 h-8 rounded-full"
            src={user.avatar}
            alt="avatar"
          />
        </button>
        {isProfileMenuOpen && (
          <div>
            <ul
              x-transition:leave="transition ease-in duration-150"
              x-transition:leave-start="opacity-100"
              x-transition:leave-end="opacity-0"
              // onClick={closeProfileMenu}
              // onKeyDown={closeProfileMenu}
              className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
              aria-label="submenu"
            >
              <p className="text-primary">{user.name}</p>
              <li className="flex">
                <div
                  className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200 cursor-pointer"
                  onClick={() => setShowProfileModal(!showProfileModal)}
                >
                  <svg
                    className="w-4 h-4 mr-3"
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
                  <span>Tài khoản</span>
                </div>
              </li>
              <li className="flex">
                <div className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200 cursor-pointer">
                  <svg
                    className="w-4 h-4 mr-3"
                    aria-hidden="true"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>Cài đặt</span>
                </div>
              </li>
              <li className="flex">
                <div
                  className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200 cursor-pointer"
                  onClick={() => setShowLogoutModal(!showLogoutModal)}
                >
                  <svg
                    className="w-4 h-4 mr-3"
                    aria-hidden="true"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                  </svg>
                  <span>Đăng xuất</span>
                </div>
              </li>
            </ul>
          </div>
        )}
      </li>
      {showLogoutModal && (
        <ConfimLogoutModal closeLogoutModal={closeLogoutModal} />
      )}
      {showProfileModal && (
        <ProfileModal closeProfileModal={closeProfileModal} />
      )}
    </>
  );
};

export default Profile;
