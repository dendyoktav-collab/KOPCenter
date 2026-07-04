import {
  Avatar,
  Box,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

export default function SidebarFooter() {
  return (
    <Box
      sx={{
        mt: "auto",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Divider />

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{
          p: 2,
        }}
      >
        <Avatar
          sx={{
            bgcolor: "#2563EB",
            width: 42,
            height: 42,
            fontWeight: 700,
          }}
        >
          D
        </Avatar>

        <Box sx={{ overflow: "hidden" }}>
          <Typography
            fontWeight={700}
            fontSize={14}
            noWrap
          >
            Administrator
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
            noWrap
          >
            KOPCenter Enterprise
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}