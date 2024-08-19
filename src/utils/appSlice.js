import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isSidebarCompact: false, 
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    toggleSidebarCompact: (state) => {
      state.isSidebarCompact = !state.isSidebarCompact;
    }
  },
});

export const { toggleMenu, closeMenu, toggleSidebarCompact } = appSlice.actions;
export default appSlice.reducer;



