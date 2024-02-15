import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((u) => u.id === Number(userId));

  return (
    <p className="text-sm text-gray-300">
      By {author ? author.name : "Anonymous"}
    </p>
  );
};

export default PostAuthor;
