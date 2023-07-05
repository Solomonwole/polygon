import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import React from "react";
import theme from "../../../../mui/theme";
import Box1 from "../../../../assets/box1.png";
import Box3 from "../../../../assets/box3.png";
import Box4 from "../../../../assets/box4.png";
import Box5 from "../../../../assets/box5.png";
import Container from "../../../../mui/Container";

function Sleeves() {
  return (
    <Box mb={10} mt={10}>
      <Container>
        <Typography variant="h2" color={theme.palette.textPrimary.main}>
          Time to roll up your sleeves
        </Typography>

        <Box mt={5}>
          <Box
            sx={{
              display: "grid",
              columnGap: 3,
              rowGap: 3,
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            }}
          >
            <BoxDisplay
              src={Box1}
              title="Connect IRL"
              text=" Meet up with our community at hackathons, conferences, and events
            worldwide."
              btn="View Events"
            />
            <BoxDisplay
              src={Box3}
              title="Explore MATIC"
              text="MATIC is the currency of Polygon that enables users to interact with
              tens of thousands of dApps in our ecosystem."
              btn="Learn More"
            />
            <BoxDisplay
              src={Box4}
              title="Govern"
              text="Participate in shaping Polygon protocols."
              btn="Learn More"
            />
            <BoxDisplay
              src={Box5}
              title="Build on Polygon"
              text="Get to know our modular, flexible framework that provides solutions
              and supports building a variety of applications."
              btn="Developer Docs"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Sleeves;

function BoxDisplay({ src, title, text, btn }) {
  return (
    <Grid xs={12} md={6}>
      <Box
        sx={{
          background: "linear-gradient(180deg, #1B181F 0%, #0E0C12 100%)",
          borderRadius: "12px",
          height: "552px",
          width: "100%",
          padding: "20px",
        }}
      >
        <Stack spacing={2}>
          <img src={src} alt="" style={{ width: "60%" }} />
          <Typography
            variant="h3"
            color={theme.palette.textPrimary.main}
            mt={6}
          >
            {title}
          </Typography>

          <Typography variant="body1" color={theme.palette.textSecondary.main}>
            {text}
          </Typography>

          <Typography variant="body1" color={theme.palette.textPrimary.main}>
            {btn}
          </Typography>
        </Stack>
      </Box>
    </Grid>
  );
}
