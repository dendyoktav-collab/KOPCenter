import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";

import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Greeting from "./Greeting";
import NotificationMenu from "./NotificationMenu";
import PageTitle from "./PageTitle";
import ProfileMenu from "./ProfileMenu";

interface TopbarProps {
  onMenuClick?: () => void;
}

export default function Topbar({
  onMenuClick,
}: TopbarProps) {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const today = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="inherit"
      sx={{
        bgcolor: "#FFFFFF",
        borderBottom: "1px solid #E7EDF5",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          minHeight: "72px !important",
          px: {
            xs: 2,
            md: 3,
          },
        }}
      >
        {/* Left */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >
          {!isDesktop && (
            <IconButton
              onClick={onMenuClick}
              sx={{
                borderRadius: 3,
              }}
            >
              <MenuRoundedIcon />
            </IconButton>
          )}

          <Box>
            <PageTitle />

            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              sx={{
                mt: 0.3,
              }}
            >
              <CalendarTodayRoundedIcon
                sx={{
                  fontSize: 13,
                  color: "text.secondary",
                }}
              />

              <Typography
                variant="caption"
                color="text.secondary"
              >
                {today}
              </Typography>
            </Stack>
          </Box>
        </Stack>

        {/* Spacer */}
        <Box flex={1} />

        {/* Right */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
              textAlign: "right",
            }}
          >
            <Greeting />
          </Box>

          <NotificationMenu />

          <ProfileMenu />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}