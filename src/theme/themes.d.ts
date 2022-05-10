import { Palette, Theme, PaletteMode } from "@mui/material";
import {
  SimplePaletteColorOptions,
  TypeText,
} from "@mui/material/styles/createPalette";

export interface CTheme extends Omit<Theme, "palette"> {
  palette: ThemeColors;
  themeName?: string;
}

export interface ThemeColors {
  mode: PaletteMode;
  background: Partial<{ default: string; dark: string; paper: string }>;
  common: {
    white: string;
    black: string;
  };
  primary: SimplePaletteColorOptions;
  secondary: SimplePaletteColorOptions;
  text: Partial<TypeText & { dark: string; light: string }>;
  error?: SimplePaletteColorOptions;
  success?: SimplePaletteColorOptions;
  link: SimplePaletteColorOptions;
  border: SimplePaletteColorOptions;
  switch: {
    thumb: string;
    base: string;
  };
}
