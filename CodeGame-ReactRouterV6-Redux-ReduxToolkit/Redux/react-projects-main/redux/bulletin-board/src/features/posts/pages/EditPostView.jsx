import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectAllUsers } from "../../users/usersSlice";
import { postSelctorById, updatePost } from "../postsSlice";

const EditPostView = () => {
  // in string need to convert to number before passing to selector
  const { postId } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const [requestStatus, setRequestStatus] = useState("idle");

  const selectedPost = useSelector((state) =>
    postSelctorById(state, Number(postId))
  );

  const users = useSelector(selectAllUsers);

  useEffect(() => {
    if (selectedPost) {
      setTitle(selectedPost.title);
      setAuthor(selectedPost.userId);
      setContent(selectedPost.content);
    }
  }, [selectedPost]);

  if (!selectedPost) {
    return <p className="text-3xl text-red-700">Post not found</p>;
  }

  const userOptions = users.map((u) => (
    <option value={u.id} key={u.id}>
      {u.name}
    </option>
  ));

  const submitHandler = async (e) => {
    e.preventDefault();
    if (requestStatus === "idle") {
      try {
        setRequestStatus("pending");
        const updatedPost = {
          id: selectedPost.id,
          userId: author,
          title,
          body: content,
          reactions: { ...selectedPost.reactions },
        };
        await dispatch(updatePost(updatedPost)).unwrap();

        navigate(`/post/${selectedPost.id}`);
      } catch (error) {
        console.log("error happened :- ", error);
      } finally {
        setRequestStatus("idle");
      }
    }
  };

  return (
    <div>
      <h3 className="text-4xl text-white font-bold mb-3">Edit Post</h3>
      <form onSubmit={submitHandler} className="flex flex-col gap-4 mt-8">
        {/* title */}
        <div className="flex flex-col gap-3">
          <label htmlFor="title" className="text-2xl text-white">
            Post Title:
          </label>
          <input
            required={true}
            className="p-2"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* author of post */}
        <div className="flex flex-col gap-3">
          <label htmlFor="author" className="text-2xl text-white">
            Author:
          </label>
          <select
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="p-2"
          >
            {userOptions}
          </select>
        </div>

        {/* content */}
        <div className="flex flex-col gap-3">
          <label htmlFor="content" className="text-2xl text-white">
            Content:
          </label>
          <textarea
            required={true}
            id="content"
            className="p-2"
            value={content}
            rows={5}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="justify-items-stretch bg-white py-1 rounded-lg mt-5"
        >
          Save Post
        </button>
      </form>
    </div>
  );
};

export default EditPostView;
