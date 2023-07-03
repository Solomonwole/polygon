import { Box } from "@mui/material";
import React from "react";

function Container({ children }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1152px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      {children}
    </Box>
  );
}

export default Container;
