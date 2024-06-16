import { AuthActionType } from "./type";

const { TOGGLE_AUTH } = AuthActionType;

export interface AuthState {
  isAuthenticated: boolean;
  username: string;
}

type AuthAction = {
  type: AuthActionType;
  payload: string;
};

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case TOGGLE_AUTH:
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
        username: action.payload,
      };

    default:
      return state;
  }
};
