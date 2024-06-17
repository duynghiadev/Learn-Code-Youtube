import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  // useEffect
  useEffect(() => {
    alert(
      isAuthenticated
        ? "Login Successful"
        : "You are logged out. Please login to see todos."
    );
  }, [isAuthenticated]);

  const authContextData = {
    toggleAuth,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
