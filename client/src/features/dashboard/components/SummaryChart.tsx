import {
  Card,
  CardContent,
  Box,
  Typography,
} from "@mui/material";

export default function SummaryChart() {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        height: "100%",
      }}
    >
      <CardContent>

        <Typography
          variant="h6"
          fontWeight={700}
          mb={3}
        >
          Grafik Ringkasan
        </Typography>

        <Box
          sx={{
            height: 300,
            borderRadius: 2,
            bgcolor: "#f5f5f5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            color="text.secondary"
          >
            Grafik akan ditampilkan di sini
          </Typography>
        </Box>

      </CardContent>
    </Card>
  );
}