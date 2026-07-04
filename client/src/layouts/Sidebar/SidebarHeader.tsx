import { Box, Stack, Typography } from "@mui/material";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";

export default function SidebarHeader() {
  return (
    <Box
      sx={{
        px: 3,
        pt: 3,
        pb: 2.5,
        borderBottom: "1px solid",
        borderColor: "divider",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: 3,
            background:
              "linear-gradient(135deg,#2563EB 0%,#3B82F6 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            boxShadow: "0 8px 20px rgba(37,99,235,.25)",
            flexShrink: 0,
          }}
        >
          <AccountBalanceRoundedIcon fontSize="medium" />
        </Box>

        <Box sx={{ overflow: "hidden" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#0F172A",
            }}
          >
            KOPCenter
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: "#64748B",
              fontWeight: 600,
              letterSpacing: 0.5,
            }}
          >
            Enterprise ERP
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}