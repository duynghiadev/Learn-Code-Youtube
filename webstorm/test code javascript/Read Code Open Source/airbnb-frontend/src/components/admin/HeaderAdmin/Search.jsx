import React from "react";
import { useLocation } from "react-router-dom";
import { userServ } from "../../../api/api";
import { getAllUsers } from "../../../redux/userSlice";
import { setTotalUsers } from "../../../redux/userSlice";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  let placeholder;
  if (pathname === "/admin/user") {
    placeholder = "Nhập tên người dùng";
  } else {
    placeholder = "Search for projects";
  }

  const handleSearch = (e) => {
    const key = e.target.value;
    userServ
      .searchUser(key)
      .then((response) => {
        console.log(response);
        dispatch(getAllUsers(response.data.content));
        dispatch(setTotalUsers(response.data.content.length));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex h-full justify-center flex-1 lg:mr-32">
      <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
        <div className="absolute inset-y-0 flex items-center pl-2">
          <svg
            className="w-4 h-4 fill-primary"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          className="w-full  h-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-[1px] rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
          type="text"
          placeholder={placeholder}
          aria-label="Search"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Search;
