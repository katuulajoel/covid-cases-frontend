import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { THEMES } from "theme";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: THEMES.LIGHT,
  },
  reducers: {
    toggleTheme: (state, { payload }: PayloadAction<THEMES>) => {
      state.theme = payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;