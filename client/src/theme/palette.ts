import type { PaletteOptions } from "@mui/material/styles";

const palette: PaletteOptions = {
  mode: "light",

  primary: {
    main: "#1565C0",
    light: "#42A5F5",
    dark: "#0D47A1",
    contrastText: "#ffffff",
  },

  secondary: {
    main: "#26A69A",
    light: "#4DB6AC",
    dark: "#00796B",
    contrastText: "#ffffff",
  },

  error: {
    main: "#D32F2F",
  },

  warning: {
    main: "#ED6C02",
  },

  info: {
    main: "#0288D1",
  },

  success: {
    main: "#2E7D32",
  },

  background: {
    default: "#F5F7FB",
    paper: "#FFFFFF",
  },

  text: {
    primary: "#212121",
    secondary: "#616161",
  },

  divider: "#E0E0E0",
};

export default palette;