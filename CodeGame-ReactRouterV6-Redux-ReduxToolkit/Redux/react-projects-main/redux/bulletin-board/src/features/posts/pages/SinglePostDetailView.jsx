import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import PostAuthor from "../PostAuthor";
import PostReactions from "../PostReactions";
import { deletePost, postSelctorById } from "../postsSlice";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const SinglePostDetail = () => {
  const { postId } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const post = useSelector(postSelctorById(id));

  const post = useSelector((state) => postSelctorById(state, Number(postId)));

  // useEffect(() => {
  //   if (!post) {
  //   }
  // }, []);

  if (!post) {
    return <p className="text-3xl text-red-700">Post not found</p>;
  }

  const deletePostHandler = async () => {
    try {
      await dispatch(deletePost(post.id)).unwrap();
      navigate("/");
    } catch (error) {
      console.log("error happended :- ", error);
    }
  };

  return (
    <div
      className="border border-white rounded-xl px-4 py-6 mb-3"
      key={post.id}
    >
      <h4 className="text-3xl font-bold text-white mb-2">{post.title}</h4>
      <p className="text-2xl text-white mb-2">{post.content}</p>
      <PostAuthor userId={post.userId} />
      <PostReactions post={post} />
      <div className="text-4xl flex flex-row justify-end text-white gap-4 cursor-pointer">
        <Link to={`/post/edit/${postId}`}>
          <AiFillEdit />
        </Link>
        <AiFillDelete className="text-red-700" onClick={deletePostHandler} />
      </div>
    </div>
  );
};

export default SinglePostDetail;
