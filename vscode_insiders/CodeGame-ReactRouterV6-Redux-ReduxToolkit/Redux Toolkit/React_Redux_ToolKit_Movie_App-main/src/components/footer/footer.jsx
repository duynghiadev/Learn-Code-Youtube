import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="social">
        <li className="facebook">
          <a href="https://www.facebook.com">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li className="twitter">
          <a href="https://twitter.com">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li className="instagram">
          <a href="https://www.instagram.com">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li className="youtube">
          <a href="https://www.youtube.com">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>
      <p className="copyright">All rights reserved for the website © 2023</p>
    </footer>
  );
};

export default Footer;
