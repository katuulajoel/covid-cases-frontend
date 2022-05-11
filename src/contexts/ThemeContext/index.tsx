import React, { useEffect } from "react";
import { useThemeMode } from "hooks/useThemeMode";
import { ThemeProvider } from "@mui/material";
import muiTheme, { SettingsType } from "theme";

interface Props {
  children: React.ReactNode;
}

const ThemeContext: React.FC = ({ children }: Props) => {
  const { theme } = useThemeMode();
  const settings: SettingsType = { theme };

  return (
    <ThemeProvider theme={muiTheme(settings)}>
      <>{children}</>
    </ThemeProvider>
  );
};

export default ThemeContext;
