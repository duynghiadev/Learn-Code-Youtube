import React from "react";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Search from "./Search";
import Theme from "./Theme";
import Hamburger from "./Hamburger";
import { useState } from "react";

const HeaderAdmin = ({ handleToggleSideMenu }) => {
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
    if (isNotificationsMenuOpen) {
      setIsNotificationsMenuOpen(false);
    }
  };

  const toggleNotificationsMenu = () => {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
    if (isProfileMenuOpen) {
      setIsProfileMenuOpen(false);
    }
  };
  return (
    <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* <!-- Mobile hamburger --> */}
        <Hamburger handleToggleSideMenu={handleToggleSideMenu} />
        {/* <!-- Search input --> */}
        <Search />

        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <Theme />
          {/* <!-- Notifications menu --> */}
          <Notifications
            isNotificationsMenuOpen={isNotificationsMenuOpen}
            toggleNotificationsMenu={toggleNotificationsMenu}
          />
          {/* <!-- Profile menu --> */}
          <Profile
            isProfileMenuOpen={isProfileMenuOpen}
            toggleProfileMenu={toggleProfileMenu}
          />
        </ul>
      </div>
    </header>
  );
};

export default HeaderAdmin;
