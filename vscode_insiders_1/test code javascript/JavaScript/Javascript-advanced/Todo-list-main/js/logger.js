export default function logger(reducer) {
  return (prevState, action, args) => {
    // console.group(action)
    // console.log('prevState: ', prevState);
    // console.log('action argument: ', args);
    const nextState = reducer(prevState, action, args);
    // console.groupEnd(action)
    // console.log('nextState: ', nextState);

    return nextState;
  };
}
