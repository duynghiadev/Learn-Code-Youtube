import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../../users/usersSlice";
import { addNewPost, addPost } from "../postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const dispatch = useDispatch();

  const allUsers = useSelector(selectAllUsers);

  const userOptions = allUsers.map((u) => (
    <option value={u.id} key={u.id}>
      {u.name}
    </option>
  ));

  const submitHandler = async (e) => {
    e.preventDefault();
    // dispatch(addAPost({ id: nanoid(), title, content }));
    try {
      setAddRequestStatus("pending");
      await dispatch(addNewPost({ title, body: content, userId })).unwrap();

      setTitle("");
      setContent("");
      setUserId("");
    } catch (error) {
      console.log("Something broke" + error);
    } finally {
      setAddRequestStatus("idle");
    }
  };

  return (
    <div>
      <h3 className="text-4xl text-white font-bold mb-3">Add a new Post</h3>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        {/* title */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-xl text-white">
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
        <div className="flex flex-col">
          <label htmlFor="content" className="text-xl text-white">
            Author:
          </label>
          <select
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="p-2"
          >
            <option value={""}>Anonymous</option>
            {userOptions}
          </select>
        </div>

        {/* content */}
        <div className="flex flex-col">
          <label htmlFor="content" className="text-xl text-white">
            Content:
          </label>
          <input
            required={true}
            id="content"
            className="p-2"
            value={content}
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

export default AddPostForm;
