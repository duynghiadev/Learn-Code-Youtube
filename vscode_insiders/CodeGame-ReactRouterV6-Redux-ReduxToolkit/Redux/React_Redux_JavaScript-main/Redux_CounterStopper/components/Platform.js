import React, { Fragment } from "react";
import Rocket from "./Rocket";
import Counter from "./Counter";
import {LaunchButton, StopButton, AddButton, ValueList} from "./LaunchButton";

const Platform = ({ launched, counter, deploy, stopTimer, addValue, list }) =>(
  <Fragment>
    {/*<Rocket isLaunched={ launched }/>*/}
    <Counter seconds={ counter }/>
    <LaunchButton deploy={ deploy } />
    <StopButton stopTimer={stopTimer}/>
    <AddButton addValue={addValue}/>
    <ValueList list={list}/>
  </Fragment>
);

export default Platform;
