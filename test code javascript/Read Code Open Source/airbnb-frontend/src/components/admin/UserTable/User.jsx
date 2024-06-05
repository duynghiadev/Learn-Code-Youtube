import React from "react";
import DeleteUserButton from "../Button/Delete/User/DeleteUserButton";
import UpdateUserButton from "../Button/Update/User/UpdateUserButton";

const User = ({ user, index, renderUserPage }) => {
  let DOB = user.birthday;
  let showBirthday = "";
  if (DOB.length < 9) {
    showBirthday = "Invalid Date";
  } else {
    if (DOB !== "Invalid Date") {
      showBirthday = DOB.slice(0, 10);
    } else {
      showBirthday = DOB;
    }
  }

  const status = [
    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
      Approved
    </span>,
    <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
      Denied
    </span>,
    <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700">
      Expired
    </span>,
    <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
      Pending
    </span>,
  ];

  return (
    <tr className="text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600">
      <td className="px-4 py-3 text-sm">{user.id}</td>

      <td className="px-4 py-3">
        <div className="flex items-center text-sm">
          {/* <!-- Avatar with inset shadow --> */}
          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
            <img
              className="object-cover w-full h-full rounded-full"
              src={user.avatar}
              alt="avatar"
              loading="lazy"
            />
            <div
              className="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            ></div>
          </div>
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {user.role}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-sm">$ 863.45</td>
      <td className="px-4 py-3 text-xs">
        {status[Math.floor(Math.random() * 4)]}
      </td>
      <td className="px-4 py-3 text-sm">{showBirthday}</td>
      <td className="px-4 py-3">
        <div className="flex items-center space-x-4 text-sm">
          <UpdateUserButton userID={user.id} renderUserPage={renderUserPage} />
          <DeleteUserButton user={user} renderUserPage={renderUserPage} />
        </div>
      </td>
    </tr>
  );
};

export default User;
