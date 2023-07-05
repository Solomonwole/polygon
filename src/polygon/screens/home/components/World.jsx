import React from "react";
import Container from "../../../../mui/Container";
import { Box, Typography, Button } from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";
import WorldImage from "../../../../assets/world.png";

function World() {
  return (
    <>
      <Box
        pt={5}
        pb={5}
        sx={{
          background: "linear-gradient(180deg, #0F0E11 0%, #0A090D 21.76%)",
        }}
      >
        <Container>
          <Typography variant="h2" color="textPrimary.main" align="center">
            Hello world,
          </Typography>
          <Typography variant="h2" color="textPrimary.main" align="center">
            goodbye emissions
          </Typography>

          <Box
            mt={7}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="body1"
              color="textSecondary.main"
              width={{ sm: "50%" }}
            >
              We are leveraging our core blockchain solutions and services to be
              proactive in the fight against climate change.{" "}
              <Typography
                component="span"
                variant="body1"
                color="textPrimary.main"
              >
                Polygon is carbon neutral
              </Typography>
              , with plans to be climate positive.
            </Typography>

            <Button
             
              variant="contained"
              color="primary"
              sx={{
                height: "44px",
                background: "linear-gradient(100deg, #00993D 0%, #0070C0 100%)",
                marginTop: "20px"
              }}
            >
              Read More <FiArrowUpRight />
            </Button>

            <Box>
              <img src={WorldImage} alt="" />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default World;
