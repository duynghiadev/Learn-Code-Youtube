import React from "react";
import Counter from "../components/Counter";
import { connect} from "react-redux";
import { launch, stopTimer, addValue } from "../redux/actions"
import Platform from "../components/Platform";

const mapStateToProps = (globalState) => {
return {
    counter: globalState.counterState.counter,
    error: globalState.counterState.error,
    launched: globalState.counterState.launched,
    list: globalState.counterState.list,
};
};

const mapDispatchToProps = (dispatch) => {
    return {
        deploy: () => dispatch(stopTimer()),
        stopTimer: () => dispatch(launch()),
        addValue: () => dispatch(addValue()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Platform);
