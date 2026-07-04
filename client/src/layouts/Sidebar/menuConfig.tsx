import type { SidebarGroup } from "./types";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import PointOfSaleRoundedIcon from "@mui/icons-material/PointOfSaleRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import SportsSoccerRoundedIcon from "@mui/icons-material/SportsSoccerRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

export const menuConfig: SidebarGroup[] = [
  {
    id: "dashboard",
    title: "",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        path: "/dashboard",
        icon: <DashboardRoundedIcon />,
      },
    ],
  },

  {
    id: "master",
    title: "MASTER DATA",
    items: [
      {
        id: "anggota",
        label: "Anggota",
        path: "/anggota",
        icon: <PeopleRoundedIcon />,
      },
      {
        id: "supplier",
        label: "Supplier",
        path: "/supplier",
        icon: <StoreRoundedIcon />,
      },
      {
        id: "gudang",
        label: "Gudang",
        path: "/gudang",
        icon: <Inventory2RoundedIcon />,
      },
    ],
  },

  {
    id: "koperasi",
    title: "KOPERASI",
    items: [
      {
        id: "simpanan",
        label: "Simpanan",
        path: "/simpanan",
        icon: <SavingsRoundedIcon />,
      },
      {
        id: "pinjaman",
        label: "Pinjaman",
        path: "/pinjaman",
        icon: <AccountBalanceRoundedIcon />,
      },
    ],
  },

  {
    id: "bisnis",
    title: "BISNIS",
    items: [
      {
        id: "kasir",
        label: "Kasir",
        path: "/kasir",
        icon: <PointOfSaleRoundedIcon />,
      },
      {
        id: "marketplace",
        label: "Marketplace",
        path: "/marketplace",
        icon: <ShoppingBagRoundedIcon />,
      },
    ],
  },

  {
    id: "akademi",
    title: "AKADEMI",
    items: [
      {
        id: "akademi",
        label: "Akademi",
        path: "/akademi",
        icon: <SchoolRoundedIcon />,
      },
      {
        id: "turnamen",
        label: "Turnamen",
        path: "/turnamen",
        icon: <EmojiEventsRoundedIcon />,
      },
      {
        id: "atlet",
        label: "Atlet",
        path: "/atlet",
        icon: <SportsSoccerRoundedIcon />,
      },
    ],
  },

  {
    id: "keuangan",
    title: "KEUANGAN",
    items: [
      {
        id: "keuangan",
        label: "Keuangan",
        path: "/keuangan",
        icon: <PaymentsRoundedIcon />,
      },
      {
        id: "laporan",
        label: "Laporan",
        path: "/laporan",
        icon: <AssessmentRoundedIcon />,
      },
    ],
  },

  {
    id: "pengaturan",
    title: "PENGATURAN",
    items: [
      {
        id: "pengaturan",
        label: "Pengaturan",
        path: "/pengaturan",
        icon: <SettingsRoundedIcon />,
      },
    ],
  },
];

export default menuConfig;