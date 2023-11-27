/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./home.css";
import Avatar1 from "../../assets/Avatar1.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import CV from "../../assets/CV.pdf";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Avatar1} alt="" className="home__img" />
        <h1 className="home__name">Minh Nghia</h1>
        <span className="home__education">I'm a Web Developer who is eager to learn, coding as a hobby.</span>
        <HeaderSocials />
        <a href={CV} className="btn" target="_blank">My Resume</a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
