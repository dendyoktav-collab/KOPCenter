import type { ElementType } from "react";

import {
  Dashboard,
  Group,
  School,
  HowToReg,
  Savings,
  AccountBalance,
  CreditCard,
  PointOfSale,
  Store,
  Warehouse,
  Inventory2,
  ShoppingCart,
  Payments,
  Assessment,
  Settings,
} from "@mui/icons-material";

export interface MenuItem {
  id: string;
  title: string;
  path?: string;
  icon?: ElementType;
  children?: MenuItem[];
}

const menu: MenuItem[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    path: "/dashboard",
    icon: Dashboard,
  },
  {
    id: "master",
    title: "Master Data",
    icon: Group,
    children: [
      {
        id: "anggota",
        title: "Anggota",
        path: "/anggota",
      },
      {
        id: "atlet",
        title: "Atlet",
        path: "/atlet",
      },
      {
        id: "pelatih",
        title: "Pelatih",
        path: "/pelatih",
      },
    ],
  },
  {
    id: "akademi",
    title: "Akademi",
    path: "/akademi",
    icon: School,
  },
  {
    id: "absensi",
    title: "Absensi",
    path: "/absensi",
    icon: HowToReg,
  },
  {
    id: "simpanan",
    title: "Simpanan",
    path: "/simpanan",
    icon: Savings,
  },
  {
    id: "deposito",
    title: "Deposito",
    path: "/deposito",
    icon: AccountBalance,
  },
  {
    id: "pinjaman",
    title: "Pinjaman",
    path: "/pinjaman",
    icon: CreditCard,
  },
  {
    id: "kasir",
    title: "Kasir",
    path: "/kasir",
    icon: PointOfSale,
  },
  {
    id: "marketplace",
    title: "Marketplace",
    path: "/marketplace",
    icon: Store,
  },
  {
    id: "gudang",
    title: "Gudang",
    path: "/gudang",
    icon: Warehouse,
  },
  {
    id: "supplier",
    title: "Supplier",
    path: "/supplier",
    icon: Inventory2,
  },
  {
    id: "pembelian",
    title: "Pembelian",
    path: "/pembelian",
    icon: ShoppingCart,
  },
  {
    id: "keuangan",
    title: "Keuangan",
    path: "/keuangan",
    icon: Payments,
  },
  {
    id: "laporan",
    title: "Laporan",
    path: "/laporan",
    icon: Assessment,
  },
  {
    id: "pengaturan",
    title: "Pengaturan",
    path: "/pengaturan",
    icon: Settings,
  },
];

export default menu;