import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TStore } from "redux/store";
import { toggleTheme } from "redux/theme/themeSlice";

import { THEMES } from "theme";

export const useThemeMode = (): { theme: THEMES; themeToggler: () => void } => {
  const { theme } = useSelector((state: TStore) => state.theme);
  const dispatch = useDispatch();

  const themeToggler = () => {
    dispatch(toggleTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));
  };

  return { theme, themeToggler };
};

export default useThemeMode;
