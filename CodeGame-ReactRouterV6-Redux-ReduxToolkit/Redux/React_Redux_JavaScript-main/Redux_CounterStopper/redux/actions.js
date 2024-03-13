import { counterInitialState as counterState } from './reducer'

const COUNTER_START = 'COUNTER_START'
const COUNTING = 'COUNTING'
const ROCKET_LAUNCH = 'ROCKET_LAUNCH'

const counterStart = () => ({
  type: COUNTER_START
})

const counting = (counter) => ({
  type: COUNTING,
  payload: counter - 1
})

const rocketLaunch = () => ({
  type: ROCKET_LAUNCH
  // payload: launched,
})

const launch =
  () =>
  (dispatch, { counterInitialStore }) => {
    const countdownTimer = counterState.counter
    if (counterState.launched === true) {
      const timer = setInterval(() => {
        console.log(counterState)
        dispatch(counting(counterState.counter))
        counterState.counter = counterState.counter + 1
        console.log(counterState)
        // clearInterval(timer)
      }, 1000)
    }
    counterState.launched = true
  }

const stopTimer =
  () =>
  (dispatch, { counterInitialStore }) => {
    counterState.launched = false
  }

const ADD = 'ADD'
const add = () => ({
  type: ADD,
  payload: counterState.list
})

const addValue =
  () =>
  (dispatch, { counterInitialStore }) => {
    console.log('about to add this value')
    console.log(counterState.counter)
    counterState.list.push(counterState.counter)
    console.log(counterState.list)
  }

// const timer = setInterval(() => {
//     console.log(counterState)
//     dispatch(counting(counterState.counter));
//     counterState.counter = counterState.counter + 1
//     console.log(counterState)
//     // clearInterval(timer)

// }, 1000)
//
// setTimeout(() => {
//         dispatch(rocketLaunch());
//         // clearInterval(launch1().current);
//     }, counterInitialState.counter*1000);
// }

export {
  COUNTER_START,
  COUNTING,
  ROCKET_LAUNCH,
  addValue,
  counterStart,
  counting,
  launch,
  rocketLaunch,
  stopTimer
}
