import React from "react";
import Hero from "./components/Hero";
import { Box } from "@mui/material";
import Dates from "./components/Dates";
import Technology from "./components/technology";
import World from "./components/World";
import Sleeves from "./components/Sleeves";

function HomePage() {
  return (
    <Box
      sx={{
        overflowX: "hidden",
      }}
    >
      <Hero />
      <Dates />
      <Technology />
      <World />
      <Sleeves />
    </Box>
  );
}

export default HomePage;
