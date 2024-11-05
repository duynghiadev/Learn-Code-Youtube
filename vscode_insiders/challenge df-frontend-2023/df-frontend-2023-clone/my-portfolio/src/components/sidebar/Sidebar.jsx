import React, { useState } from "react";
import "./sidebar.css";

export const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="icon-user-following"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  <i className="icon-graduation"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__link">
                  <i className="icon-layers"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">
            <p>
              &copy; 2023 Handcrafted by{" "}
              <a href="https://github.com/nghianm2803" target="_blank" rel="noreferrer">
                NghiaNM
              </a>
            </p>
          </span>
        </div>
      </aside>

      <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
