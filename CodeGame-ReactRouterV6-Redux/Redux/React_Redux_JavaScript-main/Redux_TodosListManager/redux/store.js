import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import logger from "redux-logger"

// const store = createStore(reducer, applyMiddleware(logger, thunk));
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
