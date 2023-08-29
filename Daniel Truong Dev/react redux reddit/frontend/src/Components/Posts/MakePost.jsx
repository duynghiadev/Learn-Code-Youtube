import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";
import Input from "../InputFields/Input";
import "./MakePost.css";

const MakePost = (props) => {
  const { setOpen } = props;
  const [title, setTitle] = useState("Add a title");
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("Add some description");
  const [selectedIdx, setSelectIdx] = useState(0);
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const handlePost = () => {
    setOpen(false);
    const newPost = {
      title: title,
      description: desc,
      tag: selectedIdx,
    };
    dispatch(createPost(newPost));
  };

  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>
          Post
        </p>
      </div>
      <Input
        data={title}
        inputType="textarea"
        setData={setTitle}
        label="Title"
        classStyle="makepost-title"
      />
      <Input
        data={desc}
        inputType="textarea"
        setData={setDesc}
        label="Description"
        classStyle="makepost-desc"
      />
      <label>Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, idx) => {
          return (
            <button
              key={idx}
              className={`${
                selectedIdx === idx
                  ? `makepost-tags-selected`
                  : `makepost-tags-${tag}`
              }`}
              onClick={() => setSelectIdx(idx)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default MakePost;
