import "./info.css";
import React from "react";

const MovieStory = ({ story }) => {
  return (
    <div className="movieStory">
      <h2>Story</h2>
      <p>{story} </p>
    </div>
  );
};

export default MovieStory;
