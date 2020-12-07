import {
  createMuiTheme,
  MuiThemeProvider,
  Theme,
} from "@material-ui/core/styles";

import { teal, blueGrey } from "@material-ui/core/colors";

export type WidthType = { width: "xl" | "lg" | "md" | "sm" | "xs" };

export const staticLightPalette = {
  type: "light" as "light",
  primary: {
    main: blueGrey[200],
    light: blueGrey[50],
    dark: blueGrey[800],
    contrastText: blueGrey[100],
  },
  secondary: {
    main: teal[300],
    light: teal[50],
    dark: teal[800],
    contrastText: teal[900],
  },
  common: {
    white: blueGrey[100],
    black: blueGrey[900],
  },
  background: {
    default: blueGrey[800],
    paper: blueGrey[700],
  },
  warning: {
    main: "#d30051",
    light: "#ffafb3",
    dark: "#fff176",
    contrastText: "#fff176",
  },
};

const overrides = (staticPalette: Partial<Theme["palette"]>) => {
  return {
    MuiAppBar: {
      root: {
        height: 60,
        padding: 10,
      },
      colorPrimary: {
        color: staticPalette.common?.white,
        backgroundColor: blueGrey[900],
      },
      colorSecondary: {
        backgroundColor: blueGrey[900],
      },
    },
    MuiTypography: {
      colorTextPrimary: {
        color: blueGrey[100],
      },
      colorTextSecondary: {
        color: teal[50],
      },
    },
  };
};

export const lightTheme = () =>
  createMuiTheme({
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },

    palette: {
      ...staticLightPalette,
    },
    overrides: {
      MuiCssBaseline: {},
      ...overrides(staticLightPalette),
    },
  });

export const ThemeProvider: React.FC = ({ children }) => {
  return <MuiThemeProvider theme={lightTheme()}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
