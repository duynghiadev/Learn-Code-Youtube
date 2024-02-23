import React from "react";
import "./Introduction.scss";
import introImg from "../../images/illustration-intro.png";

const Introduction = () => {
  return (
    <div className="intro">
      <div className="container">
        <img src={introImg} alt="hero" className="intro__img" />
        <h1 className="intro__heading">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="intro__desc">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="intro__cta">Get Started</button>
      </div>
    </div>
  );
};

export default Introduction;
