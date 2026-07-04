import type { Components } from "@mui/material/styles";

const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: "#F5F7FB",
      },
      "*::-webkit-scrollbar": {
        width: 8,
        height: 8,
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "#CBD5E1",
        borderRadius: 999,
      },
      "*::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
      },
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 14,
        height: 42,
        textTransform: "none",
        fontWeight: 600,
      },
      contained: {
        boxShadow: "none",
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 20,
        border: "1px solid #E7EDF5",
        boxShadow: "0 4px 12px rgba(15,23,42,.05)",
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 16,
      },
    },
  },

  MuiDrawer: {
    styleOverrides: {
      paper: {
        borderRight: "1px solid #E7EDF5",
        boxShadow: "none",
      },
    },
  },

  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: "#FFFFFF",
        color: "#1E293B",
        boxShadow: "0 1px 2px rgba(15,23,42,.05)",
        borderBottom: "1px solid #E7EDF5",
      },
    },
  },

  MuiListItemButton: {
    styleOverrides: {
      root: {
        minHeight: 46,
        borderRadius: 12,
        marginBottom: 4,
        transition: "all .2s ease",

        "&.Mui-selected": {
          backgroundColor: "#E8F0FE",
        },

        "&.Mui-selected:hover": {
          backgroundColor: "#DCEBFF",
        },
      },
    },
  },

  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        fontWeight: 600,
      },
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: "#E7EDF5",
      },
    },
  },

  MuiAvatar: {
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
      variant: "outlined",
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 14,
        backgroundColor: "#FFFFFF",

        "& fieldset": {
          borderColor: "#D8E2EF",
        },

        "&:hover fieldset": {
          borderColor: "#2563EB",
        },

        "&.Mui-focused fieldset": {
          borderWidth: 2,
          borderColor: "#2563EB",
        },
      },
    },
  },

  MuiTooltip: {
    defaultProps: {
      arrow: true,
    },
  },
};

export default components;