import React from "react";
import "./LoadingPage.css";

const LoadingPage = ({ title }) => {
  const introTl = gsap.timeline();

  function init() {
    introTl.to(".loader__text span", {
      opacity: 1,
      visibility: "visible",
      duration: 0.5,
    });

    introTl.to(
      ".loader__text span",
      {
        yPercent: 150,
        stagger: 0.125,
        duration: 0.325,
        ease: "Power3.inOut",
        opacity: 0,
        visibility: "visible",
      },
      "+=.9"
    );
    introTl.to(
      ".loader__text span",
      {
        stagger: 0.0001,
        duration: 0.01,
        ease: "Power3.inOut",
        opacity: 0,
        visibility: "hidden",
      },
      "+=.1"
    );
    introTl.to(
      ".loader__slice",
      { yPercent: 100, stagger: 0.125, duration: 0.6, ease: "Power3.inOut" },
      "<.125"
    );

    introTl.to(
      ".hero__title span",
      {
        yPercent: 0,
        duration: 1,
        ease: "Power3.inOut",
      },
      "<2"
    );

    introTl.to(
      ".loader__slice",
      { yPercent: -100, stagger: 0.25, duration: 1, ease: "Power3.inOut" },
      "<.125"
    );

    introTl.to(
      ".hero__title span",
      {
        yPercent: 0,
        duration: 0.2,
        ease: "Power3.inOut",
        opacity: 0,
      },
      "<.125"
    );
  }

  setTimeout(() => {
    document.querySelector(".admin-sidebar").classList.remove("fixed");
    document.querySelector("#loading-admin-page").classList.add("hidden");
  }, 6000);

  window.addEventListener("load", function () {
    init();
  });
  return (
    <div
      className="w-[100vw] h-[100vh] bg-red-400 fixed z-30"
      id="loading-admin-page"
    >
      <div>
        <section className="loader">
          <span className="loader__text">
            <span className="text-primary">Airbnb,</span>
          </span>
          <span className="loader__text">
            <span>Trang {title}</span>
          </span>
          <span className="loader__text">
            <span>&amp; Quản trị.</span>
          </span>
          <div className="loader__slice" />
          <div className="loader__slice" />
          <div className="loader__slice" />
        </section>
        <section className="hero">
          <h1 className="hero__title">
            <span>Xin Chào 👋</span>
          </h1>
        </section>
      </div>
    </div>
  );
};

export default LoadingPage;
