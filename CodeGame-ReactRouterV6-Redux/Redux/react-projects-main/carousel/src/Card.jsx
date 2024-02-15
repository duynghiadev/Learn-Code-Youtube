import React from "react";

const Card = ({ bgColor, text }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <p className="card__content">{text}</p>
    </div>
  );
};

export default Card;
