import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "../usersSlice";

const UsersPage = () => {
  const allUsers = useSelector(selectAllUsers);

  return (
    <>
      <h2 className="text-black font-bold text-3xl mb-4">Users</h2>
      <ul>
        {allUsers.map((user) => (
          <Link to={`/user/${user.id}`} key={user.id}>
            <li className="text-white text-xl mb-4">{user.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
