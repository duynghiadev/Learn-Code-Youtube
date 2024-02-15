import { createTheme } from "@mui/material";
import React, { createContext, useState } from "react";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const AppContext = React.createContext({
  theme: {},
  changeTheme: () => {},
});

export const AppContextProvider = (props) => {
  const [theme, setTheme] = useState(lightTheme);

  const changeTheme = (isDarkModeOn) => {
    if (isDarkModeOn) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </AppContext.Provider>
  );
};
