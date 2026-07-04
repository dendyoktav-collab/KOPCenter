import { Box, List, Typography } from "@mui/material";

import SidebarItem from "./SidebarItem";
import type { SidebarGroup as SidebarGroupType } from "./types";

interface SidebarGroupProps {
  group: SidebarGroupType;
}

export default function SidebarGroup({
  group,
}: SidebarGroupProps) {
  return (
    <Box sx={{ mb: 2 }}>
      {group.title && (
        <Typography
          variant="caption"
          sx={{
            px: 3,
            pb: 1,
            display: "block",
            fontWeight: 700,
            color: "#94A3B8",
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          {group.title}
        </Typography>
      )}

      <List
        disablePadding
        sx={{
          px: 1,
        }}
      >
        {group.items.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
          />
        ))}
      </List>
    </Box>
  );
}