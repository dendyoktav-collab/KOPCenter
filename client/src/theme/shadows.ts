import type { Shadows } from "@mui/material/styles";

const shadows: Shadows = [
  "none",

  "0px 2px 4px rgba(0,0,0,.05)",
  "0px 3px 6px rgba(0,0,0,.06)",
  "0px 4px 8px rgba(0,0,0,.07)",
  "0px 6px 12px rgba(0,0,0,.08)",
  "0px 8px 16px rgba(0,0,0,.09)",
  "0px 10px 20px rgba(0,0,0,.10)",
  "0px 12px 24px rgba(0,0,0,.11)",
  "0px 14px 28px rgba(0,0,0,.12)",
  "0px 16px 32px rgba(0,0,0,.13)",

  ...Array(15).fill("0px 16px 32px rgba(0,0,0,.13)")
] as Shadows;

export default shadows;