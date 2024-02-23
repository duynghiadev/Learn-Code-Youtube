import React from "react";
import "./info.css";

const Keywords = ({ keywords }) => {
  return (
    <div className="keywords">
      <h4>Keywords</h4>
      {keywords?.map((e) => {
        return <span key={e.id}>{e.name}</span>;
      })}
    </div>
  );
};

export default Keywords;
