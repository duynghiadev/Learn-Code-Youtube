export function Counter(state = { value: 0 }, action) {
  switch (action.type) {
    case "ADD": {
      return {
        value: state.value + action.payload,
      };
    }
    case "SUB": {
      return {
        value: state.value - action.payload,
      };
    }
    default:
      return state;
  }
}
