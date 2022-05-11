import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import moment from "moment";
import { useTranslation } from "react-i18next";

import useCovidCases from "./useCovidCases";
import CustomSelect from "components/CustomSelect";
import { Typography } from "@mui/material";
import Header from "./header";

interface Column {
  id:
    | "#"
    | "country"
    | "city"
    | "continent"
    | "population"
    | "life_expectancy"
    | "confirmed"
    | "deaths"
    | "updated_at";
  label: any;
  minWidth?: number;
  align?: "right" | "left" | "center";
  format?: (value: number | string | Date) => string;
}

const Home = () => {
  const {
    data,
    summary,
    isLoading,
    countries,
    continents,
    selectedContinent,
    selectCountry,
    getCountryCases,
    getContinentCases,
  } = useCovidCases();
  const { t } = useTranslation();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const columns: readonly Column[] = [
    { id: "#", label: "#", minWidth: 40 },
    {
      id: "country",
      label: t("home.table.column.country"),
      align: "left",
    },
    {
      id: "city",
      label: t("home.table.column.city"),
      align: "left",
    },
    {
      id: "continent",
      label: t("home.table.column.continent"),
      align: "left",
    },
    {
      id: "population",
      label: t("home.table.column.population"),
      align: "right",
    },
    {
      id: "life_expectancy",
      label: t("home.table.column.life_expectancy"),
      align: "right",
      format: (value: number) => value.toFixed(2),
    },
    {
      id: "confirmed",
      label: t("home.table.column.confirmed"),
      align: "right",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "deaths",
      label: t("home.table.column.deaths"),
      align: "right",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "updated_at",
      label: t("home.table.column.last_update"),
      align: "right",
    },
  ];

  const rows = [
    ...data.map((item, index) => ({
      "#": index + 1,
      country: item.country,
      city: item.city,
      continent: item.continent,
      population: item.population,
      life_expectancy: item.life_expectancy,
      confirmed: item.confirmed,
      deaths: item.deaths,
      updated_at: item.updated_at
        ? moment(item.updated_at).format("D/MM/YYYY")
        : "N/A",
    })),
  ];

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (isLoading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <>
      <Header summary={summary} />
      <Box sx={{ width: "100%" }} mb={2}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <CustomSelect
              value={selectCountry}
              callback={getCountryCases}
              options={countries}
              id="countries-select"
              label={t("home.select.country")}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomSelect
              value={selectedContinent}
              callback={getContinentCases}
              options={continents}
              id="continents-select"
              label={t("home.select.continent")}
            />
          </Grid>
        </Grid>
        <Typography variant="subtitle2" component={'span'}>
          {t("home.select.hint")}
        </Typography>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row["#"]}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};
export default Home;
