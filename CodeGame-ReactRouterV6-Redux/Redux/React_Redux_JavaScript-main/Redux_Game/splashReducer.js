import { SHOW_SPLASH, HIDE_SPLASH } from './actions';

const initialState = {
  show: false
};

const splashReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPLASH:
      return {
        ...state,
        show: true
      };
    case HIDE_SPLASH:
      return {
        ...state,
        show: false
      };
    default:
      return state;
  }
};

export default splashReducer;
