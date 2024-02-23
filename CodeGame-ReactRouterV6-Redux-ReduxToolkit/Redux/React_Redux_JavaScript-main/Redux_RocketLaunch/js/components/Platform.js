import React, { Fragment } from "react";
import Rocket from "./Rocket";
import Counter from "./Counter";
import LaunchButton from "./LaunchButton";

const Platform = ({ launched, counter, deploy }) =>(
  <Fragment>
    <Rocket isLaunched={ launched }/>
    <Counter seconds={ counter }/>
    <LaunchButton deploy={ deploy }/>
  </Fragment>
);

export default Platform;
