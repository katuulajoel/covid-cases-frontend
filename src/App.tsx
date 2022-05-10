import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import GlobalStyle from "./theme/global";
import ThemeContext from "./contexts/ThemeContext";
import AppBar from "./components/AppBar";

export default function App() {

  return (
    <ThemeContext>
      <GlobalStyle />
      <CssBaseline />
      <AppBar />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(48)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </ThemeContext>
  );
}
