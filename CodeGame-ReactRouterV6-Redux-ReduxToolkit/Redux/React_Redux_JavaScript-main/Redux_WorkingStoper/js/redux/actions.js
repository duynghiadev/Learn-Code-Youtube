const start = (id) => ({
  type: "START",
  id,
});

const stopCounter = () => ({
  type: "STOP",
});

const increment = () => ({
  type: "INCREMENT",
});

const saveLap = (lap) => ({
  type: "SAVE",
  lap,
});

const removeLap = (idx) => ({
  type: "REMOVE",
  idx,
});

const init = (value) => ({
  type: "INIT",
  value,
});

const startCounter = () => (dispatch) => {
  const id = setInterval(() => {
    dispatch(increment());
  }, 1000);
  dispatch(start(id));
};

export { init, startCounter, stopCounter, saveLap, removeLap };
