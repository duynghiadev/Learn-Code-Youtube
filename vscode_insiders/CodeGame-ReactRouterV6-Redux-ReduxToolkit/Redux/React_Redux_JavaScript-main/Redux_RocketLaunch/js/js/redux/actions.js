import {useEffect, useState} from "react";
import {counterInitialState as counterState, counterInitialState} from "./reducer"
import counter from "../components/Counter";

const COUNTER_START = "COUNTER_START"
const COUNTING = "COUNTING"
const ROCKET_LAUNCH = "ROCKET_LAUNCH"

const counterStart = () => ({
    type: COUNTER_START,
});


const counting = (counter) => ({
    type: COUNTING,
    payload: counter - 1,
});

const rocketLaunch = () => ({
    type: ROCKET_LAUNCH,
    // payload: launched,
});

const launch = () => (dispatch, { counterInitialStore } ) => {

    const countdownTimer = counterState.counter


    const timer = setInterval(() => {
        if (counterState.counter === 0) {
            console.log(counterState)

            clearInterval(timer)
            dispatch(rocketLaunch())
        } else if (counterState.counter !== 0) {
            console.log(counterState)
            dispatch(counting(counterState.counter));
            counterState.counter = counterState.counter - 1
            console.log(counterState)
            // clearInterval(timer)

        }

        if (counterState.counter === 0) {
            dispatch(rocketLaunch())
            clearInterval(timer)
        }
    }, 1000)

    setTimeout(() => {
            dispatch(rocketLaunch());
            // clearInterval(launch1().current);
        }, counterInitialState.counter*1000);
}

export {
    rocketLaunch,
    counting,
    counterStart,
    COUNTING,
    ROCKET_LAUNCH,
    COUNTER_START,

launch,
}