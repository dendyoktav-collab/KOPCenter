import { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  
} from "@mui/material";

import {
  Menu as MenuIcon,
  NotificationsNone,
  AccountCircle,
  DarkModeOutlined,
  LightModeOutlined,
  Fullscreen,
  Logout,
  Settings,
} from "@mui/icons-material";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

import {
  toggleSidebar,
  toggleDarkMode,
} from "../store/uiSlice";

import Breadcrumb from "./Breadcrumb";

export default function Topbar() {
  const dispatch = useAppDispatch();

  
  const darkMode = useAppSelector(
    (state) => state.ui.darkMode
  );

  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpenMenu = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="inherit"
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
        backgroundColor: "#fff",
        color: "text.primary",
      }}
    >
      <Toolbar>

        <IconButton
          onClick={() =>
            dispatch(toggleSidebar())
          }
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            ml: 2,
            flex: 1,
          }}
        >
          <Breadcrumb />
        </Box>

        <Tooltip title="Dark Mode">

          <IconButton
            onClick={() =>
              dispatch(toggleDarkMode())
            }
          >
            {darkMode
              ? <LightModeOutlined />
              : <DarkModeOutlined />}
          </IconButton>

        </Tooltip>

        <Tooltip title="Fullscreen">

          <IconButton>

            <Fullscreen />

          </IconButton>

        </Tooltip>

        <Tooltip title="Notifikasi">

          <IconButton>

            <Badge
              color="error"
              badgeContent={3}
            >

              <NotificationsNone />

            </Badge>

          </IconButton>

        </Tooltip>

        <IconButton
          onClick={handleOpenMenu}
          sx={{
            ml: 1,
          }}
        >
          <Avatar
            sx={{
              width: 36,
              height: 36,
            }}
          >
            A
          </Avatar>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
        >

          <MenuItem
            onClick={handleCloseMenu}
          >
            <AccountCircle
              sx={{ mr: 1 }}
            />

            Profile

          </MenuItem>

          <MenuItem
            onClick={handleCloseMenu}
          >
            <Settings
              sx={{ mr: 1 }}
            />

            Pengaturan

          </MenuItem>

          <MenuItem
            onClick={handleCloseMenu}
          >
            <Logout
              sx={{ mr: 1 }}
            />

            Logout

          </MenuItem>

        </Menu>

      </Toolbar>
    </AppBar>
  );
}