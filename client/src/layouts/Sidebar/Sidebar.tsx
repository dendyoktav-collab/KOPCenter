import { useState, useMemo, Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  InputBase,
  Paper,
  IconButton,
  Chip
} from "@mui/material";

import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  SportsTennis as SportsIcon,
  SupervisorAccount as PelatihIcon,
  School as SchoolIcon,
  AccountBalance as KoperasiIcon,
  Savings as SavingsIcon,
  AccountBalanceWallet as DepositoIcon,
  MonetizationOn as PinjamanIcon,
  ShoppingCart as POSIcon,
  CalendarToday as SewaIcon,
  ExpandLess,
  ExpandMore,
  Search as SearchIcon,
  ChevronLeft as CollapseIcon,
  Menu as OpenIcon,
  Circle as CircleIcon,
  StorefrontRounded as TokoIcon,
  EmojiEvents as TurnamenIcon,
  Badge as HRDIcon,
  Warehouse as GudangIcon,
  LocalShipping as SupplierIcon,
  ReceiptLong as PiutangIcon,
  Assessment as LaporanIcon,
  Settings as SettingsIcon,
  FolderShared as DokumenIcon,
  Grading as PersetujuanIcon,
  Paid as FinansialIcon,
  AdminPanelSettings as MasterIcon
} from "@mui/icons-material";

interface SubMenuItem {
  label: string;
  path: string;
  icon: React.ReactElement;
}

interface SingleMenuItem {
  label: string;
  path: string;
  icon: React.ReactElement;
  isGroup?: false;
  groupId?: never;
  subItems?: never;
}

interface GroupMenuItem {
  label: string;
  isGroup: true;
  groupId: string;
  icon: React.ReactElement;
  subItems: SubMenuItem[];
  path?: never;
}

type MenuItem = SingleMenuItem | GroupMenuItem;

interface MenuCategory {
  groupTitle: string;
  items: MenuItem[];
}

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    master: false,
    akademi: false,
    koperasi: false,
    keuangan: false,
    pendukung: false,
  });

  const toggleGroup = (group: string) => {
    setOpenGroups((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  const menuCategories = useMemo<MenuCategory[]>(() => [
    {
      groupTitle: "Utama",
      items: [
        { label: "Dashboard Eksekutif", path: "/dashboard", icon: <DashboardIcon /> },
      ],
    },
    {
      groupTitle: "OPERASIONAL KOPERASI & AKADEMI",
      items: [
        {
          label: "Master Data",
          isGroup: true,
          groupId: "master",
          icon: <MasterIcon />,
          subItems: [
            { label: "Data Anggota", path: "/anggota", icon: <PeopleIcon fontSize="small" /> },
            { label: "Data Atlet", path: "/atlet", icon: <SportsIcon fontSize="small" /> },
            { label: "Data Pelatih", path: "/pelatih", icon: <PelatihIcon fontSize="small" /> },
            { label: "Karyawan & Pengurus", path: "/karyawan", icon: <HRDIcon fontSize="small" /> },
            { label: "Investor & Donatur", path: "/investor", icon: <SavingsIcon fontSize="small" /> },
          ],
        },
        {
          label: "Akademi Olahraga",
          isGroup: true,
          groupId: "akademi",
          icon: <SchoolIcon />,
          subItems: [
            { label: "Sistem Akademi", path: "/akademi", icon: <SchoolIcon fontSize="small" /> },
            { label: "Tagihan & SPP", path: "/tagihan-akademi", icon: <PiutangIcon fontSize="small" /> },
          ],
        },
        {
          label: "Unit Simpan Pinjam",
          isGroup: true,
          groupId: "koperasi",
          icon: <KoperasiIcon />,
          subItems: [
            { label: "Simpanan Anggota", path: "/simpanan", icon: <SavingsIcon fontSize="small" /> },
            { label: "Simpanan Deposito", path: "/deposito", icon: <DepositoIcon fontSize="small" /> },
            { label: "Pinjaman Koperasi", path: "/pinjaman", icon: <PinjamanIcon fontSize="small" /> },
          ],
        },
        { label: "Kasir Toko (POS)", path: "/kasir", icon: <TokoIcon /> },
        { label: "Marketplace Digital", path: "/marketplace", icon: <POSIcon /> },
        { label: "Rental Fasilitas", path: "/penyewaan", icon: <SewaIcon /> },
        { label: "Manajemen Turnamen", path: "/turnamen", icon: <TurnamenIcon /> },
      ],
    },
    {
      groupTitle: "BACK OFFICE & LOGISTIK",
      items: [
        { label: "HRD & Payroll", path: "/hrd-payroll", icon: <HRDIcon /> },
        { label: "Pergudangan (FEFO)", path: "/gudang", icon: <GudangIcon /> },
        { label: "Procurement & Supplier", path: "/supplier", icon: <SupplierIcon /> },
      ],
    },
    {
      groupTitle: "KEUANGAN & INVESTASI",
      items: [
        {
          label: "Keuangan & Akuntansi",
          isGroup: true,
          groupId: "keuangan",
          icon: <FinansialIcon />,
          subItems: [
            { label: "Piutang Anggota", path: "/piutang", icon: <PiutangIcon fontSize="small" /> },
            { label: "Hutang & Kewajiban", path: "/hutang-kewajiban", icon: <PiutangIcon fontSize="small" /> },
            { label: "Investasi & CSR", path: "/investasi", icon: <SavingsIcon fontSize="small" /> },
            { label: "Inventaris & Aset", path: "/inventaris-aset", icon: <GudangIcon fontSize="small" /> },
            { label: "Buku Besar & COA", path: "/keuangan", icon: <KoperasiIcon fontSize="small" /> },
          ],
        },
      ],
    },
    {
      groupTitle: "CRM & DOKUMEN",
      items: [
        {
          label: "Fitur Pendukung",
          isGroup: true,
          groupId: "pendukung",
          icon: <DokumenIcon />,
          subItems: [
            { label: "CRM & Notifikasi WA", path: "/crm-komunikasi", icon: <PeopleIcon fontSize="small" /> },
            { label: "Dompet & Loyalty Poin", path: "/dompet-loyalty", icon: <PinjamanIcon fontSize="small" /> },
            { label: "Sistem Persetujuan", path: "/persetujuan", icon: <PersetujuanIcon fontSize="small" /> },
            { label: "Dokumen Digital", path: "/dokumen-digital", icon: <DokumenIcon fontSize="small" /> },
          ],
        },
        { label: "Laporan Terpadu", path: "/laporan", icon: <LaporanIcon /> },
        { label: "Pengaturan Sistem", path: "/pengaturan", icon: <SettingsIcon /> },
      ],
    },
  ], []);

  const autoExpandGroups = useMemo(() => {
    if (!searchQuery.trim()) return {};
    const groups: Record<string, boolean> = {};
    menuCategories.forEach((category) => {
      category.items.forEach((item) => {
        if (item.isGroup) {
          const hasMatchingSub = item.subItems.some((sub: SubMenuItem) =>
            sub.label.toLowerCase().includes(searchQuery.toLowerCase())
          );
          if (hasMatchingSub) {
            groups[item.groupId] = true;
          }
        }
      });
    });
    return groups;
  }, [searchQuery, menuCategories]);

  const filteredCategories = useMemo<MenuCategory[]>(() => {
    if (!searchQuery.trim()) return menuCategories;
    return menuCategories
      .map((category) => {
        const matchingItems = category.items.filter((item) => {
          if (item.isGroup) {
            const matchSubs = item.subItems.filter((sub: SubMenuItem) =>
              sub.label.toLowerCase().includes(searchQuery.toLowerCase())
            );
            return matchSubs.length > 0 || item.label.toLowerCase().includes(searchQuery.toLowerCase());
          }
          return item.label.toLowerCase().includes(searchQuery.toLowerCase());
        });
        return { ...category, items: matchingItems };
      })
      .filter((category) => category.items.length > 0);
  }, [searchQuery, menuCategories]);

  const drawerWidth = 280;
  const collapsedWidth = 90;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? collapsedWidth : drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: collapsed ? collapsedWidth : drawerWidth,
          boxSizing: "border-box",
          bgcolor: "transparent",
          border: "none",
          transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        },
      }}
    >
      <Box
        sx={{
          height: 'calc(100vh - 24px)',
          m: 1.5,
          borderRadius: '24px',
          background: 'linear-gradient(185deg, #090e1a 0%, #111a2e 50%, #05080f 100%)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 15px 35px rgba(0,0,0,0.25)',
          overflow: 'hidden',
          border: "1px solid rgba(255,255,255,0.03)"
        }}
      >
        {/* Header Koperasi */}
        <Box sx={{ p: collapsed ? 2 : 2.5, display: 'flex', flexDirection: 'column', alignItems: collapsed ? 'center' : 'flex-start' }}>
          
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', mb: collapsed ? 1 : 2 }}>
            {!collapsed && (
              <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'rgba(255,255,255,0.06)', py: 0.6, px: 1.2, borderRadius: 3 }}>
                <CircleIcon sx={{ fontSize: 7, color: '#3b82f6', mr: 0.8 }} />
                <Typography variant="caption" sx={{ fontWeight: "800", letterSpacing: 0.5, color: '#94a3b8', fontSize: '8px' }}>
                  KOPCENTER ENTERPRISE ERP v2
                </Typography>
              </Box>
            )}
            <IconButton onClick={() => setCollapsed(!collapsed)} size="small" sx={{ color: "rgba(255,255,255,0.5)", "&:hover": { color: "#fff" } }}>
              {collapsed ? <OpenIcon fontSize="small"/> : <CollapseIcon fontSize="small"/>}
            </IconButton>
          </Box>

          {!collapsed && (
            <>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                <Box sx={{ width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "rgba(255,255,255,0.08)" }}>
                  <KoperasiIcon fontSize="small" sx={{ color: "#3b82f6" }} />
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 900, color: '#f8fafc', fontSize: '0.95rem', letterSpacing: '-0.3px' }}>
                  Koperasi Oetama PC
                </Typography>
              </Box>

              <Chip 
                icon={<TokoIcon fontSize="small" style={{ color: '#3b82f6', fontSize: '14px' }}/>} 
                label="Cabang: Oetama Pingpong Center" 
                size="small" 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.04)', 
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: '#94a3b8', 
                  mb: 2, 
                  borderRadius: 2, 
                  justifyContent: 'flex-start',
                  fontSize: "10.5px",
                  fontWeight: "500",
                  maxWidth: "100%"
                }} 
              />
              
              {/* Box Pencarian Minimalis */}
              <Paper
                component="form"
                elevation={0}
                sx={{
                  p: '2px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  bgcolor: 'rgba(0,0,0,0.2)',
                  borderRadius: 3,
                  border: '1px solid rgba(255,255,255,0.06)'
                }}
              >
                <SearchIcon sx={{ color: 'rgba(255,255,255,0.3)', mr: 0.5, fontSize: 16 }} />
                <InputBase
                  sx={{ ml: 0.5, flex: 1, color: 'white', fontSize: '0.75rem' }}
                  placeholder="Cari menu modul..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Paper>
            </>
          )}
        </Box>

        {/* List Menu Item */}
        <Box sx={{ flex: 1, overflowY: "auto", px: collapsed ? 1 : 2, pb: 3, '&::-webkit-scrollbar': { display: 'none' } }}>
          {filteredCategories.map((category, catIdx) => (
            <Box key={catIdx} sx={{ mb: collapsed ? 1.5 : 2.5 }}>
              {!collapsed && (
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    px: 1.5,
                    mb: 1.2,
                    fontWeight: "800",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                    fontSize: "8px",
                    letterSpacing: "0.8px",
                  }}
                >
                  {category.groupTitle}
                </Typography>
              )}

              <List disablePadding sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                {category.items.map((item, itemIdx) => {
                  
                  if (item.isGroup) {
                    const isGroupOpen = openGroups[item.groupId] || !!autoExpandGroups[item.groupId];
                    return (
                      <Fragment key={itemIdx}>
                        <ListItem disablePadding>
                          <ListItemButton
                            onClick={() => toggleGroup(item.groupId)}
                            sx={{
                              borderRadius: 3,
                              py: 0.8,
                              px: collapsed ? 1 : 1.8,
                              justifyContent: collapsed ? 'center' : 'flex-start',
                              color: "rgba(255,255,255,0.65)",
                              "&:hover": { bgcolor: "rgba(255,255,255,0.04)", color: "#fff" }
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: collapsed ? 0 : 32, color: isGroupOpen ? "#3b82f6" : "rgba(255,255,255,0.6)" }}>
                              {item.icon}
                            </ListItemIcon>
                            {!collapsed && (
                              <>
                                <ListItemText
                                  primary={item.label}
                                  primaryTypographyProps={{ variant: "body2", fontWeight: isGroupOpen ? "700" : "500", fontSize: "13px" }}
                                />
                                {isGroupOpen ? <ExpandLess sx={{ fontSize: 16 }} /> : <ExpandMore sx={{ fontSize: 16 }} />}
                              </>
                            )}
                          </ListItemButton>
                        </ListItem>

                        <Collapse in={isGroupOpen && !collapsed} timeout="auto" unmountOnExit>
                          <List disablePadding sx={{ pl: 2, display: "flex", flexDirection: "column", gap: 0.2, mt: 0.5 }}>
                            {item.subItems.map((sub: SubMenuItem, subIdx: number) => {
                              const isSubActive = location.pathname === sub.path;
                              return (
                                <ListItem key={subIdx} disablePadding>
                                  <ListItemButton
                                    onClick={() => navigate(sub.path)}
                                    selected={isSubActive}
                                    sx={{
                                      borderRadius: 2,
                                      py: 0.6,
                                      px: 1.5,
                                      color: isSubActive ? "#fff" : "rgba(255,255,255,0.45)",
                                      "&.Mui-selected": {
                                        bgcolor: "rgba(59, 130, 246, 0.12)",
                                        color: "#3b82f6",
                                        "& .MuiListItemIcon-root": { color: "#3b82f6" },
                                        "&:hover": { bgcolor: "rgba(59, 130, 246, 0.18)" },
                                      },
                                      "&:hover": { color: "#fff" }
                                    }}
                                  >
                                    <ListItemIcon sx={{ minWidth: 26, color: "inherit" }}>
                                      {sub.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={sub.label}
                                      primaryTypographyProps={{ variant: "body2", fontWeight: isSubActive ? "bold" : "500", fontSize: '12.5px' }}
                                    />
                                  </ListItemButton>
                                </ListItem>
                              );
                            })}
                          </List>
                        </Collapse>
                      </Fragment>
                    );
                  }

                  const isActive = location.pathname === item.path || (item.path === "/dashboard" && location.pathname === "/");
                  return (
                    <ListItem key={itemIdx} disablePadding>
                      <ListItemButton
                        onClick={() => navigate(item.path)}
                        selected={isActive}
                        sx={{
                          borderRadius: 3,
                          py: 0.8,
                          px: collapsed ? 1 : 1.8,
                          justifyContent: collapsed ? "center" : "initial",
                          color: isActive ? "#fff" : "rgba(255,255,255,0.65)",
                          "&.Mui-selected": {
                            bgcolor: "rgba(255,255,255,0.08)",
                            color: "#fff",
                            "& .MuiListItemIcon-root": { color: "#3b82f6" },
                            "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
                          },
                          "&:hover": { bgcolor: "rgba(255,255,255,0.04)", color: "#fff" }
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: collapsed ? 0 : 32, justifyContent: "center", color: isActive ? "#3b82f6" : "rgba(255,255,255,0.6)" }}>
                          {item.icon}
                        </ListItemIcon>
                        {!collapsed && (
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{ variant: "body2", fontWeight: isActive ? "800" : "500", fontSize: "13px" }}
                          />
                        )}
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
}