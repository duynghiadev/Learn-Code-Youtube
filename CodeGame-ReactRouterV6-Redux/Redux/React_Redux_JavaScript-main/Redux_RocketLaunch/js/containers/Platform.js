import React from "react";
import Counter from "../components/Counter";
import { connect} from "react-redux";
import { launch1 } from "../redux/actions"
import Platform from "../components/Platform";

const mapStateToProps = (globalState) => {
return {
    counter: globalState.counterState.counter,
    error: globalState.counterState.error,
    launched: globalState.counterState.launched,
};
};

const mapDispatchToProps = (dispatch) => {
    return {
        deploy: () => dispatch(launch1()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Platform);
