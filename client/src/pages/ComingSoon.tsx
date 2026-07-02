import {
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";

import ConstructionIcon from "@mui/icons-material/Construction";

export default function ComingSoon() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 6,
        textAlign: "center",
        borderRadius: 3,
      }}
    >
      <ConstructionIcon
        color="warning"
        sx={{
          fontSize: 80,
          mb: 2,
        }}
      />

      <Typography
        variant="h4"
        fontWeight={700}
        gutterBottom
      >
        Dalam Tahap Pengembangan
      </Typography>

      <Typography
        color="text.secondary"
      >
        Modul ini sedang disiapkan
        sesuai Blueprint KOPCenter
        Enterprise.
      </Typography>

      <Box mt={4}>
        <Button
          variant="contained"
        >
          Kembali ke Dashboard
        </Button>
      </Box>
    </Paper>
  );
}