import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ThemeContext from "contexts/ThemeContext";
import TopBar from "components/TopBar";
import Routes from "routes";
import Footer from "components/Footer";

export default function App() {
  return (
    <ThemeContext>
      <CssBaseline />
      <TopBar />
      <Container>
        <Box style={{marginTop: "80px"}} sx={{ my: 2 }}>
          <Routes />
        </Box>
      </Container>
      <Footer />
    </ThemeContext>
  );
}
