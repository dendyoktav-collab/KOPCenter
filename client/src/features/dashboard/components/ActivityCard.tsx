import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const activities = [
  "Login Administrator",
  "Transaksi Simpanan",
  "Anggota baru ditambahkan",
  "Kasir berhasil melakukan transaksi",
];

export default function ActivityCard() {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
      }}
    >
      <CardContent>

        <Typography
          variant="h6"
          fontWeight={700}
          mb={2}
        >
          Aktivitas Terbaru
        </Typography>

        <List>

          {activities.map((item) => (

            <ListItem
              key={item}
            >
              <ListItemText
                primary={item}
              />
            </ListItem>

          ))}

        </List>

      </CardContent>
    </Card>
  );
}