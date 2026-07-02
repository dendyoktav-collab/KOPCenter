import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 2,
        textAlign: "center",
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="body2">
        © 2026 KOPCenter Enterprise ERP
      </Typography>
    </Box>
  );
}