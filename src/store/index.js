import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/navSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    nav: navReducer,
  },
});
