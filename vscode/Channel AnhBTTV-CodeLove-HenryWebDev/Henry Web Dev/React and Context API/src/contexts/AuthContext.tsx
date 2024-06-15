import { ReactNode, createContext, useReducer } from "react";
import { AuthState, authReducer } from "../reducers/AuthReducers";
import { AuthActionType } from "../reducers/type";

const { TOGGLE_AUTH } = AuthActionType;

interface AuthContextProps {
  children: ReactNode;
}

const authDefault = {
  isAuthenticated: false,
  username: "",
};

interface AuthContextDefault {
  authInfo: AuthState;
  toggleAuth: (username: string) => void;
}

export const AuthContext = createContext<AuthContextDefault>({
  authInfo: authDefault,
  toggleAuth: () => {},
});

const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [authInfo, dispatch] = useReducer(authReducer, authDefault);

  const toggleAuth = (username: string) =>
    dispatch({
      type: TOGGLE_AUTH,
      payload: username,
    });

  const authContextData = {
    authInfo,
    toggleAuth,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
