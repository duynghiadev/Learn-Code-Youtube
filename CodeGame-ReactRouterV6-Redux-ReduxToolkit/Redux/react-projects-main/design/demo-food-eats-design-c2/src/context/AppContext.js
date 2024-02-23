import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <AppContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
      {props.children}
    </AppContext.Provider>
  );
};
