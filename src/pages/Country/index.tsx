import useCovidCases from "pages/Home/useCovidCases";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PeopleIcon from "@mui/icons-material/People";
import PublicIcon from "@mui/icons-material/Public";
import { useNavigate, useParams } from "react-router-dom";
import Header from "pages/Home/header";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { useTranslation } from "react-i18next";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Button from "@mui/material/Button";

const Country = () => {
  const params = useParams();
  const { filteredCountry } = useCovidCases(params.country);
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Button
        variant="contained"
        startIcon={<KeyboardBackspaceIcon />}
        color="secondary"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </Button>
      <Header
        summary={[
          {
            continent: null,
            deaths: filteredCountry?.deaths,
            confirmed: filteredCountry?.confirmed,
          },
        ]}
      />

      <Divider variant="middle" />

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationCityIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={t("home.table.column.city")}
                secondary={filteredCountry?.city}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PublicIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={t("home.table.column.continent")}
                secondary={filteredCountry?.continent}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PeopleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={t("home.table.column.population")}
                secondary={filteredCountry?.population.toLocaleString("en-US")}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocalHospitalIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={t("home.table.column.life_expectancy")}
                secondary={filteredCountry?.life_expectancy.toFixed(2)}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
};
export default Country;
