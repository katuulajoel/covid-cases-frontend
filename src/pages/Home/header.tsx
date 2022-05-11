import { FC, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

import { SummaryProps } from "./types";

const Header = ({ summary }: { summary: SummaryProps[] }) => {
  const { t } = useTranslation();

  const { deaths, confirmed } = useMemo(() => {
    return (summary || []).reduce(
      (previousValue, currentValue) => {
        return {
          deaths: previousValue.deaths + currentValue.deaths,
          confirmed: previousValue.confirmed + currentValue.confirmed,
        };
      },
      { deaths: 0, confirmed: 0 }
    );
  }, [summary]);

  return (
    <S.HeaderContainer>
      <Box sx={{ width: "100%" }} mb={6} mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h2" component="h2" align="center" sx={{ color: 'info.main' }}>
              {confirmed.toLocaleString("en-US")}
            </Typography>
            <Typography variant="subtitle1" component="p" align="center" sx={{ color: 'info.main' }}>
              {t("home.header.confirmed")}
            </Typography>
            <Typography variant="body1" component="p" align="center">
              {t("home.header.confirmed.description")}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h2" component="h2" align="center" sx={{ color: 'secondary.main' }}>
              {deaths.toLocaleString("en-US")}
            </Typography>
            <Typography variant="subtitle1" component="p" align="center" sx={{ color: 'secondary.main' }}>
              {t("home.header.deaths")}
            </Typography>
            <Typography variant="body1" component="p" align="center">
              {t("home.header.deaths.description")}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </S.HeaderContainer>
  );
};

export default Header;
