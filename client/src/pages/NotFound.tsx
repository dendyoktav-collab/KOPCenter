import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import {
  Link,
} from "react-router-dom";

export default function NotFound() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box textAlign="center">
        <Typography
          variant="h1"
          fontWeight={700}
        >
          404
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
        >
          Halaman tidak ditemukan
        </Typography>

        <Button
          component={Link}
          to="/dashboard"
          variant="contained"
        >
          Dashboard
        </Button>
      </Box>
    </Box>
  );
}