import {
  Card,
  CardContent,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const announcements = [
  {
    title: "Selamat Datang di KOPCenter Enterprise",
    type: "INFO",
    date: "01 Juli 2026",
  },
  {
    title: "Backend Marketplace masih dalam pengembangan",
    type: "UPDATE",
    date: "01 Juli 2026",
  },
  {
    title: "Absensi Online segera tersedia",
    type: "COMING SOON",
    date: "02 Juli 2026",
  },
];

export default function AnnouncementCard() {
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
          mb={2}
        >
          Pengumuman
        </Typography>

        <List>

          {announcements.map((item, index) => (
            <div key={index}>

              <ListItem disableGutters>

                <ListItemText
                  primary={item.title}
                  secondary={item.date}
                />

                <Chip
                  size="small"
                  label={item.type}
                />

              </ListItem>

              {index !== announcements.length - 1 && (
                <Divider />
              )}

            </div>
          ))}

        </List>

      </CardContent>
    </Card>
  );
}