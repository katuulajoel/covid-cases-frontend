import { useDispatch } from "react-redux";
import { toggleTheme } from "contexts/ThemeContext/themeSlice";

import { THEMES } from "theme";
import useTypedSelector from "./useTypedSelector";

export const useThemeMode = (): { theme: THEMES; themeToggler: () => void } => {
  const { theme } = useTypedSelector((state) => state.theme);
  const dispatch = useDispatch();

  const themeToggler = () => {
    dispatch(toggleTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));
  };

  return { theme, themeToggler };
};

export default useThemeMode;
