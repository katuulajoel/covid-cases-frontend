import { configureStore } from "@reduxjs/toolkit";
import theme from "redux/theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme,
  },
});

export type TStore = ReturnType<typeof store.getState>;

export default store;