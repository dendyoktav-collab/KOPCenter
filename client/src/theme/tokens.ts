// ======================================================
// KOPCenter Enterprise Design Tokens
// Version : 1.0
// ======================================================

export const tokens = {
  layout: {
    sidebarWidth: 288,
    sidebarCollapsedWidth: 88,
    headerHeight: 72,
    pageMaxWidth: 1600,
    pagePadding: 24,
  },

  radius: {
    xs: 6,
    sm: 10,
    md: 14,
    lg: 20,
    xl: 24,
    round: 999,
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },

  transition: {
    fast: "150ms ease",
    normal: "250ms ease",
    slow: "350ms ease",
  },

  shadow: {
    sm: "0 1px 2px rgba(15,23,42,.05)",
    md: "0 4px 12px rgba(15,23,42,.08)",
    lg: "0 12px 30px rgba(15,23,42,.12)",
  },

  zIndex: {
    sidebar: 1200,
    header: 1300,
    drawer: 1400,
    dialog: 1500,
  },
};

export default tokens;