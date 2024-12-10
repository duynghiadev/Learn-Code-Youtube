import { Fab } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    floatBtn: {
      position: "fixed",
      right: "3rem",
      bottom: "3rem",
    },
  })
);

const ToggleTheme = () => {
  const classes = useStyles();

  // context
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Fab
      color="primary"
      variant="extended"
      className={classes.floatBtn}
      onClick={toggleTheme.bind(
        this,
        theme === "primary" ? "secondary" : "primary"
      )}
    >
      Toggle theme
    </Fab>
  );
};

export default ToggleTheme;
