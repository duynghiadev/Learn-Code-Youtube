/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a href="https://www.instagram.com/doocharsiu/?hl=en" className="home__social-link" target="_blank">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a href="https://github.com/nghianm2803" className="home__social-link" target="_blank">
        <i class="fa-brands fa-github"></i>
      </a>
      <a href="https://gitlab.com/nghianm2803" className="home__social-link" target="_blank">
        <i class="fa-brands fa-gitlab"></i>
      </a>
      <a href="https://www.linkedin.com/in/nghianm2803/" className="home__social-link" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://t.me/DooCharSiu" className="home__social-link" target="_blank">
        <i class="fa-brands fa-telegram"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
