import { NavLink } from "react-router-dom";

import {
  Badge,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import type { SidebarMenuItem } from "./types";

interface SidebarItemProps {
  item: SidebarMenuItem;
}

export default function SidebarItem({
  item,
}: SidebarItemProps) {
  return (
    <ListItemButton
      component={NavLink}
      to={item.path ?? "#"}
      sx={{
        mb: 0.5,
        mx: 1.5,
        px: 2,
        py: 1.2,
        borderRadius: 3,

        color: "#334155",

        "&.active": {
          backgroundColor: "#EFF6FF",
          color: "#2563EB",

          "& .MuiListItemIcon-root": {
            color: "#2563EB",
          },

          "& .MuiTypography-root": {
            fontWeight: 700,
          },
        },

        "&:hover": {
          backgroundColor: "#F8FAFC",
        },

        transition: "all .2s ease",
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 40,
          color: "#64748B",
        }}
      >
        {item.icon}
      </ListItemIcon>

      <ListItemText
        primary={item.label}
        primaryTypographyProps={{
          fontSize: 14,
          fontWeight: 500,
        }}
      />

      {item.badge && (
        <Badge
          color="primary"
          badgeContent={item.badge}
        />
      )}
    </ListItemButton>
  );
}