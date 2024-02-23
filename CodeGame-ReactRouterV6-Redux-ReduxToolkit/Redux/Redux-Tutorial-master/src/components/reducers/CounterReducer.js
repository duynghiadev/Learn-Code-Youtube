import { increment, decrement, reset } from "./../Action.js";

const initialState = {
  counter: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    // INCREMENT
    case increment:
      return { ...state, counter: state.counter + 1 };

    // DECREMENT
    case decrement:
      return { ...state, counter: state.counter - 1 };

    // Reset
    case reset:
      return { ...initialState };

    // Default
    default:
      return state;
  }
};

export default CounterReducer;
