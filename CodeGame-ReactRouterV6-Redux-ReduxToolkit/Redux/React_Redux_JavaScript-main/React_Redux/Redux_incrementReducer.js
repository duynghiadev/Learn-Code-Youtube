const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const increment = (val) => {
  return {
    type: INCREMENT,
    payload: val,
  };
};
const decrement = (val) => ({
  type: DECREMENT,
  payload: val,
});

export { INCREMENT, DECREMENT, increment, decrement };
