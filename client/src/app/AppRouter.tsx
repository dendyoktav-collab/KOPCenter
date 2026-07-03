import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import DashboardPage from "../features/dashboard/pages/DashboardPage";

import ComingSoonPage from "../pages/ComingSoon";
import NotFoundPage from "../pages/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      {/* Redirect */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Main Layout */}
      <Route element={<MainLayout />}>
        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Master Data */}
        <Route path="/anggota" element={<ComingSoonPage />} />
        <Route path="/atlet" element={<ComingSoonPage />} />
        <Route path="/pelatih" element={<ComingSoonPage />} />

        {/* Akademi */}
        <Route path="/akademi" element={<ComingSoonPage />} />

        {/* Koperasi */}
        <Route path="/simpanan" element={<ComingSoonPage />} />
        <Route path="/deposito" element={<ComingSoonPage />} />
        <Route path="/pinjaman" element={<ComingSoonPage />} />

        {/* POS */}
        <Route path="/kasir" element={<ComingSoonPage />} />

        {/* Marketplace */}
        <Route path="/marketplace" element={<ComingSoonPage />} />

        {/* Rental */}
        <Route path="/penyewaan" element={<ComingSoonPage />} />

        {/* Turnamen */}
        <Route path="/turnamen" element={<ComingSoonPage />} />

        {/* Gudang */}
        <Route path="/gudang" element={<ComingSoonPage />} />

        {/* Supplier */}
        <Route path="/supplier" element={<ComingSoonPage />} />

        {/* Investasi */}
        <Route path="/investasi" element={<ComingSoonPage />} />

        {/* Keuangan */}
        <Route path="/keuangan" element={<ComingSoonPage />} />

        {/* Laporan */}
        <Route path="/laporan" element={<ComingSoonPage />} />

        {/* Pengaturan */}
        <Route path="/pengaturan" element={<ComingSoonPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}