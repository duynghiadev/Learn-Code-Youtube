import React from "react";
import "./mainTitle.css";

const MainTitle = ({ children }) => {
  return (
    <div className="mainTitle">
      <h2>
        <span>{children}</span>
      </h2>
    </div>
  );
};

export default MainTitle;
