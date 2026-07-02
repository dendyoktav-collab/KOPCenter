import { useEffect, useState } from "react";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import {
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";

import { Link, useLocation } from "react-router-dom";

import menu from "../config/menu";
import type { MenuItem } from "../config/menu";
import {
  DRAWER_WIDTH,
  DRAWER_COLLAPSE_WIDTH,
} from "../config/constants";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

import {
  toggleSidebar,
} from "../store/uiSlice";

export default function Sidebar() {
  const dispatch = useAppDispatch();

  const location = useLocation();

  const sidebarOpen = useAppSelector(
    (state) => state.ui.sidebarOpen
  );

  const drawerWidth = sidebarOpen
    ? DRAWER_WIDTH
    : DRAWER_COLLAPSE_WIDTH;

  const [expanded, setExpanded] =
    useState<Record<string, boolean>>({});

  useEffect(() => {
    const state: Record<string, boolean> = {};

    menu.forEach((item) => {
      if (!item.children) return;

      const active = item.children.some(
        (child) => child.path === location.pathname
      );

      if (active) {
        state[item.id] = true;
      }
    });

    setExpanded(state);
  }, [location.pathname]);

  const toggle = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderMenu = (
    items: MenuItem[],
    level = 0
  ) => {
    return items.map((item) => {
      const Icon = item.icon;

      if (item.children) {
        const open = expanded[item.id];

        return (
          <Box key={item.id}>
            <ListItemButton
              onClick={() => toggle(item.id)}
              sx={{
                minHeight: 48,
                borderRadius: 2,
                mx: 1,
                mb: .5,
                pl: sidebarOpen
                  ? 2 + level * 2
                  : 1.5,
                justifyContent: sidebarOpen
                  ? "initial"
                  : "center",
              }}
            >
              {Icon && (
                <ListItemIcon
                  sx={{
                    minWidth: sidebarOpen
                      ? 40
                      : 0,
                    justifyContent: "center",
                  }}
                >
                  <Icon />
                </ListItemIcon>
              )}

              {sidebarOpen && (
                <ListItemText
                  primary={item.title}
                />
              )}

              {sidebarOpen &&
                (open ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                ))}
            </ListItemButton>

            <Collapse
              in={open}
              timeout="auto"
              unmountOnExit
            >
              <List disablePadding>
                {renderMenu(
                  item.children,
                  level + 1
                )}
              </List>
            </Collapse>
          </Box>
        );
      }

      return (
        <ListItemButton
          key={item.id}
          component={Link}
          to={item.path || "#"}
          selected={
            location.pathname === item.path
          }
          sx={{
            minHeight: 48,
            borderRadius: 2,
            mx: 1,
            mb: .5,
            pl: sidebarOpen
              ? 2 + level * 2
              : 1.5,
            justifyContent: sidebarOpen
              ? "initial"
              : "center",

            "&.Mui-selected": {
              backgroundColor: "primary.main",
              color: "#fff",

              "& .MuiListItemIcon-root": {
                color: "#fff",
              },

              "&:hover": {
                backgroundColor:
                  "primary.dark",
              },
            },
          }}
        >
          {Icon && (
            <ListItemIcon
              sx={{
                minWidth: sidebarOpen
                  ? 40
                  : 0,
                justifyContent: "center",
              }}
            >
              <Icon />
            </ListItemIcon>
          )}

          {sidebarOpen && (
            <ListItemText
              primary={item.title}
            />
          )}
        </ListItemButton>
      );
    });
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          transition: ".25s",
          overflowX: "hidden",
          boxSizing: "border-box",
          borderRight: "1px solid",
          borderColor: "divider",
        },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: sidebarOpen
            ? "space-between"
            : "center",
          alignItems: "center",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        {sidebarOpen && (
          <Typography
            variant="h6"
            fontWeight={700}
            color="primary"
          >
            KOPCenter
          </Typography>
        )}

        <ListItemButton
          onClick={() =>
            dispatch(toggleSidebar())
          }
          sx={{
            width: 42,
            height: 42,
            borderRadius: 2,
            justifyContent: "center",
          }}
        >
          ☰
        </ListItemButton>
      </Toolbar>

      <Divider />

      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
        }}
      >
        <List>{renderMenu(menu)}</List>
      </Box>

      <Box
  sx={{
    flex: 1,
    overflowY: "auto",
  }}
>
  <List>{renderMenu(menu)}</List>
</Box>

      <Divider />

      <Box
        sx={{
          px: sidebarOpen ? 2 : 1,
          py: 2,
          transition: "all .25s",
        }}
      >
        {sidebarOpen ? (
          <>
            <Typography
              variant="body2"
              fontWeight={700}
            >
              KOPCenter ERP
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
            >
              Enterprise Management System
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
            >
              Version 1.0.0
            </Typography>
          </>
        ) : (
          <Typography
            variant="caption"
            textAlign="center"
            display="block"
          >
            ERP
          </Typography>
        )}
      </Box>
    </Drawer>
  );
}