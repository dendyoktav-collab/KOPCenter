import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";

interface Props {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: string;
}

export default function StatCard({
  title,
  value,
  icon,
  color = "#1976d2",
}: Props) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        height: "100%",
      }}
    >
      <CardContent>

        <Box
          display="flex"
          justifyContent="space-between"
        >

          <Box>

            <Typography
              color="text.secondary"
              variant="body2"
            >
              {title}
            </Typography>

            <Typography
              mt={1}
              variant="h4"
              fontWeight={700}
            >
              {value}
            </Typography>

          </Box>

          <Box
            sx={{
              width: 56,
              height: 56,
              bgcolor: color,
              borderRadius: 2,
              display: "grid",
              placeItems: "center",
              color: "#fff",
            }}
          >
            {icon ?? <TrendingUpIcon />}
          </Box>

        </Box>

      </CardContent>
    </Card>
  );
}