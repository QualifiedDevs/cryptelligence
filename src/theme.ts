import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#ff0000",
    },
    text: {
      primary: "#ffffff",
    },
    background: {
      default: "rgb(6, 3, 9)",
    },
  },
  typography: {
    fontFamily: "Montserrat, presicav, relaxia"
  },

});

declare module '@mui/material/styles' {
  interface Palette {

  }
  interface PaletteOptions {

  }
}

export default theme;
