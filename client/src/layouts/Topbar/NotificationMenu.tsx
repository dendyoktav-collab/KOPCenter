import { useState } from "react";

import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

import {
  Badge,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Menu,
  Typography,
  Box,
} from "@mui/material";

const notifications = [
  {
    id: 1,
    title: "Anggota baru berhasil didaftarkan",
    time: "2 menit lalu",
    icon: <CheckCircleRoundedIcon />,
    color: "#16A34A",
  },
  {
    id: 2,
    title: "Laporan keuangan siap diunduh",
    time: "15 menit lalu",
    icon: <InfoRoundedIcon />,
    color: "#2563EB",
  },
  {
    id: 3,
    title: "Terdapat pinjaman menunggu persetujuan",
    time: "1 jam lalu",
    icon: <WarningAmberRoundedIcon />,
    color: "#F59E0B",
  },
];

export default function NotificationMenu() {
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
      <IconButton
        onClick={handleOpen}
        size="large"
        sx={{
          borderRadius: 3,
        }}
      >
        <Badge
          badgeContent={notifications.length}
          color="error"
        >
          <NotificationsNoneRoundedIcon />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 360,
            mt: 1,
            borderRadius: 3,
          },
        }}
      >
        <Box
          sx={{
            px: 2,
            py: 1.5,
          }}
        >
          <Typography
            fontWeight={700}
            fontSize={16}
          >
            Notifikasi
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Aktivitas terbaru KOPCenter
          </Typography>
        </Box>

        <Divider />

        <List disablePadding>
          {notifications.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                py: 1.5,
                px: 2,
              }}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor: item.color + "20",
                    color: item.color,
                  }}
                >
                  {item.icon}
                </Avatar>
              </ListItemAvatar>

              <ListItemText
                primary={item.title}
                secondary={item.time}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 600,
                }}
              />
            </ListItem>
          ))}
        </List>

        <Divider />

        <Box
          sx={{
            textAlign: "center",
            py: 1.5,
          }}
        >
          <Typography
            color="primary"
            fontWeight={600}
            sx={{
              cursor: "pointer",
            }}
          >
            Lihat semua notifikasi
          </Typography>
        </Box>
      </Menu>
    </>
  );
}