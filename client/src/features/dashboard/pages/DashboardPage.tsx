import {
  Grid,
  Typography,
} from "@mui/material";

import GroupsIcon from "@mui/icons-material/Groups";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

import StatCard from "../components/StatCard";
import QuickMenu from "../components/QuickMenu";
import SummaryChart from "../components/SummaryChart";
import ActivityCard from "../components/ActivityCard";
import AnnouncementCard from "../components/AnnouncementCard";

export default function DashboardPage() {
  return (
    <>

      <Typography
        variant="h4"
        fontWeight={700}
        mb={3}
      >
        Dashboard
      </Typography>

      <Grid container spacing={3}>

        <Grid size={{ xs:12, md:3 }}>
          <StatCard
            title="Total Anggota"
            value="0"
            icon={<GroupsIcon />}
          />
        </Grid>

        <Grid size={{ xs:12, md:3 }}>
          <StatCard
            title="Total Simpanan"
            value="Rp 0"
            icon={<SavingsIcon />}
          />
        </Grid>

        <Grid size={{ xs:12, md:3 }}>
          <StatCard
            title="Saldo Kas"
            value="Rp 0"
            icon={<AccountBalanceWalletIcon />}
          />
        </Grid>

        <Grid size={{ xs:12, md:3 }}>
          <StatCard
            title="Transaksi Hari Ini"
            value="0"
            icon={<PointOfSaleIcon />}
          />
        </Grid>

        <Grid size={{ xs:12 }}>
          <QuickMenu />
        </Grid>

        <Grid size={{ xs:12, lg:8 }}>
          <SummaryChart />
        </Grid>

        <Grid size={{ xs:12, lg:4 }}>
          <AnnouncementCard />
        </Grid>

        <Grid size={{ xs:12 }}>
          <ActivityCard />
        </Grid>

      </Grid>

    </>
  );
}