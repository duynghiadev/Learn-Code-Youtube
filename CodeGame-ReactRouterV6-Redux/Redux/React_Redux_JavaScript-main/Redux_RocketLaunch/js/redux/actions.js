import {useEffect, useState} from "react";
import {counterInitialState} from "./reducer"

const COUNTER_START = "COUNTER_START"
const COUNTING = "COUNTING"
const ROCKET_LAUNCH = "ROCKET_LAUNCH"

const counterStart = () => ({
    type: COUNTER_START,
});


const counting = () => ({
    type: COUNTING,
});

const rocketLaunch = () => ({
    type: ROCKET_LAUNCH,
    // payload: launched,
});

const launch1 = () => (dispatch) => {
    dispatch(counterStart())
    dispatch(counting());
    console.log(counterInitialState.counter, "launch1")

    setTimeout(() => {
        dispatch(rocketLaunch());
    }, counterInitialState.counter * 1000);
}

export {
    rocketLaunch,
    counting,
    counterStart,
    COUNTING,
    ROCKET_LAUNCH,
    COUNTER_START,

launch1,
}
