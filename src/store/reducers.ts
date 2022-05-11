import { combineReducers } from "@reduxjs/toolkit";
import theme from "contexts/ThemeContext/themeSlice";
import covidCasesSlice from "pages/Home/covidCasesSlice";

const appReducer = combineReducers({
  theme,
  covidCases: covidCasesSlice,
});

export type RootState = ReturnType<typeof appReducer>;
export default appReducer;
