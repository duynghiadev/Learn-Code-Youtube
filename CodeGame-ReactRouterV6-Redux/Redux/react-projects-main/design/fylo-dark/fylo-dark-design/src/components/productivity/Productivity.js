import React from "react";
import "./Productivity.scss";
import prodImage from "../../images/illustration-stay-productive.png";
import { Link } from "react-router-dom";

const Productivity = () => {
  return (
    <section className="prod">
      <div className="prod__image">
        <img src={prodImage} alt="productivity" />
      </div>

      <div className="content">
        <h1 className="content__title">Stay productive, wherever you are</h1>
        <p className="content__desc">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="content__desc">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <Link to="/" className="content__link">
          See how Fylo works
        </Link>
      </div>
    </section>
  );
};

export default Productivity;
