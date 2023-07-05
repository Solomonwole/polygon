import React from "react";
import Container from "../../../../mui/Container";
import Typography from "@mui/material/Typography";
import { Box, Chip, Stack, Tab, Tabs, Button } from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";
import WhiteBox from "../../../../assets/box.png";
import WhiteBox2 from "../../../../assets/box2.png";

function Technology() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h2" color="textPrimary.main" align="center">
          The most adopted scaling technology
        </Typography>

        <Box
          mt={5}
          mb={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                display: "none",
              },
            }}
            sx={{
              background: "#212026",
              borderRadius: "40px",
              padding: "5px",
            }}
          >
            <Tab
              label="Public Chains"
              sx={{
                color: value === 0 ? "#000" : "#fff",
                backgroundColor: value === 0 ? "#fff" : "transparent",
                borderRadius: "40px",
              }}
            />
            <Tab
              label="App Specific Chains"
              sx={{
                color: value === 1 ? "#000" : "#fff",
                backgroundColor: value === 1 ? "#fff" : "transparent",
                borderRadius: "40px",
              }}
            />
            <Tab
              label="Decentralized Identity"
              sx={{
                color: value === 2 ? "#000" : "#fff",
                backgroundColor: value === 2 ? "#fff" : "transparent",
                borderRadius: "40px",
              }}
            />
          </Tabs>
        </Box>

        {/* {value === 0 && ( */}
        <Stack mt={10} mb={10} spacing={15}>
          {/* First  */}
          <Box
            sx={{
              width: "100%",
              display: { sm: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              width={{ sm: "50%" }}
              height="100px"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={WhiteBox}
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                }}
              />
            </Box>

            <Box width={{ sm: "40%" }} mt={{ xs: 10, sm: 0 }}>
              <Stack spacing={2}>
                <Stack direction="row" alignItems="end" spacing={1}>
                  <Typography variant="h3" color="textPrimary.main">
                    Polygon PoS
                  </Typography>
                  <Chip
                    label="LIVE"
                    variant="outlined"
                    sx={{
                      color: "#af89ee",
                      border: "1px solid #af89ee",
                    }}
                  />
                </Stack>

                <Typography variant="body2" color="textSecondary.main">
                  Support the most widely used Ethereum scaling ecosystem that
                  offers EVM compatibility and an ultimate user experience with
                  fast transactions at near-zero gas fees today.
                </Typography>

                <Stack direction="row" spacing={3}>
                  <Button
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(180deg, #8A46FF 0%, #6E38CC 100%)",
                      borderRadius: "48px",
                    }}
                  >
                    Open Docs <FiArrowUpRight />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(180deg, #18161C 0%, #121014 100%)",
                      borderRadius: "48px",
                    }}
                  >
                    Learn More <FiArrowUpRight />
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Box>

          {/* Second  */}

          <Box
            sx={{
              width: "100%",
              display: { sm: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column-reverse",
            }}
          >
            <Box
              width={{ sm: "50%" }}
              height="100px"
              sx={{
                display: { xs: "flex", sm: "none" },
                justifyContent: "center",
                alignItems: "center",
              }}
              mb={10}
            >
              <img
                src={WhiteBox2}
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              
            >
              <Stack
                spacing={2}
                sx={{
                  width: { sm: "50%" },
                }}
              >
                <Stack direction="row" alignItems="end" spacing={1}>
                  <Typography variant="h3" color="textPrimary.main">
                    Polygon zkEVM
                  </Typography>
                  <Chip
                    label="LIVE"
                    variant="outlined"
                    sx={{
                      color: "#af89ee",
                      border: "1px solid #af89ee",
                    }}
                  />
                </Stack>

                <Typography variant="body2" color="textSecondary.main">
                  Unlock Ethereum scalability while maintaining security with
                  the first ZK-rollup that offers EVM equivalence with fast
                  transactions at near-zero gas cost today.
                </Typography>

                <Stack direction="row" spacing={3}>
                  <Button
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(180deg, #8A46FF 0%, #6E38CC 100%)",
                      borderRadius: "48px",
                    }}
                  >
                    Open Docs <FiArrowUpRight />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(180deg, #18161C 0%, #121014 100%)",
                      borderRadius: "48px",
                    }}
                  >
                    Learn More <FiArrowUpRight />
                  </Button>
                </Stack>
              </Stack>
            </Box>

            <Box
              width={{ sm: "50%" }}
              height="100px"
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
              mt={10}
            >
              <img
                src={WhiteBox2}
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                }}
              />
            </Box>
          </Box>

          {/* Third  */}

          <Box
            sx={{
              width: "100%",
              display: { sm: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              width={{ sm: "50%" }}
              height="100px"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={WhiteBox}
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                }}
              />
            </Box>

            <Box width={{ sm: "40%" }} mt={{ xs: 10, sm: 0 }}>
              <Stack spacing={2}>
                <Stack direction="row" alignItems="end" spacing={1}>
                  <Typography variant="h3" color="textPrimary.main">
                    Polygon Miden
                  </Typography>
                  <Chip
                    label="COMING SOON"
                    variant="outlined"
                    sx={{
                      color: "#af89ee",
                      border: "1px solid #af89ee",
                    }}
                  />
                </Stack>

                <Typography variant="body2" color="textSecondary.main">
                  Build advanced dApps with client-side proving with the first
                  decentralized rollup that leverages execution proofs of
                  concurrent, local transactions.
                </Typography>

                <Stack direction="row" spacing={3}>
                  <Button
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(180deg, #8A46FF 0%, #6E38CC 100%)",
                      borderRadius: "48px",
                    }}
                  >
                    Open Docs <FiArrowUpRight />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(180deg, #18161C 0%, #121014 100%)",
                      borderRadius: "48px",
                    }}
                  >
                    Learn More <FiArrowUpRight />
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Stack>
        {/* )} */}

        {/* {value === 1 && <Box></Box>} */}

        {/* {value === 2 && <Box></Box>} */}
      </Box>
    </Container>
  );
}

export default Technology;
