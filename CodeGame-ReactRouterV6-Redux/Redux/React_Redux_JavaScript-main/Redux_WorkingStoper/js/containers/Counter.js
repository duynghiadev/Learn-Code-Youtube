import { connect } from "react-redux";
import Counter from "../components/Counter";
import { init, saveLap, startCounter, stopCounter } from "../redux/actions";

const mapState = (state) => {
  return {
    counter: state.counter,
  };
};
// przypisane propsy do state

const mapDispatch = (dispatch) => ({
  startCounter: () => dispatch(startCounter()),
  stopCounter: () => dispatch(stopCounter()),
  saveLap: (lap) => dispatch(saveLap(lap)),
  init: (value) => dispatch(init(value)),
});
// przypisane dispatche

export default connect(mapState, mapDispatch)(Counter);
