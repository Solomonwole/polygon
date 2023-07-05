import React from "react";
import Typography from "@mui/material/Typography";
import Container from "../../../../mui/Container";
import { Box, Stack } from "@mui/material";
import Date from "../../../../assets/date.png";

function Dates() {
  return (
    <Container>
      <Box>
        <Typography variant="h2" color="textPrimary.main" align="center">
          Important Dates
        </Typography>

        <Box
          mt={7}
          sx={{
            background: "#171320",
            borderRadius: "12px",
            width: "100%",
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            width="80%"
            sx={{
              backgroundImage: `url(${Date})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              margin: "50px 10px",
              padding: "60px 0",
            }}
          >
            {/* Top  */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Stack alignItems="center">
                <Typography variant="body2" sx={captionStyle}>
                  Week of
                </Typography>
                <Typography variant="h2" sx={textStyle}>
                  19
                </Typography>
                <Typography variant="body2" sx={captionStyle}>
                  June 2023
                </Typography>
              </Stack>

              <Stack alignItems="center">
                <Typography variant="body2" sx={captionStyle}>
                  Week of
                </Typography>
                <Typography variant="h2" sx={textStyle}>
                  19
                </Typography>
                <Typography variant="body2" sx={captionStyle}>
                  June 2023
                </Typography>
              </Stack>

              <Stack alignItems="center">
                <Typography variant="body2" sx={captionStyle}>
                  Week of
                </Typography>
                <Typography variant="h2" sx={textStyle}>
                  19
                </Typography>
                <Typography variant="body2" sx={captionStyle}>
                  June 2023
                </Typography>
              </Stack>

              <Stack alignItems="center">
                <Typography variant="body2" sx={captionStyle}>
                  Week of
                </Typography>
                <Typography variant="h2" sx={textStyle}>
                  19
                </Typography>
                <Typography variant="body2" sx={captionStyle}>
                  June 2023
                </Typography>
              </Stack>
            </Box>

            {/* Line  */}
            <Box
              mt={1}
              mb={1}
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  border: "2px solid #7B3FE4 ",
                  background: "transparent",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: "8px",
                }}
              >
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg, #7B3FE4 0%, #A726C1 100%)",
                    width: "13px",
                    height: "13px",
                    borderRadius: "50%",
                  }}
                ></Box>
              </Box>

              <Box
                sx={{
                  border: "1px dashed #7B3FE4",
                  width: "100%",
                }}
              ></Box>

              <Box
                sx={{
                  border: "2px solid #7B3FE4 ",
                  background: "transparent",
                  p: "8px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg, #7B3FE4 0%, #A726C1 100%)",
                    width: "13px",
                    height: "13px",
                    borderRadius: "50%",
                  }}
                ></Box>
              </Box>

              <Box
                sx={{
                  border: "1px dashed #7B3FE4",
                  width: "100%",
                }}
              ></Box>

              <Box
                sx={{
                  border: "2px solid #7B3FE4 ",
                  background: "transparent",
                  p: "8px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg, #7B3FE4 0%, #A726C1 100%)",
                    width: "13px",
                    height: "13px",
                    borderRadius: "50%",
                  }}
                ></Box>
              </Box>

              <Box
                sx={{
                  border: "1px dashed #7B3FE4",
                  width: "100%",
                }}
              ></Box>

              <Box
                sx={{
                  border: "2px solid #7B3FE4 ",
                  background: "transparent",
                  p: "8px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg, #7B3FE4 0%, #A726C1 100%)",
                    width: "13px",
                    height: "13px",
                    borderRadius: "50%",
                  }}
                ></Box>
              </Box>
            </Box>
            {/* Last Line  */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                }}
              >
                Polygon PoS
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                }}
              >
                Architecture and Stack
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                }}
              >
                Tokenomics
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                }}
              >
                Governance
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Mobile  */}
        <Box
          mt={7}
          sx={{
            borderRadius: "12px",
            width: "100%",
            display: { xs: "flex", sm: "none" },
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${Date})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          p={2}
        >
          <Box>
            {/* Line  */}
            <Box
              mt={1}
              mb={1}
              sx={{
                display: { xs: "flex", sm: "none" },
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: 780,
              }}
            >
              <Box
                sx={{
                  border: "2px solid #7B3FE4 ",
                  background: "transparent",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: "8px",
                }}
              >
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg, #7B3FE4 0%, #A726C1 100%)",
                    width: "13px",
                    height: "13px",
                    borderRadius: "50%",
                  }}
                ></Box>
              </Box>

              <Box
                sx={{
                  borderLeft: "1px dashed #7B3FE4",
                  height: "100%",
                }}
              ></Box>

              <Box
                sx={{
                  border: "2px solid #7B3FE4 ",
                  background: "transparent",
                  p: "8px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg, #7B3FE4 0%, #A726C1 100%)",
                    width: "13px",
                    height: "13px",
                    borderRadius: "50%",
                  }}
                ></Box>
              </Box>

              <Box
                sx={{
                  borderLeft: "1px dashed #7B3FE4",
                  height: "100%",
                }}
              ></Box>

              <Box
                sx={{
                  border: "2px solid #7B3FE4 ",
                  background: "transparent",
                  p: "8px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg, #7B3FE4 0%, #A726C1 100%)",
                    width: "13px",
                    height: "13px",
                    borderRadius: "50%",
                  }}
                ></Box>
              </Box>

              <Box
                sx={{
                  borderLeft: "1px dashed #7B3FE4",
                  height: "100%",
                }}
              ></Box>

              <Box
                sx={{
                  border: "2px solid #7B3FE4 ",
                  background: "transparent",
                  p: "8px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg, #7B3FE4 0%, #A726C1 100%)",
                    width: "13px",
                    height: "13px",
                    borderRadius: "50%",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>

          {/* Card  */}
          <Box
            sx={{
              width: "100%",
              marginLeft: "20px",
            }}
          >
            <Box sx={cardStyle}>
              <Typography variant="body2" sx={captionStyle}>
                Week of
              </Typography>
              <Typography variant="h1" sx={textStyle}>
                19
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontWeight: "700",
                }}
              >
                June 2023
              </Typography>
              <hr style={{ width: "100%", border: "0.3px solid #1f1e25" }} />
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                }}
              >
                Polygon PoS
              </Typography>
            </Box>

            <Box sx={cardStyle}>
              <Typography variant="body2" sx={captionStyle}>
                Week of
              </Typography>
              <Typography variant="h1" sx={textStyle}>
                26
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontWeight: "700",
                }}
              >
                June 2023
              </Typography>
              <hr style={{ width: "100%", border: "0.3px solid #1f1e25" }} />
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                }}
              >
                Architecture and Stack
              </Typography>
            </Box>

            <Box sx={cardStyle}>
              <Typography variant="body2" sx={captionStyle}>
                Week of
              </Typography>
              <Typography variant="h1" sx={textStyle}>
                10
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontWeight: "700",
                }}
              >
                June 2023
              </Typography>
              <hr style={{ width: "100%", border: "0.3px solid #1f1e25" }} />
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                }}
              >
                Tokenomics
              </Typography>
            </Box>

            <Box sx={cardStyle}>
              <Typography variant="body2" sx={captionStyle}>
                Week of
              </Typography>
              <Typography variant="h1" sx={textStyle}>
                17
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontWeight: "700",
                }}
              >
                June 2023
              </Typography>
              <hr style={{ width: "100%", border: "0.3px solid #1f1e25" }} />
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                }}
              >
                Governance
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Dates;

const captionStyle = {
  color: "#7B3FE4",
  textTransform: "uppercase",
  fontWeight: "700",
};
const textStyle = {
  color: "#7B3FE4",
  textTransform: "uppercase",
  fontWeight: "700",
};

const cardStyle = {
  borderRadius: "12px",
  background: "#171320",
  height: "208.75px",
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "15px",
};
