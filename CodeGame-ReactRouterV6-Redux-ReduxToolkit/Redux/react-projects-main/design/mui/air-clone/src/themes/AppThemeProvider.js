import { createTheme, ThemeProvider } from "@mui/material";
import { grey, pink } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontSize: 15,
    },
  },
  palette: {
    primary: {
      main: grey[700],
    },
    secondary: {
      main: pink[500],
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        sx: {
          px: 1,
        },
        variant: "subtitle1",
        textTransform: "capitalize",
      },
    },
    MuiStack: {
      defaultProps: {
        spacing: 2,
        direction: "row",
        sx: {
          px: 2,
          py: 1,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiLink: {
      defaultProps: {
        sx: {
          color: (theme) => theme.palette.primary.main,
          textDecoration: "none",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        size: "small",
        variant: "text",
        disableRipple: true,
        sx: {
          p: 0,
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

const AppThemeProvider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default AppThemeProvider;
