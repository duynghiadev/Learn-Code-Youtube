import { connect } from "react-redux";
import List from "../components/List";
import { removeLap } from "../redux/actions";

const mapState = (state) => ({
  list: state.list,
});
const mapDispatch = (dispatch) => ({
  removeLap: (idx) => dispatch(removeLap(idx)),
  // przypisanie dispatcha do kontenrea
});
export default connect(mapState, mapDispatch)(List);
