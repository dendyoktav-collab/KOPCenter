import type { Components } from "@mui/material/styles";

const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        height: 42,
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 16,
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      fullWidth: true,
      size: "small",
    },
  },
};

export default components;