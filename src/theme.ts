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
    fontFamily: [
      "Arcade Classic",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
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
  }
}

export default theme;
