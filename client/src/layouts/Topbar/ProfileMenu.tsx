import { useState } from "react";

import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";

import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        onClick={handleOpen}
        sx={{
          cursor: "pointer",
          borderRadius: 3,
          px: 1,
          py: 0.5,
          transition: ".2s",

          "&:hover": {
            bgcolor: "#F8FAFC",
          },
        }}
      >
        <Avatar
          sx={{
            width: 42,
            height: 42,
            bgcolor: "#2563EB",
            fontWeight: 700,
          }}
        >
          D
        </Avatar>

        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Typography
            fontWeight={700}
            fontSize={14}
            lineHeight={1.2}
          >
            Administrator
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
          >
            Super Admin
          </Typography>
        </Box>

        <IconButton size="small">
          <KeyboardArrowDownRoundedIcon fontSize="small" />
        </IconButton>
      </Stack>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 240,
            mt: 1,
            borderRadius: 3,
          },
        }}
      >
        <Box
          sx={{
            px: 2,
            py: 2,
          }}
        >
          <Typography
            fontWeight={700}
            fontSize={15}
          >
            Administrator
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            admin@kopcenter.id
          </Typography>
        </Box>

        <Divider />

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonOutlineRoundedIcon fontSize="small" />
          </ListItemIcon>

          Profil Saya
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SettingsRoundedIcon fontSize="small" />
          </ListItemIcon>

          Pengaturan
        </MenuItem>

        <Divider />

        <MenuItem
          onClick={handleClose}
          sx={{
            color: "#DC2626",
          }}
        >
          <ListItemIcon
            sx={{
              color: "#DC2626",
            }}
          >
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>

          Keluar
        </MenuItem>
      </Menu>
    </>
  );
}