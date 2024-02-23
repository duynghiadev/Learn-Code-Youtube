import React from "react";
import { BsFillHandThumbsUpFill, BsEmojiLaughingFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { GiFireworkRocket } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import { useDispatch } from "react-redux";
import { updateReaction } from "./postsSlice";

const PostReactions = ({ post }) => {
  const dispatch = useDispatch();

  const reactions = [
    {
      name: "thumbsUp",
      icon: <BsFillHandThumbsUpFill className="text-yellow-400" />,
      color: "yellow",
    },
    {
      name: "wow",
      icon: <BsEmojiLaughingFill className="text-yellow-400" />,
      color: "yellow",
    },
    {
      name: "heart",
      icon: <AiFillHeart className="text-red-700" />,
      color: "red",
    },
    {
      name: "rocket",
      icon: <GiFireworkRocket className="text-red-500" />,
      color: "red",
    },
    {
      name: "coffee",
      icon: <SiBuymeacoffee className="text-white" />,
      color: "white",
    },
  ];

  const updateReactionHandler = (reaction) => {
    dispatch(updateReaction(post.id, reaction.name));
  };

  return (
    <div className="flex flex-row gap-4 mt-4">
      {reactions.map((r) => (
        <button
          className="flex flex-row gap-2 items-center"
          title={r.name}
          key={r.name}
          onClick={() => updateReactionHandler(r)}
        >
          {r.icon} <p className="text-white">{post.reactions[r.name]}</p>
        </button>
      ))}
    </div>
  );
};

export default PostReactions;
