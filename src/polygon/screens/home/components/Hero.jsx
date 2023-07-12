import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Container from "../../../../mui/Container";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Button,
  useMediaQuery,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import HeroBg from "../../../../assets/herobg.png";
import { BsArrowRightShort } from "react-icons/bs";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

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
          zIndex: -1,
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
            link="https://polygon.technology/developers"
          />
          <BoxTemplate
            title="Stake"
            text="Participate in securing the network by delegating MATIC tokens"
            link="https://staking.polygun.technology"
          />
          <BoxTemplate
            title="Use Polygon"
            text="Bridge, Swap and Manage your assets on Polygon"
            link="https://wallet.polygun.technology/"
          />
        </Box>

        {/* Carousel */}
        <Box mt={10} mb={10} pl={20} pr={20}>
          <VideoCarousel />
        </Box>
      </Box>
    </Container>
  );
}

export default Hero;

function BoxTemplate({ link, title, text }) {
  const theme = useTheme();
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer">
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
            padding: "33px",
            transition: "background-color .2s",
            cursor: "pointer",
            zIndex: 8,

            "&:hover": {
              background: "rgba(255, 255, 255, 0.329)",
            },
          }}
        >
          <Stack spacing={1}>
            <Typography variant="h3" color={theme.palette.textPrimary.main}>
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
                  background: "rgba(255, 255, 255, 0.07)",
                  borderRadius: "50%",
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.329)",
                  },
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
      </a>
    </>
  );
}

const VideoCarousel = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    {
      src: "https://player.vimeo.com/progressive_redirect/playback/791795335/rendition/540p/file.mp4?loc=external&signature=45bb011e187fd5902a3ef8eb09407329655b6dee25b509cf7af497ebf0abc5e4",
      title:
        "Threely is making Web3 accessible, intuitive, and fluent to everyone",
    },
    {
      src: "https://player.vimeo.com/progressive_redirect/playback/791794530/rendition/540p/file.mp4?loc=external&signature=fc10a3613bf49e6fd6ed64d1280009defc2b7e7e3a82be70ef044dd11f45da03",
      title:
        "Threely is making Web3 accessible, intuitive, and fluent to everyone",
    },
    {
      src: "https://player.vimeo.com/progressive_redirect/playback/791795339/rendition/540p/file.mp4?loc=external&signature=68b0b7f0f15d59104b6e01a83de048efd1ea214ed93922f31213170180f92407",
      title:
        "Threely is making Web3 accessible, intuitive, and fluent to everyone",
    },
    {
      src: "https://player.vimeo.com/progressive_redirect/playback/791794406/rendition/540p/file.mp4?loc=external&signature=384ae82f88403e28eb25530f40eb13cd8bc0b686da7ff0c41b79731f8a2643d2",
      title:
        "Threely is making Web3 accessible, intuitive, and fluent to everyone",
    },
    {
      src: "https://player.vimeo.com/progressive_redirect/playback/791794310/rendition/540p/file.mp4?loc=external&signature=3de6cbf7d71ebd2559d86f3bdc947854793c7bb287a6ae3a8ca58f54c8f7c3c8",
      title:
        "Threely is making Web3 accessible, intuitive, and fluent to everyone",
    },
  ];

  const handlePreviousVideo = () => {
    setCurrentVideo((prevVideo) =>
      prevVideo === 0 ? videos.length - 1 : prevVideo - 1
    );
  };

  const handleNextVideo = () => {
    setCurrentVideo((prevVideo) =>
      prevVideo === videos.length - 1 ? 0 : prevVideo + 1
    );
  };

  return (
    <Stack>
      <Box display="flex" alignItems="center" justifyContent="center">
        <IconButton
          sx={{
            display: { xs: "none", sm: "flex" },
            background: "rgba(255, 255, 255, 0.10)",
            width: "48px",
            height: "48px",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.10)",
            },
          }}
          onClick={handlePreviousVideo}
        >
          <HiOutlineArrowNarrowLeft color="#fff" />
        </IconButton>

        <Card
          sx={{
            width: { xs: 400, sm: 1000 },
            flexGrow: 1,
            height: "400px",
            margin: "0 10px",
            borderRadius: "8px",
            background: "#000",
            position: "relative",
          }}
        >
          <CardActionArea>
            <video
              autoPlay
              loop
              muted
              poster="https://assets-global.website-files.com/637359c81e22b715cec245ad/63bf778a7212648500e9d6ff_Sizzle%20Reel%20threely-p-500.webp 500w, https://assets-global.website-files.com/637359c81e22b715cec245ad/63bf778a7212648500e9d6ff_Sizzle%20Reel%20threely.webp 721w"
              style={{
                width: "100%",
                height: "400px",
                borderRadius: "8px",
                objectFit: "cover",
                objectPosition: "center",
                opacity: 0.4,
                zIndex: -1,
              }}
            >
              <source src={videos[currentVideo].src} type="video/mp4" />
            </video>
          </CardActionArea>

          <CardContent
            sx={{
              position: "absolute",
              bottom: 0,
              zIndex: 5,
            }}
          >
            <Stack
              direction={{ sm: "row" }}
              spacing={1}
              alignItems={{ sm: "center" }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                color="white"
                mt={{ xs: 2, sm: 3 }}
              >
                {videos[currentVideo].title}
              </Typography>

              <Button variant="contained" color="primary">
                Learn more
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <IconButton
          sx={{
            display: { xs: "none", sm: "flex" },
            background: "rgba(255, 255, 255, 0.10)",
            width: "48px",
            height: "48px",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.10)",
            },
          }}
          onClick={handleNextVideo}
        >
          <HiOutlineArrowNarrowRight color="#fff" />
        </IconButton>
      </Box>

      {/* Mobile Buttons  */}
      <Box
        display={{ xs: "flex", sm: "none" }}
        justifyContent="flex-end"
        mt={3}
      >
        <IconButton
          sx={{
            background: "rgba(255, 255, 255, 0.10)",
            marginRight: "10px",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.10)",
            },
          }}
          onClick={handlePreviousVideo}
        >
          <HiOutlineArrowNarrowLeft color="#fff" />
        </IconButton>
        <IconButton
          sx={{
            background: "rgba(255, 255, 255, 0.10)",
            marginRight: "10px",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.10)",
            },
          }}
          onClick={handleNextVideo}
        >
          <HiOutlineArrowNarrowRight color="#fff" />
        </IconButton>
      </Box>
    </Stack>
  );
};
