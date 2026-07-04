import { useState } from "react";

import {
  Box,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import SidebarSearch from "./SidebarSearch";

export const SIDEBAR_WIDTH = 288;

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({
  mobileOpen,
  onClose,
}: SidebarProps) {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const [search, setSearch] = useState("");

  const sidebarContent = (
    <Box
      sx={{
        width: SIDEBAR_WIDTH,
        height: "100%",
        display: "flex",
        flexDirection: "column",

        bgcolor: "#FFFFFF",

        borderRight: "1px solid",
        borderColor: "divider",

        overflow: "hidden",
      }}
    >
      <SidebarHeader />

      <SidebarSearch
        value={search}
        onChange={setSearch}
      />

      <SidebarMenu search={search} />

      <SidebarFooter />
    </Box>
  );

  if (isDesktop) {
    return (
      <Box
        sx={{
          width: SIDEBAR_WIDTH,
          flexShrink: 0,
        }}
      >
        {sidebarContent}
      </Box>
    );
  }

  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      PaperProps={{
        sx: {
          width: SIDEBAR_WIDTH,
          borderRight: "1px solid",
          borderColor: "divider",
          boxShadow: "0 16px 40px rgba(15,23,42,.12)",
        },
      }}
    >
      {sidebarContent}
    </Drawer>
  );
}