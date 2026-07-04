import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import {
  ContentCopy,
  WhatsApp,
  OpenInNew,
  TrendingUp,
  AccountBalanceWallet,
  Warning,
  People,
  LocalActivity,
  School,
  VerifiedUser,
  AccountBalance,
  MonetizationOn
} from "@mui/icons-material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// Data Analitik Terpadu KOPCenter (Akademi, Koperasi & Penjualan)
const analyticalData = [
  { name: "Jan", Simpanan: 100000, Pendapatan: 500000, Atlet: 12 },
  { name: "Feb", Simpanan: 150000, Pendapatan: 800000, Atlet: 18 },
  { name: "Mar", Simpanan: 220000, Pendapatan: 1200000, Atlet: 25 },
  { name: "Apr", Simpanan: 280000, Pendapatan: 1500000, Atlet: 32 },
  { name: "Mei", Simpanan: 340000, Pendapatan: 2000000, Atlet: 40 },
];

export default function DashboardPage() {
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const handleThemeChange = () => {
      setDarkMode(localStorage.getItem("theme") === "dark");
    };
    window.addEventListener("theme-change", handleThemeChange);
    return () => window.removeEventListener("theme-change", handleThemeChange);
  }, []);

  const handleCopyLink = () => {
    const linkText = "https://member.kopcenter.id/koperasi-kopcenter";
    navigator.clipboard.writeText(linkText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Konfigurasi Desain Responsif & Tema
  const dashboardBg = darkMode ? "#090d16" : "#f1f5f9";
  const cardBg = darkMode ? "#111a2e" : "#ffffff";
  const textColor = darkMode ? "#f8fafc" : "#1e293b";
  const textSecondary = darkMode ? "#94a3b8" : "#64748b";
  const borderColor = darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)";

  return (
    <Box sx={{ p: { xs: 1.5, sm: 3 }, display: "flex", flexDirection: "column", gap: 3, minHeight: "100vh", bgcolor: dashboardBg, transition: "background-color 0.3s" }}>
      
      {/* 1. Header Share Link Section */}
      <Card
        sx={{
          p: { xs: 2, sm: 3 },
          borderRadius: "16px",
          border: `1px solid ${borderColor}`,
          boxShadow: darkMode ? "0 4px 20px rgba(0,0,0,0.3)" : "0 4px 20px rgba(148, 163, 184, 0.05)",
          background: cardBg,
          transition: "background-color 0.3s",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <VerifiedUser sx={{ color: "#3b82f6", fontSize: 20 }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 800, color: textColor }}>
            Link Dashboard Anggota Siap Dibagikan
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: textSecondary, mb: 2.5, fontSize: "13px" }}>
          Bagikan tautan ini ke WhatsApp anggota agar mereka bisa melihat simpanan, tagihan akademi, dan pemesanan secara langsung.
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: darkMode ? "rgba(255,255,255,0.02)" : "#f8fafc",
              border: "1px solid",
              borderColor: darkMode ? "rgba(255,255,255,0.08)" : "#e2e8f0",
              borderRadius: "10px",
              px: 2,
              py: 1,
              flex: 1,
              minWidth: "260px",
            }}
          >
            <Typography variant="body2" sx={{ color: "#94a3b8", mr: 1, fontWeight: "bold" }}>🔗</Typography>
            <Typography variant="body2" sx={{ color: textColor, fontWeight: "600", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "13px" }}>
              https://member.kopcenter.id/koperasi-kopcenter
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<OpenInNew />}
            sx={{
              bgcolor: "#3b82f6",
              "&:hover": { bgcolor: "#2563eb" },
              textTransform: "none",
              borderRadius: "10px",
              fontWeight: "700",
              fontSize: "13px",
              px: 2.5,
              py: 1,
              boxShadow: "none",
            }}
          >
            BUKA DASHBOARD
          </Button>

          <Button
            variant="outlined"
            startIcon={<ContentCopy />}
            onClick={handleCopyLink}
            sx={{
              color: "#3b82f6",
              borderColor: "#3b82f6",
              "&:hover": { borderColor: "#2563eb", bgcolor: "rgba(59,130,246,0.05)" },
              textTransform: "none",
              borderRadius: "10px",
              fontWeight: "700",
              fontSize: "13px",
              px: 2.5,
              py: 1,
            }}
          >
            {copied ? "TERSALIN!" : "SALIN LINK"}
          </Button>

          <Button
            variant="contained"
            startIcon={<WhatsApp />}
            sx={{
              bgcolor: "#25D366",
              "&:hover": { bgcolor: "#128C7E" },
              textTransform: "none",
              borderRadius: "10px",
              fontWeight: "700",
              fontSize: "13px",
              px: 2.5,
              py: 1,
              boxShadow: "none",
            }}
          >
            SHARE WA
          </Button>
        </Box>
      </Card>

      {/* 2. Portfolio Utama Section */}
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: "800", color: textSecondary, mb: 2, textTransform: "uppercase", letterSpacing: "1px", fontSize: "11px" }}>
          PORTFOLIO KOPCENTER ERP
        </Typography>

        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
          gap: 2
        }}>
          {/* Card 1: Total Anggota / Atlet */}
          <Card sx={{ p: 2, borderRadius: "14px", border: `1px solid ${borderColor}`, boxShadow: "none", display: "flex", gap: 2, alignItems: "center", bgcolor: cardBg, transition: "background-color 0.3s" }}>
            <Avatar sx={{ bgcolor: "rgba(99, 102, 241, 0.1)", color: "#6366f1", width: 42, height: 42, borderRadius: "10px" }}>
              <People />
            </Avatar>
            <Box>
              <Typography variant="caption" sx={{ color: textSecondary, fontWeight: "700", textTransform: "uppercase", fontSize: "10px" }}>
                ANGGOTA & ATLET
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "900", color: textColor, my: 0.1 }}>
                40
              </Typography>
              <Typography variant="caption" sx={{ color: "#6366f1", fontWeight: "bold", fontSize: "10px" }}>
                Akademi Terdaftar
              </Typography>
            </Box>
          </Card>

          {/* Card 2: Total Simpanan */}
          <Card sx={{ p: 2, borderRadius: "14px", border: `1px solid ${borderColor}`, boxShadow: "none", display: "flex", gap: 2, alignItems: "center", bgcolor: cardBg, transition: "background-color 0.3s" }}>
            <Avatar sx={{ bgcolor: "rgba(16, 185, 129, 0.1)", color: "#10b981", width: 42, height: 42, borderRadius: "10px" }}>
              <AccountBalanceWallet />
            </Avatar>
            <Box>
              <Typography variant="caption" sx={{ color: textSecondary, fontWeight: "700", textTransform: "uppercase", fontSize: "10px" }}>
                TOTAL SIMPANAN
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "900", color: textColor, my: 0.1 }}>
                Rp340.000
              </Typography>
              <Typography variant="caption" sx={{ color: "#10b981", fontWeight: "bold", fontSize: "10px" }}>
                Unit USP Terverifikasi
              </Typography>
            </Box>
          </Card>

          {/* Card 3: Tagihan Akademi */}
          <Card sx={{ p: 2, borderRadius: "14px", border: `1px solid ${borderColor}`, boxShadow: "none", display: "flex", gap: 2, alignItems: "center", bgcolor: cardBg, transition: "background-color 0.3s" }}>
            <Avatar sx={{ bgcolor: "rgba(245, 158, 11, 0.1)", color: "#f59e0b", width: 42, height: 42, borderRadius: "10px" }}>
              <School />
            </Avatar>
            <Box>
              <Typography variant="caption" sx={{ color: textSecondary, fontWeight: "700", textTransform: "uppercase", fontSize: "10px" }}>
                TAGIHAN AKADEMI
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "900", color: textColor, my: 0.1 }}>
                Rp2.000.000
              </Typography>
              <Typography variant="caption" sx={{ color: "#f59e0b", fontWeight: "bold", fontSize: "10px" }}>
                SPP & Turnamen Aktif
              </Typography>
            </Box>
          </Card>

          {/* Card 4: Sisa Hasil Usaha (SHU) */}
          <Card sx={{ p: 2, borderRadius: "14px", border: `1px solid ${borderColor}`, boxShadow: "none", display: "flex", gap: 2, alignItems: "center", bgcolor: cardBg, transition: "background-color 0.3s" }}>
            <Avatar sx={{ bgcolor: "rgba(139, 92, 246, 0.1)", color: "#8b5cf6", width: 42, height: 42, borderRadius: "10px" }}>
              <LocalActivity />
            </Avatar>
            <Box>
              <Typography variant="caption" sx={{ color: textSecondary, fontWeight: "700", textTransform: "uppercase", fontSize: "10px" }}>
                SISA HASIL USAHA
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "900", color: textColor, my: 0.1 }}>
                Rp1.979.380
              </Typography>
              <Typography variant="caption" sx={{ color: "#8b5cf6", fontWeight: "bold", fontSize: "10px" }}>
                Laba Usaha Berjalan
              </Typography>
            </Box>
          </Card>
        </Box>
      </Box>

      {/* 3. Visualisasi Tren & Likuiditas (Memadukan Recharts) */}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "repeat(12, 1fr)" }, gap: 3 }}>
        
        {/* Grafik Pertumbuhan Akademi & USP (8 columns) */}
        <Box sx={{ gridColumn: { xs: "span 12", lg: "span 8" } }}>
          <Card sx={{ p: { xs: 2, sm: 3 }, borderRadius: "16px", bgcolor: cardBg, border: `1px solid ${borderColor}`, transition: "background-color 0.3s" }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "800", color: textColor, mb: 2, fontSize: "14px" }}>
              Tren Keuangan & Pendaftaran Akademi Terpadu
            </Typography>
            
            <Box sx={{ width: "100%", height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={analyticalData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPendapatan" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSimpanan" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={darkMode ? "rgba(255,255,255,0.05)" : "#f1f5f9"} />
                  <XAxis dataKey="name" stroke={textSecondary} style={{ fontSize: "11px" }} />
                  <YAxis stroke={textSecondary} style={{ fontSize: "11px" }} />
                  <Tooltip contentStyle={{ background: cardBg, borderColor: borderColor, color: textColor }} />
                  <Area type="monotone" dataKey="Pendapatan" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorPendapatan)" />
                  <Area type="monotone" dataKey="Simpanan" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorSimpanan)" />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Box>

        {/* Metrik Likuiditas Cepat (4 columns) */}
        <Box sx={{ gridColumn: { xs: "span 12", lg: "span 4" } }}>
          <Card
            sx={{
              p: 3,
              borderRadius: "16px",
              background: darkMode 
                ? "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)" 
                : "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",
              border: `1px solid ${borderColor}`,
              boxShadow: "none",
              color: darkMode ? "#fff" : "#1e293b",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <Box>
              <Typography variant="caption" sx={{ color: "#3b82f6", fontWeight: "900", textTransform: "uppercase", fontSize: "10px", letterSpacing: "1px" }}>
                Kontrol Likuiditas Kas
              </Typography>
              
              <Typography variant="h4" sx={{ fontWeight: "900", mt: 1, mb: 3 }}>
                Rp2.145.295
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, position: "relative", zIndex: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid", borderColor: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)", pb: 1 }}>
                  <Typography variant="body2" sx={{ color: textSecondary, fontSize: "12px" }}>Saldo Bank</Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "12px" }}>Rp2.145.295</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid", borderColor: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)", pb: 1 }}>
                  <Typography variant="body2" sx={{ color: textSecondary, fontSize: "12px" }}>Aset Likuid</Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "12px" }}>Rp2.145.295</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body2" sx={{ color: textSecondary, fontSize: "12px" }}>Biaya Operasional</Typography>
                  <Typography variant="body2" sx={{ color: "#ef4444", fontWeight: "bold", fontSize: "12px" }}>-Rp620</Typography>
                </Box>
              </Box>
            </Box>

            {/* Warning Saldo Kosong */}
            <Box sx={{ mt: 3, p: 1.2, borderRadius: "10px", bgcolor: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.15)", display: "flex", gap: 1, alignItems: "center", position: "relative", zIndex: 2 }}>
              <Warning sx={{ color: "#ef4444", fontSize: 16 }} />
              <Typography variant="caption" sx={{ color: "#fca5a5", fontSize: "10.5px" }}>
                Saldo fisik Kas Utama Rp0. Harap rekonsiliasi.
              </Typography>
            </Box>

            {/* Dekorasi piala di pojok kanan bawah */}
            <Box
              sx={{
                position: "absolute",
                bottom: -15,
                right: -10,
                width: 120,
                height: 120,
                opacity: darkMode ? 0.08 : 0.18,
                pointerEvents: "none",
                zIndex: 1,
              }}
            >
              <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                <path d="M60 90C73.8071 90 85 78.8071 85 65V30H35V65C35 78.8071 46.1929 90 60 90Z" fill="#FBBF24" />
                <path d="M60 90C73.8071 90 85 78.8071 85 65V30H60V90Z" fill="#F59E0B" />
                <path d="M35 40H22C17.0294 40 13 44.0294 13 49V53C13 61.2843 19.7157 68 28 68H35V40ZM85 40H98C102.971 40 107 44.0294 107 49V53C107 61.2843 100.284 68 92 68H85V40Z" fill="#FBBF24" />
                <path d="M60 90V105H45V110H75V105H60" stroke="#D97706" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Box>
          </Card>
        </Box>

      </Box>

    </Box>
  );
}