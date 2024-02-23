import React from "react";

const imgSrc = "https://www.raletta.in/images/rocket.gif";

const Rocket = ({ isLaunched }) =>
  <img
    alt={`Rocket McSpacey the III ${isLaunched ? ": goodbye, the stars need me!" : ': awaiting orders!' }`}
    src={imgSrc}
    className={`rocket ${isLaunched ? 'launched': ''}`}
  />;

export default Rocket;
