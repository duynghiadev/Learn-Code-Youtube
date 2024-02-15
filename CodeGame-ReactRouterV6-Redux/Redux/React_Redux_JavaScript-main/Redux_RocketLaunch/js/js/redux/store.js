import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger"

import reducer from "./reducer";

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
