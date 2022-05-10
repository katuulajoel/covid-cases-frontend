import { combineReducers } from "@reduxjs/toolkit";
import theme from "contexts/ThemeContext/themeSlice";

const appReducer = combineReducers({
  theme: theme,
});

export type RootState = ReturnType<typeof appReducer>;
export default appReducer;
