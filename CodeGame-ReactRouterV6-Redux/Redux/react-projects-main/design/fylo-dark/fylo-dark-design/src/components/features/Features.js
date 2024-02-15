import React from "react";
import "./Features.scss";
import allFeatures from "./all-features-data";

const Features = () => {
  return (
    <section className="features">
      {allFeatures.map((feature) => (
        <div className="feature">
          <div className="feature__logo">
            <img src={feature.logo} alt="desscription" />
          </div>

          <h3 className="feature__title">{feature.title}</h3>
          <p className="feature__desc">{feature.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
