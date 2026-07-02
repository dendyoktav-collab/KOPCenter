import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import DashboardPage from "./features/dashboard/pages/DashboardPage";

import ComingSoonPage from "./pages/ComingSoon";
import NotFoundPage from "./pages/NotFound";

export default function App() {
  return (
    <Routes>

      {/* Redirect Root */}
      <Route
        path="/"
        element={<Navigate to="/dashboard" replace />}
      />

      {/* Main Layout */}
      <Route element={<MainLayout />}>

        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        {/* ==========================
            MASTER DATA
        =========================== */}

        <Route path="/anggota" element={<ComingSoonPage />} />
        <Route path="/atlet" element={<ComingSoonPage />} />
        <Route path="/pelatih" element={<ComingSoonPage />} />

        {/* ==========================
            AKADEMI
        =========================== */}

        <Route path="/akademi" element={<ComingSoonPage />} />

        {/* ==========================
            KOPERASI
        =========================== */}

        <Route path="/simpanan" element={<ComingSoonPage />} />

        <Route path="/deposito" element={<ComingSoonPage />} />

        <Route path="/pinjaman" element={<ComingSoonPage />} />

        {/* ==========================
            POS
        =========================== */}

        <Route path="/kasir" element={<ComingSoonPage />} />

        {/* ==========================
            MARKETPLACE
        =========================== */}

        <Route path="/marketplace" element={<ComingSoonPage />} />

        {/* ==========================
            RENTAL
        =========================== */}

        <Route path="/penyewaan" element={<ComingSoonPage />} />

        {/* ==========================
            TURNAMEN
        =========================== */}

        <Route path="/turnamen" element={<ComingSoonPage />} />

        {/* ==========================
            GUDANG
        =========================== */}

        <Route path="/gudang" element={<ComingSoonPage />} />

        {/* ==========================
            SUPPLIER
        =========================== */}

        <Route path="/supplier" element={<ComingSoonPage />} />

        {/* ==========================
            INVESTASI
        =========================== */}

        <Route path="/investasi" element={<ComingSoonPage />} />

        {/* ==========================
            KEUANGAN
        =========================== */}

        <Route path="/keuangan" element={<ComingSoonPage />} />

        {/* ==========================
            LAPORAN
        =========================== */}

        <Route path="/laporan" element={<ComingSoonPage />} />

        {/* ==========================
            PENGATURAN
        =========================== */}

        <Route path="/pengaturan" element={<ComingSoonPage />} />

      </Route>

      {/* 404 */}
      <Route
        path="*"
        element={<NotFoundPage />}
      />

    </Routes>
  );
}