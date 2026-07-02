import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  sidebarOpen: boolean;
  darkMode: boolean;
  loading: boolean;
}

const initialState: UIState = {
  sidebarOpen: true,
  darkMode: false,
  loading: false,
};

const uiSlice = createSlice({
  name: "ui",

  initialState,

  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },

    openSidebar(state) {
      state.sidebarOpen = true;
    },

    closeSidebar(state) {
      state.sidebarOpen = false;
    },

    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  openSidebar,
  closeSidebar,
  toggleDarkMode,
  setLoading,
} = uiSlice.actions;

export default uiSlice.reducer;