import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeSection: 'about',
  isSidebarOpen: true,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setSidebarOpen: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setActiveSection, toggleSidebar, setSidebarOpen } = navSlice.actions;
export default navSlice.reducer;
