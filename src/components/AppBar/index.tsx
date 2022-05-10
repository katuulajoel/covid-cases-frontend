import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import FormControlLabel from "@mui/material/FormControlLabel";
import useThemeMode from "hooks/useThemeMode";

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

function AppBar() {
  const { themeToggler } = useThemeMode();
  return (
    <ElevationScroll>
      <S.Container>
        <Toolbar>
          <Typography variant="h6" component="div">
            Scroll to elevate App bar
          </Typography>

          <FormControlLabel
            control={<S.MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
            label="MUI switch"
            onClick={themeToggler}
          />
        </Toolbar>
      </S.Container>
    </ElevationScroll>
  );
}

export default AppBar;
