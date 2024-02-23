import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import PostReactions from "./PostReactions";
import { postSelctorById } from "./postsSlice";

const PostExcert = ({ postId }) => {
  const post = useSelector((state) => postSelctorById(state, postId));

  return (
    <div className="border border-white rounded-xl px-4 py-6 mb-3" key={postId}>
      <h4 className="text-3xl font-bold text-white mb-2">{post.title}</h4>
      <p className="text-2xl text-white mb-2 italic">
        {post.content.substring(0, 75) + "..."}
      </p>
      <div className="flex flex-row gap-3 items-center ">
        <Link
          to={`/post/${post.id}`}
          className="text-xl text-blue-500 underline"
        >
          View Post
        </Link>
        <PostAuthor userId={post.userId} />
      </div>
      <PostReactions post={post} />
    </div>
  );
};

export default PostExcert;
