import { createStore } from "redux";
import CounterReducer from "./reducers/CounterReducer";

// Define Reducer for store
const store = createStore(CounterReducer);

export default store;
