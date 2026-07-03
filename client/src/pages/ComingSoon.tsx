import {
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";

import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import { useNavigate } from "react-router-dom";

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={0}
      sx={{
        maxWidth: 650,
        mx: "auto",
        mt: 8,
        p: 6,
        borderRadius: 5,
        textAlign: "center",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        sx={{
          width: 110,
          height: 110,
          mx: "auto",
          mb: 3,
          borderRadius: "50%",
          bgcolor: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 15px 40px rgba(25,118,210,.25)",
        }}
      >
        <BuildCircleOutlinedIcon
          sx={{
            color: "#fff",
            fontSize: 56,
          }}
        />
      </Box>

      <Typography
        variant="h4"
        fontWeight={700}
        gutterBottom
      >
        Dalam Tahap Pengembangan
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
      >
        KOPCenter
      </Typography>

      <Box mt={5}>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/dashboard")}
          sx={{
            px: 5,
            borderRadius: 3,
            textTransform: "none",
          }}
        >
          Kembali ke Dashboard
        </Button>
      </Box>
    </Paper>
  );
}