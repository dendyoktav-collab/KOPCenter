import Typography from "@mui/material/Typography";

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 11) return "Selamat Pagi";
  if (hour < 15) return "Selamat Siang";
  if (hour < 18) return "Selamat Sore";

  return "Selamat Malam";
}

interface GreetingProps {
  name?: string;
}

export default function Greeting({
  name = "Administrator",
}: GreetingProps) {
  return (
    <>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ lineHeight: 1 }}
      >
        {getGreeting()}
      </Typography>

      <Typography
        fontWeight={700}
        fontSize={15}
        sx={{ lineHeight: 1.3 }}
      >
        {name}
      </Typography>
    </>
  );
}