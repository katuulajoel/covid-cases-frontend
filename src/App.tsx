import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ThemeContext from "contexts/ThemeContext";
import TopBar from "components/TopBar";
import Routes from "routes";

export default function App() {
  return (
    <ThemeContext>
      <CssBaseline />
      <TopBar />
      <Container>
        <Box sx={{ my: 2 }}>
          <Routes />
        </Box>
      </Container>
    </ThemeContext>
  );
}
