import {
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
} from "@mui/material";

import {
  People,
  Savings,
  PointOfSale,
  Warehouse,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

const menus = [
  {
    title: "Anggota",
    icon: <People />,
    link: "/anggota",
  },
  {
    title: "Simpanan",
    icon: <Savings />,
    link: "/simpanan",
  },
  {
    title: "Kasir",
    icon: <PointOfSale />,
    link: "/kasir",
  },
  {
    title: "Gudang",
    icon: <Warehouse />,
    link: "/gudang",
  },
];

export default function QuickMenu() {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
      }}
    >
      <CardContent>

        <Typography
          mb={2}
          variant="h6"
          fontWeight={700}
        >
          Quick Menu
        </Typography>

        <Grid container spacing={2}>

          {menus.map((menu) => (

            <Grid
              size={{ xs: 6, md: 3 }}
              key={menu.title}
            >

              <Button
                component={Link}
                to={menu.link}
                variant="outlined"
                startIcon={menu.icon}
                fullWidth
                sx={{
                  height: 60,
                }}
              >
                {menu.title}
              </Button>

            </Grid>

          ))}

        </Grid>

      </CardContent>
    </Card>
  );
}