import React from "react";
import Hero from "./components/Hero";
import { Box } from "@mui/material";

function HomePage() {
  return (
    <Box
      sx={{
        overflowX: "hidden",
      }}
    >
      <Hero />
    </Box>
  );
}

export default HomePage;
