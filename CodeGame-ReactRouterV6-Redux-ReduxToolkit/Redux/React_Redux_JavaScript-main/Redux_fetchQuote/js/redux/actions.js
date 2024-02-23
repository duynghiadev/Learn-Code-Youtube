import api from "../api";

const QUOTE_FETCHING = "QUOTE_FETCHING";
const QUOTE_FETCHED = "QUOTE_FETCHED";
const QUOTE_ERROR = "QUOTE_ERROR";

const startFetching = () => ({
  type: QUOTE_FETCHING,
});

const quoteFetched = (quote) => ({
  type: QUOTE_FETCHED,
  payload: quote,
});

const quoteError = (error) => ({
  type: QUOTE_ERROR,
  payload: error,
});
const fetchQuote = () => (dispatch) => {
  dispatch(startFetching());

  api
    .fetchQuote()
    .then((response) => {
      dispatch(quoteFetched(response));
    })
    .catch((error) => {
      dispatch(quoteError(error));
    });
};

export {
  startFetching,
  quoteFetched,
  quoteError,
  fetchQuote,
  QUOTE_FETCHING,
  QUOTE_FETCHED,
  QUOTE_ERROR,
};
