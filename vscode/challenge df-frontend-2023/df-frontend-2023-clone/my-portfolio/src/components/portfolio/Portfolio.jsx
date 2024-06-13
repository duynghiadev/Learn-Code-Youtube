/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

export const Portfolio = () => {
  const [items] = useState(Menu);

  return (
    <div className="section work container section" id="work">
      <h2 className="section__title">
        Recent Works
      </h2>

      <div className="work__container grid">
        {items.map((element) => {
          const { id, image, title, category, stack, demo } = element;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <h4 className="work__stack">{stack}</h4>
              <a href={demo} className="work__button" target="_blank">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}

      </div>
    </div>
  );
};

export default Portfolio;
