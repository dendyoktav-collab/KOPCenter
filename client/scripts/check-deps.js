const fs = require('fs');
const path = require('path');

// Tentukan path ke package.json milik client dan server
const clientPkgPath = path.join(__dirname, 'client', 'package.json');
const serverPkgPath = path.join(__dirname, 'server', 'package.json');

console.log('====================================================');
console.log('      PEMINDAI VERSI DEPENDENSI KOPCENTER           ');
console.log('====================================================\n');

let clientData = {}, serverData = {};

// Baca package.json Client
if (fs.existsSync(clientPkgPath)) {
  clientData = JSON.parse(fs.readFileSync(clientPkgPath, 'utf8'));
  console.log('✔️  Berhasil membaca package.json [CLIENT]');
} else {
  console.log('❌ Gagal: file client/package.json tidak ditemukan!');
}

// Baca package.json Server
if (fs.existsSync(serverPkgPath)) {
  serverData = JSON.parse(fs.readFileSync(serverPkgPath, 'utf8'));
  console.log('✔️  Berhasil membaca package.json [SERVER]');
} else {
  console.log('❌ Gagal: file server/package.json tidak ditemukan!');
}

console.log('\n----------------------------------------------------');
console.log('          PERBANDINGAN PAKET SENSITIF               ');
console.log('----------------------------------------------------');
console.log('Beberapa paket penting harus memiliki versi yang sama/kompatibel:\n');

const clientDeps = { ...clientData.dependencies, ...clientData.devDependencies };
const serverDeps = { ...serverData.dependencies, ...serverData.devDependencies };

// Daftar paket yang sering dipakai di kedua sisi dan rawan konflik jika versinya jauh berbeda
const targetPackages = [
  'axios',
  'dotenv',
  'jsonwebtoken',
  'typescript',
  'eslint',
  'prettier'
];

console.log(String('Nama Paket').padEnd(20) + ' | ' + String('Versi Client (pnpm)').padEnd(22) + ' | ' + String('Versi Server (npm)'));
console.log('-'.repeat(70));

targetPackages.forEach(pkg => {
  const clientVer = clientDeps[pkg] || 'Tidak Terinstal';
  const serverVer = serverDeps[pkg] || 'Tidak Terinstal';
  console.log(pkg.padEnd(20) + ' | ' + clientVer.padEnd(22) + ' | ' + serverVer);
});

console.log('\n----------------------------------------------------');
console.log('            DAFTAR SEMUA DEPENDENSI                 ');
console.log('----------------------------------------------------');

console.log('\n[CLIENT] Pustaka Utama yang Terpasang:');
if (clientData.dependencies) {
  Object.entries(clientData.dependencies).forEach(([pkg, ver]) => {
    console.log(`  - ${pkg}: ${ver}`);
  });
} else {
  console.log('  (Tidak ada dependensi utama)');
}

console.log('\n[SERVER] Pustaka Utama yang Terpasang:');
if (serverData.dependencies) {
  Object.entries(serverData.dependencies).forEach(([pkg, ver]) => {
    console.log(`  - ${pkg}: ${ver}`);
  });
} else {
  console.log('  (Tidak ada dependensi utama)');
}

console.log('\n====================================================');
