import React, { useState } from "react";
import { themeLocalStorage } from "../../../api/localService";
const Theme = () => {
  const [isDark, setIsDark] = useState(themeLocalStorage.get());
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.querySelector("html").classList.add("dark");
      // set theme cho lần đăng nhập tiếp theo
      themeLocalStorage.set(true);
      return null;
    }
    document.querySelector("html").classList.remove("dark");
    // set theme cho lần đăng nhập tiếp theo
    themeLocalStorage.set(false);
  };
  return (
    <li className="flex">
      <button
        className="rounded-md focus:outline-none focus:shadow-outline-purple"
        onClick={toggleTheme}
      >
        {!isDark && (
          <div x-if="!dark">
            <svg
              className="w-5 h-5 fill-primary"
              aria-hidden="true"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          </div>
        )}
        {isDark && (
          <div x-if="dark">
            <svg
              className="w-5 h-5 fill-primary"
              aria-hidden="true"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        )}
      </button>
    </li>
  );
};

export default Theme;
