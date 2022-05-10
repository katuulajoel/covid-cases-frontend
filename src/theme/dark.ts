import { CTheme, ThemeColors } from "./themes";
import { alpha, colors } from "@mui/material";

export const palette: ThemeColors = {
  mode: "dark",
  background: {
    default: "#282C34",
    dark: "#1c2025",
    paper: "#282C34",
  },
  common: {
    white: colors.common.white,
    black: colors.common.black,
  },
  text: {
    primary: "#e6e5e8",
    secondary: "#adb0bb",
    dark: "#253858",
    light: "#adb0bb",
  },
  switch: {
    thumb: "#003892",
    base: "#8796A5",
  },
};

const darkTheme: Partial<CTheme> = {
    palette,
  };
  
  export default darkTheme;
