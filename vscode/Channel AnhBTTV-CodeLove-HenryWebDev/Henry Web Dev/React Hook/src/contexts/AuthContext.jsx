import { createContext, useEffect, useReducer, useState } from "react";
import { authReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, dispatch] = useReducer(authReducer, false);

  // useEffect
  useEffect(() => {
    alert(
      isAuthenticated
        ? "Login Successful"
        : "You are logged out. Please login to see todos."
    );
  }, [isAuthenticated]);

  const authContextData = {
    dispatch,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
