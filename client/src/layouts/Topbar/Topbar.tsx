import { useState } from "react";
import { Box, AppBar, Toolbar, Avatar, Typography, Button, Badge } from "@mui/material";
import { Notifications, Settings, LiveTv, Layers } from "@mui/icons-material";

export default function Topbar() {
  const [activeTab, setActiveTab] = useState<string>("Kontrol Likuiditas");

  const menuTabs = ["Front Office Cepat", "Kontrol Likuiditas", "Executive Insight"];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#ffffff",
        borderBottom: "1px solid",
        borderColor: "rgba(0, 0, 0, 0.05)",
        color: "text.primary",
        py: 1,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 3, flexWrap: "wrap", gap: 2 }}>
        
        {/* Kiri: Tab Menu Navigasi Persis Seperti Gambar */}
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          {menuTabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                sx={{
                  textTransform: "none",
                  borderRadius: 2.5,
                  px: 2.5,
                  py: 1,
                  fontSize: "13px",
                  fontWeight: isActive ? "800" : "600",
                  color: isActive ? "#ffffff" : "#64748b",
                  bgcolor: isActive ? "#0d1d21" : "transparent",
                  border: isActive ? "none" : "1px solid transparent",
                  "&:hover": {
                    bgcolor: isActive ? "#0d1d21" : "rgba(0,0,0,0.03)",
                  }
                }}
              >
                {tab}
              </Button>
            );
          })}
        </Box>

        {/* Kanan: Alat Kontrol & Status Anggota */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          
          {/* Ikon Notifikasi Merah */}
          <Badge badgeContent={14} color="error" sx={{ "& .MuiBadge-badge": { fontSize: "9px", height: "16px", minWidth: "16px" } }}>
            <Box sx={{ p: 1, borderRadius: 2, bgcolor: "#f1f5f9", cursor: "pointer" }}>
              <Notifications sx={{ fontSize: 20, color: "#475569" }} />
            </Box>
          </Badge>

          {/* Ikon Streaming Langsung */}
          <Box sx={{ p: 1, borderRadius: 2, bgcolor: "#f1f5f9", cursor: "pointer", display: "flex", alignItems: "center" }}>
            <LiveTv sx={{ fontSize: 20, color: "#475569" }} />
          </Box>

          {/* Fitur Bimbingan Zoom */}
          <Button
            variant="outlined"
            startIcon={<Layers />}
            sx={{
              textTransform: "none",
              borderRadius: 3,
              borderColor: "#e2e8f0",
              color: "#334155",
              fontWeight: "700",
              fontSize: "12px",
              px: 2,
              py: 0.8,
              "&:hover": { borderColor: "#cbd5e1", bgcolor: "rgba(0,0,0,0.02)" }
            }}
          >
            BIMBINGAN <span style={{ color: "#f59e0b", marginLeft: "4px", fontSize: "10px", fontWeight: "900", background: "#fef3c7", padding: "2px 6px", borderRadius: "4px" }}>VIA ZOOM</span>
          </Button>

          {/* Sisa Langganan Premium */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, border: "1px solid #e2e8f0", p: 0.8, borderRadius: 3, bgcolor: "#f8fafc" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#eff6ff", p: 0.5, borderRadius: 2 }}>
              <Typography variant="body2" sx={{ fontSize: "14px" }}>📅</Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ display: "block", color: "#64748b", fontWeight: "bold", fontSize: "8px", textTransform: "uppercase" }}>
                SISA LANGGANAN
              </Typography>
              <Typography variant="caption" sx={{ display: "block", fontWeight: "900", color: "#1e293b", fontSize: "11px", mt: -0.2 }}>
                67 hari tersisa
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="small"
              sx={{
                bgcolor: "#3b82f6",
                boxShadow: "none",
                borderRadius: 1.5,
                fontSize: "10px",
                fontWeight: "800",
                p: "4px 10px",
                minWidth: "auto",
                "&:hover": { bgcolor: "#2563eb", boxShadow: "none" }
              }}
            >
              Kelola
            </Button>
          </Box>

          {/* Profil User */}
          <Avatar 
            src="/user.jpg" 
            sx={{ 
              width: 36, 
              height: 36, 
              border: "2px solid #3b82f6",
              cursor: "pointer" 
            }} 
          />

        </Box>
      </Toolbar>
    </AppBar>
  );
}