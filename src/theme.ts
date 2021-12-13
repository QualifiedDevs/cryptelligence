import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#B9FFFF",
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
    learnButton: {
      main: "#F59C06",
      contrastText: "#ffffff"
    },
    strokePrimary: {
      main: "#F59C06",
    },
    strokeSecondary: {
      main: "#000000",
    },
    background: {
      default: "#192F30",
    },
  },
  typography: {
    fontFamily: "gumballregular"
  },

});

declare module '@mui/material/styles' {
  interface Palette {
    strokePrimary: Palette['primary'];
    strokeSecondary?: Palette['secondary'];
  }
  interface PaletteOptions {
    strokePrimary?: PaletteOptions['primary'];
    strokeSecondary?: PaletteOptions['secondary'];
    learnButton?: PaletteOptions['primary'];
  }
}

export default theme;
