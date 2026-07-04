import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  Box,
  InputAdornment,
  TextField,
} from "@mui/material";

interface SidebarSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SidebarSearch({
  value,
  onChange,
}: SidebarSearchProps) {
  return (
    <Box
      sx={{
        px: 2,
        py: 2,
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <TextField
        size="small"
        fullWidth
        placeholder="Cari menu..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRoundedIcon
                sx={{
                  fontSize: 20,
                  color: "text.secondary",
                }}
              />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
            backgroundColor: "#F8FAFC",

            "& fieldset": {
              borderColor: "#E2E8F0",
            },

            "&:hover fieldset": {
              borderColor: "#2563EB",
            },

            "&.Mui-focused fieldset": {
              borderWidth: 2,
              borderColor: "#2563EB",
            },
          },
        }}
      />
    </Box>
  );
}