import { CTheme, ThemeColors } from "./themes";
import { alpha, colors } from "@mui/material";

export const palette: ThemeColors = {
  mode: "light",
  background: {
    default: colors.common.white,
    dark: "#f4f6f8",
    paper: colors.common.white,
  },
  common: {
    white: colors.common.white,
    black: colors.common.black,
  },
  text: {
    primary: "#253858",
    secondary: alpha("#42526E", 0.86),
    dark: "#253858",
    light: "#253858",
  },
  switch: {
    thumb: "#001e3c",
    base: "#aab4be",
  },
};

const lightTheme: Partial<CTheme> = {
  palette,
};

export default lightTheme;
