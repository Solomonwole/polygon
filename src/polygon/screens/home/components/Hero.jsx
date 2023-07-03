import React from "react";
import { useTheme } from "@mui/material/styles";
import Container from "../../../../mui/Container";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import HeroBg from "../../../../assets/herobg.png";
import { BsArrowRightShort } from "react-icons/bs";

function Hero() {
  const theme = useTheme();
  return (
    <Container>
      <Box
        display={{ xs: "none", sm: "flex" }}
        sx={{
          position: "absolute",
          top: { sm: 0 },
          left: 0,
        }}
      >
        <img
          src={HeroBg}
          alt=""
          style={{
            width: "95%",
          }}
        />
      </Box>

      <Box
        mt={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "234.13px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            background: "rgba(255, 255, 255, 0.08)",
            borderRadius: "12px",
            padding: "9px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            color={theme.palette.textPrimary.main}
            mr={1}
          >
            Announcing Polygon 2.0
          </Typography>
          <Box
            sx={{
              background: "rgba(117, 60, 216, 0.80)",
              border: "2px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BsArrowRightShort
              color={theme.palette.textPrimary.main}
              fontSize="20px"
            />
          </Box>
        </Box>

        <Typography
          mt={3}
          variant="h1"
          color={theme.palette.textPrimary.main}
          align="center"
        >
          The Value Layer of the Internet
        </Typography>

        <Typography
          width="100%"
          maxWidth="600px"
          mt={3}
          variant="h5"
          color={theme.palette.textPrimary.main}
          align="center"
          paragraph
        >
          The fundamental protocol that allows anyone to create and exchange
          value, powered by zero-knowledge technology.
        </Typography>

        <Box
          mt={8}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
            rowGap: "16px",
            columnGap: "16px",
          }}
        >
          <BoxTemplate
            title="Build"
            text="Get access to our documents, and start building."
          />
          <BoxTemplate
            title="Stake"
            text="Participate in securing the network by delegating MATIC tokens"
          />
          <BoxTemplate
            title="Use Polygon"
            text="Bridge, Swap and Manage your assets on Polygon"
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Hero;

function BoxTemplate({ title, text }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        background: "rgba(255, 255, 255, 0.08)",
        height: "173.97px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "33px"
      }}
    >
      <Stack spacing={1}>
        <Typography variant="h2" color={theme.palette.textPrimary.main}>
          {title}
        </Typography>
        <Typography variant="body1" color={theme.palette.textPrimary.main}>
          {text}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              background: "rgba(117, 60, 216, 0.80)",
              border: "2px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BsArrowRightShort
              color={theme.palette.textPrimary.main}
              fontSize="20px"
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
