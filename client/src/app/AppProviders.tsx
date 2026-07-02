import type { PropsWithChildren } from "react";

import { Provider } from "react-redux";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { store } from "./store";
import theme from "../theme";

export default function AppProviders({
  children,
}: PropsWithChildren) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
}