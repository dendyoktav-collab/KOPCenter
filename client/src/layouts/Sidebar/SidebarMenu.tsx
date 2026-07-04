import { Box } from "@mui/material";

import SidebarGroup from "./SidebarGroup";
import menuConfig from "./menuConfig";

interface SidebarMenuProps {
  search: string;
}

export default function SidebarMenu({
  search,
}: SidebarMenuProps) {
  const keyword = search.trim().toLowerCase();

  const filteredGroups = menuConfig
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.label.toLowerCase().includes(keyword)
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <Box
      sx={{
        flex: 1,
        overflowY: "auto",
        py: 2,

        "&::-webkit-scrollbar": {
          width: 6,
        },

        "&::-webkit-scrollbar-thumb": {
          background: "#CBD5E1",
          borderRadius: 999,
        },

        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
      }}
    >
      {filteredGroups.map((group) => (
        <SidebarGroup
          key={group.id}
          group={group}
        />
      ))}
    </Box>
  );
}