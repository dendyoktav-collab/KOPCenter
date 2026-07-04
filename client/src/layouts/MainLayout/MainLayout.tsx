import { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

export default function MainLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        bgcolor: "#F5F7FB",
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileOpen}
        onClose={handleDrawerClose}
      />

      {/* Workspace */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        <Topbar
          onMenuClick={handleDrawerToggle}
        />

        <Box
          component="main"
          sx={{
            flex: 1,

            overflowY: "auto",
            overflowX: "hidden",

            px: {
              xs: 2,
              sm: 3,
              md: 4,
            },

            py: 3,

            bgcolor: "#F5F7FB",

            "&::-webkit-scrollbar": {
              width: 8,
            },

            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#CBD5E1",
              borderRadius: 999,
            },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}