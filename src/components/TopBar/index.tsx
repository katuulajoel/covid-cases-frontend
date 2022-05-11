import React, { useMemo } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import FormControlLabel from "@mui/material/FormControlLabel";
import useThemeMode from "hooks/useThemeMode";
import { useTranslation } from "react-i18next";
import logo from "assets/images/logo.zenysis.png";
import { useLocation } from "react-router-dom";

import capitalizeFirstLetter from "utilities/string";

import * as S from "./styles";

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function TopBar() {
  const location = useLocation()
  const { theme, themeToggler } = useThemeMode();
  const { t } = useTranslation();

  const currentRoute = useMemo(() => {
    return decodeURI(location.pathname.slice(1));
  }, [location.pathname]);

  return (
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <S.ImageLogo src={logo} alt="logo" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              
              {currentRoute || t("appbar.title")}
            </Typography>

            <FormControlLabel
              control={<S.MaterialUISwitch sx={{ m: 1 }} defaultChecked={false} />}
              label={t("appbar.theme_switch", { theme: capitalizeFirstLetter(theme) })}
              onClick={themeToggler}
            />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
  );
}

export default TopBar;
