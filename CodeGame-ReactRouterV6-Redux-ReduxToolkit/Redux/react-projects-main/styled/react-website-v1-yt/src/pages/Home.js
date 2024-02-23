import React from "react";
import { InfoSection } from "../components";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "../data";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Services />
    </>
  );
};

export default Home;
