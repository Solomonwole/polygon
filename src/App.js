import React from "react";
import PageRoutes from "./router/PageRoutes";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./mui/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageRoutes />
    </ThemeProvider>
  );
}

export default App;
