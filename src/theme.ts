import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#97FFFF",
    },
    secondary: {
      main: "#FFF",
    },
    error: {
      main: "#ff0000",
    },
    text: {
      primary: "#FFF",
      secondary: "#97FFFF",
    },
    background: {
      default: "rgb(6, 3, 9)",
    },
  },
  typography: {
    fontFamily: "presicav, Montserrat, relaxia",
    body1: {
      fontFamily: "Montserrat",
    },
    body2: {},
    h1: {
      textTransform: "uppercase",
      fontWeight: 300,
    },
    h2: {
      textTransform: "uppercase",
      fontSize: "3rem",
      fontWeight: 900,
      color: "#97FFFF",
    },
    h3: {
      textTransform: "uppercase",
      fontWeight: 300,
    },
    h4: {
      textTransform: "uppercase",
      fontWeight: 300,
      fontSize: "1.5rem",
    },
    h5: {
      textTransform: "uppercase",
      fontWeight: 300,
      color: "#97FFFF"
    },
    h6: {
      textTransform: "uppercase",
      fontWeight: 300,
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {}
  interface PaletteOptions {}
}

export default theme;
