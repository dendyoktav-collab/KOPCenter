import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  LinearProgress,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Divider,
  List,
} from "@mui/material";
import {
  SportsTennis,
  Casino,
} from "@mui/icons-material";

// Database Simulasi untuk Master Data
interface MockPerson {
  id: string;
  nama: string;
  tipe: string;
  kontak: string;
  status: string;
}

const initialPeople: MockPerson[] = [
  { id: "KOP-001", nama: "Dendy Oktav", tipe: "Anggota", kontak: "08123456789", status: "Aktif" },
  { id: "ATL-002", nama: "Fajar Alfian", tipe: "Atlet", kontak: "08571122334", status: "Aktif" },
  { id: "PEL-003", nama: "Coach Hendra", tipe: "Pelatih", kontak: "08998877665", status: "Aktif" },
];

export default function ComingSoon() {
  // Solusi Aman untuk useLocation: Cegah crash jika dirender di luar Router context
  let path = "/";
  try {
    const location = useLocation();
    path = location.pathname;
  } catch (e) {
    console.warn("useLocation digunakan di luar konteks Router. Menggunakan path bawaan '/'");
  }

  // State untuk Simulasi Master Data (Anggota, Atlet, Pelatih)
  const [people, setPeople] = useState<MockPerson[]>(initialPeople);
  const [newPerson, setNewPerson] = useState({ nama: "", tipe: "Anggota", kontak: "" });

  // State untuk Simulasi Koperasi Pinjaman
  const [pinjamanAmount, setPinjamanAmount] = useState<number>(5000000);
  const [tenor, setTenor] = useState<number>(12);

  // State untuk Simulasi POS (Kasir)
  const [cart, setCart] = useState<{ nama: string; harga: number; qty: number }[]>([]);
  const [payment, setPayment] = useState<string>("");
  const [showReceipt, setShowReceipt] = useState(false);

  // State untuk Simulasi Turnamen & Drawing
  const [players, setPlayers] = useState<string[]>(["Fajar", "Rian", "Jojo", "Ginting"]);
  const [newPlayer, setNewPlayer] = useState("");
  const [bracket, setBracket] = useState<string[][]>([]);

  // Handler Master Data
  const handleAddPerson = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPerson.nama || !newPerson.kontak) return;
    const item: MockPerson = {
      id: `${newPerson.tipe.slice(0, 3).toUpperCase()}-${Date.now().toString().slice(-3)}`,
      nama: newPerson.nama,
      tipe: newPerson.tipe,
      kontak: newPerson.kontak,
      status: "Aktif",
    };
    setPeople([...people, item]);
    setNewPerson({ nama: "", tipe: "Anggota", kontak: "" });
  };

  // Handler POS Kasir
  const products = [
    { nama: "Bet Butterfly ALC", harga: 2450000 },
    { nama: "Bola Nittaku 3-Star (Isi 3)", harga: 95000 },
    { nama: "Karet Yasaka Mark V", harga: 480000 },
  ];

  const addToCart = (prod: { nama: string; harga: number }) => {
    const existing = cart.find((item) => item.nama === prod.nama);
    if (existing) {
      setCart(cart.map((item) => (item.nama === prod.nama ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { ...prod, qty: 1 }]);
    }
  };

  const totalPrice = useMemo(() => cart.reduce((sum, item) => sum + item.harga * item.qty, 0), [cart]);

  // Handler Turnamen Drawing
  const handleAddPlayer = () => {
    if (newPlayer && !players.includes(newPlayer)) {
      setPlayers([...players, newPlayer]);
      setNewPlayer("");
    }
  };

  const handleDraw = () => {
    if (players.length < 2) return;
    const shuffled = [...players].sort(() => Math.random() - 0.5);
    const round: string[][] = [];
    for (let i = 0; i < shuffled.length; i += 2) {
      round.push([shuffled[i], shuffled[i + 1] || "BYE"]);
    }
    setBracket(round);
  };

  // --- 1. RENDER SIMULASI MASTER DATA (/anggota, /atlet, /pelatih) ---
  if (path === "/anggota" || path === "/atlet" || path === "/pelatih") {
    const defaultType = path === "/anggota" ? "Anggota" : path === "/atlet" ? "Atlet" : "Pelatih";
    return (
      <Box sx={{ p: 1 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
          Simulasi Master Data {defaultType} Terpadu
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          [Blueprint Halaman 1] Sistem KOPCenter Enterprise mengelola entitas terpusat dengan kendali otorisasi ketat.
        </Typography>

        {/* Menggunakan CSS Grid via Box untuk keamanan kompilasi 100% */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" }, gap: 3 }}>
          <Box sx={{ gridColumn: { xs: "span 12", md: "span 4" } }}>
            <Card sx={{ p: 3 }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Tambah Entitas {defaultType}
              </Typography>
              <form onSubmit={handleAddPerson}>
                <TextField
                  fullWidth
                  size="small"
                  label="Nama Lengkap"
                  value={newPerson.nama}
                  onChange={(e) => setNewPerson({ ...newPerson, nama: e.target.value })}
                  sx={{ mb: 2, mt: 1 }}
                />
                <TextField
                  fullWidth
                  size="small"
                  label="Nomor WhatsApp"
                  value={newPerson.kontak}
                  onChange={(e) => setNewPerson({ ...newPerson, kontak: e.target.value })}
                  sx={{ mb: 2 }}
                />
                <Button type="submit" variant="contained" fullWidth color="success">
                  Simpan ke Database
                </Button>
              </form>
            </Card>
          </Box>
          <Box sx={{ gridColumn: { xs: "span 12", md: "span 8" } }}>
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead sx={{ bgcolor: "action.hover" }}>
                  <TableRow>
                    <TableCell>ID Entitas</TableCell>
                    <TableCell>Nama</TableCell>
                    <TableCell>Kategori</TableCell>
                    <TableCell>Kontak</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {people
                    .filter((p) => p.tipe === defaultType)
                    .map((row) => (
                      <TableRow key={row.id}>
                        <TableCell sx={{ fontWeight: "bold", color: "primary.main" }}>{row.id}</TableCell>
                        <TableCell>{row.nama}</TableCell>
                        <TableCell>
                          <Chip label={row.tipe} size="small" color="primary" variant="outlined" />
                        </TableCell>
                        <TableCell>{row.kontak}</TableCell>
                        <TableCell>
                          <Chip label={row.status} size="small" color="success" />
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    );
  }

  // --- 2. RENDER SIMULASI PINJAMAN KOPERASI (/pinjaman) ---
  if (path === "/pinjaman") {
    const bungaBulan = 0.015; // 1.5% Flat
    const pokokBulanan = pinjamanAmount / tenor;
    const bungaBulanan = pinjamanAmount * bungaBulan;
    const totalAngsuran = pokokBulanan + bungaBulanan;

    return (
      <Box sx={{ p: 1 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
          Kalkulator & Pengajuan Pinjaman Koperasi
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          [Blueprint Halaman 1] Dilengkapi sistem persetujuan otomatis (*Approval engine*) yang terintegrasi.
        </Typography>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" }, gap: 3 }}>
          <Box sx={{ gridColumn: { xs: "span 12", md: "span 6" } }}>
            <Card sx={{ p: 3 }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Simulasi Nominal Pengajuan
              </Typography>
              <TextField
                fullWidth
                type="number"
                label="Jumlah Pinjaman (Rupiah)"
                value={pinjamanAmount}
                onChange={(e) => setPinjamanAmount(Number(e.target.value))}
                sx={{ my: 2 }}
              />
              <FormControl fullWidth size="small" sx={{ mb: 3 }}>
                <InputLabel id="tenor-label">Tenor Pengembalian</InputLabel>
                <Select
                  labelId="tenor-label"
                  value={tenor}
                  label="Tenor Pengembalian"
                  onChange={(e) => setTenor(Number(e.target.value))}
                >
                  <MenuItem value={6}>6 Bulan (Flat 1.5%)</MenuItem>
                  <MenuItem value={12}>12 Bulan (Flat 1.5%)</MenuItem>
                  <MenuItem value={24}>24 Bulan (Flat 1.5%)</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" fullWidth color="primary">
                Kirim Proposal Pinjaman
              </Button>
            </Card>
          </Box>
          <Box sx={{ gridColumn: { xs: "span 12", md: "span 6" } }}>
            <Card sx={{ p: 3, bgcolor: "action.hover" }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="secondary">
                Rincian Kewajiban Angsuran
              </Typography>
              <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2">Pokok Angsuran / Bulan:</Typography>
                  <Typography variant="body2" fontWeight="bold">Rp {pokokBulanan.toLocaleString("id-ID")}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2">Estimasi Bunga (1.5%) / Bulan:</Typography>
                  <Typography variant="body2" fontWeight="bold">Rp {bungaBulanan.toLocaleString("id-ID")}</Typography>
                </Box>
                <Divider />
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="subtitle1" fontWeight="bold">Total Angsuran Bulanan:</Typography>
                  <Typography variant="subtitle1" fontWeight="bold" color="success.main">
                    Rp {totalAngsuran.toLocaleString("id-ID")}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    );
  }

  // --- 3. RENDER SIMULASI POS KASIR (/kasir) ---
  if (path === "/kasir") {
    return (
      <Box sx={{ p: 1 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
          Simulasi Sistem Kasir POS & Retail
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          [Blueprint Halaman 1] Transaksi penjualan ritel perlengkapan pingpong langsung memotong stok inventori.
        </Typography>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" }, gap: 3 }}>
          <Box sx={{ gridColumn: { xs: "span 12", md: "span 7" } }}>
            <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 2 }}>Katalog Toko Koperasi</Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }}>
              {products.map((prod, idx) => (
                <Box key={idx} sx={{ gridColumn: "span 1" }}>
                  <Card sx={{ p: 2, border: "1px solid", borderColor: "divider" }}>
                    <Typography variant="body1" fontWeight="bold">{prod.nama}</Typography>
                    <Typography variant="body2" color="success.main" sx={{ my: 1 }}>
                      Rp {prod.harga.toLocaleString("id-ID")}
                    </Typography>
                    <Button size="small" variant="outlined" color="primary" onClick={() => addToCart(prod)}>
                      Tambah ke Kasir
                    </Button>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ gridColumn: { xs: "span 12", md: "span 5" } }}>
            <Card sx={{ p: 3 }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Keranjang Belanja</Typography>
              {cart.length === 0 ? (
                <Typography variant="body2" color="text.secondary" sx={{ my: 4, textAlign: "center" }}>
                  Keranjang masih kosong.
                </Typography>
              ) : (
                <Box>
                  <List>
                    {cart.map((item, idx) => (
                      <Box key={idx} sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                        <Typography variant="body2">{item.nama} (x{item.qty})</Typography>
                        <Typography variant="body2" fontWeight="bold">
                          Rp {(item.harga * item.qty).toLocaleString("id-ID")}
                        </Typography>
                      </Box>
                    ))}
                  </List>
                  <Divider sx={{ my: 1.5 }} />
                  <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" fontWeight="bold">Total Tagihan:</Typography>
                    <Typography variant="subtitle2" fontWeight="bold" color="primary">
                      Rp {totalPrice.toLocaleString("id-ID")}
                    </Typography>
                  </Box>
                  <TextField
                    fullWidth
                    size="small"
                    type="number"
                    label="Nominal Pembayaran (Cash)"
                    value={payment}
                    onChange={(e) => setPayment(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                  <Button
                    variant="contained"
                    fullWidth
                    color="success"
                    disabled={!payment || Number(payment) < totalPrice}
                    onClick={() => setShowReceipt(true)}
                  >
                    Cetak Struk Transaksi
                  </Button>
                </Box>
              )}

              {showReceipt && (
                <Paper variant="outlined" sx={{ p: 2, mt: 3, bgcolor: "action.hover", fontFamily: "monospace" }}>
                  <Typography variant="body2" fontWeight="bold" textAlign="center">=== STRUK BELANJA ===</Typography>
                  <Typography variant="body2" textAlign="center">OETAMA PINGPONG CENTER</Typography>
                  <Divider sx={{ my: 1, borderStyle: "dashed" }} />
                  {cart.map((item, idx) => (
                    <Typography key={idx} variant="caption" display="block">
                      {item.nama} x{item.qty} - Rp {(item.qty * item.harga).toLocaleString("id-ID")}
                    </Typography>
                  ))}
                  <Divider sx={{ my: 1, borderStyle: "dashed" }} />
                  <Typography variant="caption" display="block">TOTAL: Rp {totalPrice.toLocaleString("id-ID")}</Typography>
                  <Typography variant="caption" display="block">CASH: Rp {Number(payment).toLocaleString("id-ID")}</Typography>
                  <Typography variant="caption" display="block" sx={{ color: "success.main", fontWeight: "bold" }}>
                    KEMBALIAN: Rp {(Number(payment) - totalPrice).toLocaleString("id-ID")}
                  </Typography>
                </Paper>
              )}
            </Card>
          </Box>
        </Box>
      </Box>
    );
  }

  // --- 4. RENDER SIMULASI DRAWING TURNAMEN (/turnamen) ---
  if (path === "/turnamen") {
    return (
      <Box sx={{ p: 1 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
          Drawing & Bracket Maker Turnamen
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          [Blueprint Halaman 1] Penarikan bagan tanding turnamen pingpong internal secara adil & acak.
        </Typography>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" }, gap: 3 }}>
          <Box sx={{ gridColumn: { xs: "span 12", md: "span 5" } }}>
            <Card sx={{ p: 3 }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Pendaftaran Atlet Turnamen
              </Typography>
              <Box display="flex" gap={1} sx={{ my: 2 }}>
                <TextField
                  fullWidth
                  size="small"
                  label="Nama Pemain"
                  value={newPlayer}
                  onChange={(e) => setNewPlayer(e.target.value)}
                />
                <Button variant="contained" onClick={handleAddPlayer}>Daftar</Button>
              </Box>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>Daftar Atlet ({players.length}):</Typography>
              <Box sx={{ maxHeight: 150, overflowY: "auto", bgcolor: "action.hover", p: 1, borderRadius: 1 }}>
                {players.map((p, idx) => (
                  <Chip key={idx} label={p} size="small" sx={{ m: 0.5 }} onDelete={() => setPlayers(players.filter((x) => x !== p))} />
                ))}
              </Box>
              <Button variant="contained" color="success" fullWidth sx={{ mt: 3 }} onClick={handleDraw}>
                Acak Bagan Tanding (Draw)
              </Button>
            </Card>
          </Box>

          <Box sx={{ gridColumn: { xs: "span 12", md: "span 7" } }}>
            <Card sx={{ p: 3 }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Bagan Tanding Pertandingan
              </Typography>
              {bracket.length === 0 ? (
                <Typography variant="body2" color="text.secondary" sx={{ my: 4 }}>
                  Belum ada bagan. Daftarkan pemain minimal 2 orang lalu jalankan "Acak Bagan Tanding".
                </Typography>
              ) : (
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2, mt: 1 }}>
                  {bracket.map((match, idx) => (
                    <Box key={idx} sx={{ gridColumn: "span 1" }}>
                      <Box sx={{ p: 2, border: "1px solid", borderColor: "primary.main", borderRadius: 2, bgcolor: "action.hover" }}>
                        <Typography variant="caption" fontWeight="bold" color="primary">ROUND 1 - GAME {idx + 1}</Typography>
                        <Box sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 1 }}>
                          <Box display="flex" justifyContent="space-between" bgcolor="background.paper" p={1} borderRadius={1}>
                            <Typography variant="body2">{match[0]}</Typography>
                            <SportsTennis color="action" fontSize="small" />
                          </Box>
                          <Typography variant="caption" textAlign="center" color="text.secondary">VS</Typography>
                          <Box display="flex" justifyContent="space-between" bgcolor="background.paper" p={1} borderRadius={1}>
                            <Typography variant="body2">{match[1]}</Typography>
                            <SportsTennis color="action" fontSize="small" />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              )}
            </Card>
          </Box>
        </Box>
      </Box>
    );
  }

  // --- 5. RENDER DEFAULT COMING SOON ---
  const menuTitle = path.replace("/", "").replace("-", " ").toUpperCase();

  return (
    <Box
      sx={{
        p: 4,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
      }}
    >
      <Casino sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
      <Typography variant="h5" fontWeight="bold" gutterBottom color="text.primary">
        Modul "{menuTitle || "KOPCenter Module"}" Terpasang
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 500, mb: 4 }}>
        Fitur ini telah dikonfigurasi dan dipetakan dalam menu Sidebar. Logika tampilan interaktif sedang disinkronisasikan ke backend API Express 5 & Prisma 7 kamu.
      </Typography>

      <Box sx={{ width: "100%", maxWidth: 400 }}>
        <LinearProgress color="primary" />
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
          Status Integrasi Rute: <strong className="text-emerald-500">SIAP DIHUBUNGKAN</strong>
        </Typography>
      </Box>
    </Box>
  );
}