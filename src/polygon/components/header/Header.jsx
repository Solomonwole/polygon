import { Box, Button, AppBar, Toolbar, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Logo from "../../../assets/logo.svg";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import PopModal from "../../../modal/PopModal";

function Header() {
  const [menu, setMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            height: "84px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Toolbar
            sx={{
              height: "84px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background:
                "linear-gradient(180deg,rgba(10, 9, 13, 1) 0%, rgba(10, 9, 13, 0.17) 62.99999952316284%,rgba(10, 9, 13, 0.1) 75%,rgba(10, 9, 13, 0) 100% )",
            }}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
              <Box display={{ xs: "none", sm: "flex" }}>
                <ul className="headerNav">
                  <li>
                    <a href="/#">Solutions</a>
                  </li>
                  <li>
                    <a href="/#">Developers</a>
                  </li>
                  <li>
                    <a href="/#">Community</a>
                  </li>
                  <li>
                    <a href="/#">Resources</a>
                  </li>
                  <li>
                    <a href="/#">Company</a>
                  </li>
                  <li>
                    <a href="/#">Use Polygon</a>
                  </li>
                </ul>
              </Box>
            </Stack>

            <Box display={{ xs: "none", sm: "flex" }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <BsTwitter fontSize="20px" cursor="pointer" />
                <BsDiscord fontSize="20px" cursor="pointer" />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setOpenModal(true)}
                >
                  Build On Polygon
                </Button>
              </Stack>
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { sm: "none" } }}
            >
              {!menu ? (
                <IoMenu fontSize="35px" onClick={() => setMenu(true)} />
              ) : (
                <AiOutlineClose onClick={() => setMenu(false)} />
              )}
            </IconButton>
          </Toolbar>
        </AppBar>

        {menu && (
          <Box
            height="100vh"
            width="100%"
            sx={{ background: "#0a090d", zIndex: 10, position: "fixed" }}
          >
            <ul className="headerNavMobile">
              <li>
                <a href="/#">Solutions</a>
              </li>
              <li>
                <a href="/#">Developers</a>
              </li>
              <li>
                <a href="/#">Community</a>
              </li>
              <li>
                <a href="/#">Resources</a>
              </li>
              <li>
                <a href="/#">Company</a>
              </li>
              <li>
                <a href="/#">Use Polygon</a>
              </li>
            </ul>
          </Box>
        )}
      </Box>

      {openModal && <PopModal open={openModal} close={setOpenModal} />}
    </>
  );
}

export default Header;
