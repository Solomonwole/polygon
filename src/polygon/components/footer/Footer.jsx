import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import theme from "../../../mui/theme";
import { Logo } from "../../../assets/assets";
import {
  BsDiscord,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsReddit,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import FootImage from "../../../assets/foot.png";

const Footer = () => {
  return (
    <Box component="footer">
      <Box
        mb={10}
        sx={{
          backgroundImage: `url(${FootImage})`,
          backgroundSize: "cover",
          height: 375,
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <Typography variant="caption" color="#7B3FE4">
              STAY UP TO DATE
            </Typography>
            <Typography variant="h3" color={theme.palette.textPrimary.main}>
              Get our newsletter
            </Typography>
            <TextField
              //   label="Enter your email"
              placeholder="Enter your email"
              sx={{
                width: { xs: "80%", md: "241px" },
                height: "60px",
                color: theme.palette.textPrimary.main,
                border: "1px solid #2D2C33",
              }}
              InputProps={{
                style: {
                  color: theme.palette.textPrimary.main,
                  borderColor: "transparent",
                },
              }}
            />
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box
          mb={10}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Logo />

          <Stack direction="row" spacing={{ xs: 2, md: 3 }}>
            <BsTwitter color={theme.palette.textSecondary.main} />
            <BiLogoTelegram color={theme.palette.textSecondary.main} />
            <BsDiscord color={theme.palette.textSecondary.main} />
            <BsReddit color={theme.palette.textSecondary.main} />
            <BsGithub color={theme.palette.textSecondary.main} />
            <BsInstagram color={theme.palette.textSecondary.main} />
            <BsLinkedin color={theme.palette.textSecondary.main} />
            <BsYoutube color={theme.palette.textSecondary.main} />
          </Stack>
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="h6" color={theme.palette.textPrimary.main}>
              Solutions
            </Typography>
            <ul>
              <li style={listStyle}>Polygon PoS</li>
              <li style={listStyle}>Polygon zkEVM</li>
              <li style={listStyle}>Polygon Supernets</li>
              <li style={listStyle}>Polygon Miden</li>
              <li style={listStyle}>Polygon ID</li>
            </ul>

            <Box mt={5}>
              <Typography variant="h6" color={theme.palette.textPrimary.main}>
                Resources
              </Typography>
              <ul>
                <li style={listStyle}>zk Research</li>
              </ul>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="h6" color={theme.palette.textPrimary.main}>
              Use Polygon
            </Typography>
            <ul>
              <li style={listStyle}>Polygon Wallet Suite</li>
              <li style={listStyle}>Staking</li>
              <li style={listStyle}>Polygon Scan</li>
              <li style={listStyle}>PoS Bridge Explorer</li>
              <li style={listStyle}>Faucet</li>
              <li style={listStyle}>Safe Bridge</li>
              <li style={listStyle}>Token Mapper</li>
              <li style={listStyle}>Ecosystem dApps</li>
            </ul>
          </Grid>

          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="h6" color={theme.palette.textPrimary.main}>
              Developers
            </Typography>
            <ul>
              <li style={listStyle}>Developer Hub</li>
              <li style={listStyle}>Developer Discord</li>
              <li style={listStyle}>Polygon Wiki</li>
              <li style={listStyle}>GitHub</li>
              <li style={listStyle}>Forum</li>
              <li style={listStyle}>WebApps Bug Bounty</li>
              <li style={listStyle}>Contracts Bug Bounty</li>
            </ul>
          </Grid>

          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="h6" color={theme.palette.textPrimary.main}>
              Community
            </Typography>
            <ul>
              <li style={listStyle}>Community Home</li>
              <li style={listStyle}>Polygon Guilds</li>
              <li style={listStyle}>Advocate Program</li>
              <li style={listStyle}>Events</li>
              <li style={listStyle}>Ecosystem Jobs</li>
            </ul>

            <Box mt={5}>
              <Typography variant="h6" color={theme.palette.textPrimary.main}>
                Legal
              </Typography>
              <ul>
                <li style={listStyle}>Terms of Use</li>
                <li style={listStyle}>Privacy Policy</li>
                <li style={listStyle}>Cookie Policy</li>
              </ul>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="h6" color={theme.palette.textPrimary.main}>
              General
            </Typography>
            <ul>
              <li style={listStyle}>About</li>
              <li style={listStyle}>Blog</li>
              <li style={listStyle}>Careers</li>
              <li style={listStyle}>Sustainability</li>
              <li style={listStyle}>Matic Token</li>
              <li style={listStyle}>Brand Guidelines</li>
              <li style={listStyle}>Institutions</li>
              <li style={listStyle}>Contact Us</li>
            </ul>
          </Grid>
        </Grid>
      </Container>

      <Box mt={10} mb={10}>
        <Divider
          sx={{
            border: "1px solid #141217",
            marginBottom: "30px",
          }}
        />

        <Container maxWidth="lg">
          <Typography variant="body1" color={theme.palette.textSecondary.main}>
            © 2023 Polygon Labs UI (Cayman) Ltd. | All rights reserved
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;

const listStyle = {
  listStyle: "none",
  color: theme.palette.textSecondary.main,
  marginTop: "10px",
};
