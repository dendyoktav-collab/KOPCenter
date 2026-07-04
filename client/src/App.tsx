import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";

// Halaman-halaman bawaan dari proyek aslimu
import DashboardPage from "./features/dashboard/pages/DashboardPage";
import ComingSoonPage from "./pages/ComingSoon";
import NotFoundPage from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      {/* Redirect Root ke Dashboard Utama */}
      <Route
        path="/"
        element={<Navigate to="/dashboard" replace />}
      />

      {/* Main Layout dengan 23 Rute Modul Terpadu */}
      <Route element={<MainLayout />}>
        
        {/* 1. Dashboard Utama */}
        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        {/* ==========================================\n
            MASTER DATA (Sesuai Blueprint Halaman 1 & 4)\n
        =========================================== */}
        <Route path="/anggota" element={<ComingSoonPage />} />
        <Route path="/atlet" element={<ComingSoonPage />} />
        <Route path="/pelatih" element={<ComingSoonPage />} />

        {/* ==========================================\n
            AKADEMI & TAGIHAN (Sesuai Blueprint Halaman 1 & 4)\n
        =========================================== */}
        <Route path="/akademi" element={<ComingSoonPage />} />
        <Route path="/tagihan-akademi" element={<ComingSoonPage />} />

        {/* ==========================================\n
            KOPERASI, RETAIL & MARKETPLACE\n
        =========================================== */}
        <Route path="/koperasi" element={<ComingSoonPage />} />
        <Route path="/pos-retail" element={<ComingSoonPage />} />
        <Route path="/marketplace" element={<ComingSoonPage />} />
        <Route path="/rental" element={<ComingSoonPage />} />
        <Route path="/turnamen" element={<ComingSoonPage />} />

        {/* ==========================================\n
            HRD, GUDANG & SUPPLIER (Blueprint Halaman 2 & 4)\n
        =========================================== */}
        <Route path="/hrd-payroll" element={<ComingSoonPage />} />
        <Route path="/pergudangan" element={<ComingSoonPage />} />
        <Route path="/supplier-procurement" element={<ComingSoonPage />} />

        {/* ==========================================\n
            PIUTANG, HUTANG & KEUANGAN (Blueprint Halaman 2 & 4)\n
        =========================================== */}
        <Route path="/piutang" element={<ComingSoonPage />} />
        <Route path="/hutang-kewajiban" element={<ComingSoonPage />} />
        <Route path="/keuangan" element={<ComingSoonPage />} />

        {/* ==========================================\n
            INVESTASI, CSR & INVENTARIS ASET\n
        =========================================== */}
        <Route path="/investasi" element={<ComingSoonPage />} />
        <Route path="/inventaris-aset" element={<ComingSoonPage />} />

        {/* ==========================================\n
            CRM, DOMPET DIGITAL, APPROVAL & ARSIP\n
        =========================================== */}
        <Route path="/crm-komunikasi" element={<ComingSoonPage />} />
        <Route path="/dompet-loyalty" element={<ComingSoonPage />} />
        <Route path="/persetujuan" element={<ComingSoonPage />} />
        <Route path="/dokumen-digital" element={<ComingSoonPage />} />

        {/* ==========================================\n
            LAPORAN & PENGATURAN SYSTEM\n
        =========================================== */}
        <Route path="/laporan" element={<ComingSoonPage />} />
        <Route path="/pengaturan" element={<ComingSoonPage />} />
      </Route>

      {/* 404 Not Found */}
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
}