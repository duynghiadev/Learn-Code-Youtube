import { combineReducers } from "redux";
import { QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR } from "./actions";

const initialState = {
  quote: null,
  loading: false,
  error: "",
};

const quoteReducer = (state = initialState, { type, payload }) => {
  if (type === QUOTE_FETCHING) {
    return { ...initialState, loading: true };
  } else if (type === QUOTE_FETCHED) {
    return {
      ...state,
      loading: false,
      quote: payload,
    };
  } else if (type === QUOTE_ERROR) {
    return {
      ...state,
      loading: false,
      error: payload,
    };
  }
  return state;
};

export default combineReducers({
  quote: quoteReducer,
});
//
// const global = {
//   quote: {
//     quote: null,
//     loading: false,
//     error: "",
//   }
// }
