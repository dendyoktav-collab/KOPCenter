import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";

const titles: Record<string, string> = {
  "/": "Dashboard",
  "/dashboard": "Dashboard",
  "/anggota": "Anggota",
  "/simpanan": "Simpanan",
  "/pinjaman": "Pinjaman",
  "/kasir": "Kasir",
  "/keuangan": "Keuangan",
  "/gudang": "Gudang",
  "/supplier": "Supplier",
  "/marketplace": "Marketplace",
  "/laporan": "Laporan",
  "/pengaturan": "Pengaturan",
};

export default function PageTitle() {
  const { pathname } = useLocation();

  const title = titles[pathname] ?? "KOPCenter";

  return (
    <Typography
      variant="h6"
      fontWeight={700}
      color="text.primary"
    >
      {title}
    </Typography>
  );
}