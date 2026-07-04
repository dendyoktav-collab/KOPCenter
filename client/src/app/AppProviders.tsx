import { createContext, useContext, useMemo, useState } from "react";
import type { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { store } from "../store";

interface ColorModeContextType {
  toggleColorMode: () => void;
  mode: "light" | "dark";
}

const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
  mode: "dark",
});

export const useColorMode = () => useContext(ColorModeContext);

export default function AppProviders({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#6366f1", // Indigo Accent
            light: "rgba(99, 102, 241, 0.15)",
            dark: "#4f46e5",
            contrastText: mode === "dark" ? "#ffffff" : "#4f46e5",
          },
          secondary: {
            main: "#0d9488", // Teal Accent
          },
          background: {
            default: mode === "dark" ? "#05070c" : "#f8fafc",
            paper: mode === "dark" ? "rgba(13, 19, 31, 0.6)" : "#ffffff",
          },
          divider: mode === "dark" ? "#161f30" : "#e2e8f0",
          text: {
            primary: mode === "dark" ? "#ffffff" : "#0f172a",
            secondary: mode === "dark" ? "#94a3b8" : "#475569",
          },
        },
        typography: {
          fontFamily: "'Inter', sans-serif",
          button: {
            textTransform: "none",
          },
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                transition: "background-color 0.3s ease, color 0.3s ease",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <Provider store={store}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Provider>
  );
}