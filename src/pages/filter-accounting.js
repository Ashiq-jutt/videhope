import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { filterDashboardImage } from "../assets";
import { filterProfile, newestPic, withdrawPic } from "../assets/images";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { isMobile } from "react-device-detect";

import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const FilterEarning = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    // <Box sx={{ display: { xs: "block", sm: "b", xl: "block" } }}>
    <Box
      // container
      sx={{
        display: "flex",
        flexDirection: { sm: "row", xs: 'column' }
      }}
    >
      <Box>
        <Box
          sx={{
            mt: "50px",
            borderRadius: "30px",
            display: "flex",
            bgcolor: "white",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <img
            src={filterDashboardImage}
            style={{ width: "384px", height: "263px", borderRadius: 25 }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            direction: "column",
            width: "384px",
            mx: 1,
          }}
        >
          <Typography
            fontSize={"24px"}
            mt={5}
            textAlign={"center"}
            color={"grey"}
          >
            Past Withdrawal
          </Typography>
          <Typography
            fontSize={"24px"}
            mt={5}
            textAlign={"center"}
            color={"grey"}
          >
            Filter
          </Typography>

          <Box sx={{ flex: 1, direction: "column", px: 10 }}>
            <Button
              sx={{
                textTransform: "none",
                bgcolor: "blue",
                color: "white",
                boxShadow: "2px 2px 4px  #000",
                borderRadius: "60px",
                px: 11,
                mt: 1,
                py: "2px",
              }}
            >
              Daily
            </Button>
            <Button
              sx={{
                textTransform: "none",
                bgcolor: "white",
                color: "grey",
                boxShadow: "2px 2px 4px  #000",
                borderRadius: "60px",
                px: 10,
                my: 2,
                py: "2px",
              }}
            >
              Monthly
            </Button>
            <Button
              sx={{
                textTransform: "none",
                bgcolor: "white",
                color: "grey",
                boxShadow: "2px 2px 4px  #000",
                borderRadius: "60px",
                px: 11,

                py: "2px",
              }}
            >
              yearly
            </Button>
          </Box>
          <Typography
            fontSize={"24px"}
            mt={3}
            textAlign={"center"}
            color={"grey"}
          >
            Custom
          </Typography>
          <Typography
            fontSize={"16px"}
            mt={3}
            //   textAlign={"center"}
            color={"grey"}
          >
            Start Date
          </Typography>
          <Typography
            fontSize={"16px"}
            mt={3}
            //   textAlign={""}
            color={"grey"}
          >
            End Date
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ ml: 7, fontSize: "24px", color: "grey" }}>
          Daily
        </Typography>
        <Box
          sx={{
            bgcolor: "white",
            width: { sm: "48vw", xs: '90vw' },
            boxShadow: "1px 1px 5px  #000",
            borderRadius: "35px",
            direction: "column",
            my: 1,
            mx: 1,
          }}
        >
          <Grid
            container
            sx={{
              width: { sm: "44vw", xs: '76vw' },
              boxShadow: "1px 1px 5px  #000",
              borderRadius: "0px 0px 15px 15px",
              direction: "row",
              py: "12px",
              // mt: 5,
              bgcolor: "white",
              mx: 3,
            }}
          >
            <Grid
              container
              justifyContent={"center"}
              xs={4}
              fontSize={"18px"}
            >
              Approved
            </Grid>

            <Grid
              container
              fontSize={"18px"}
              justifyContent={"center"}
              xs={4}
              sx={{ borderLeft: { sm: 1, xs: 0 }, borderRight: { sm: 1, xs: 0 } }}
            >
              Pending
            </Grid>
            <Grid
              container
              fontSize={"18px"}
              justifyContent={"center"}
              xs={4}
            >
              Rejected
            </Grid>
          </Grid>

          {[2, 3, 3, 3, 3, 3].map((item, index) => (
            <Grid
              key={index}
              container
              sx={{
                width: { sm: "48vw", xs: '90vw' },
                direction: "row",
                py: 1.6,
                // mt: "15px",
              }}
            >
              <Grid container justifyContent={"center"} xs={4}>
                <Box container sx={{ dispaly: "flex", direction: "row" }}>
                  <img
                    alt="Pic here"
                    src={withdrawPic}
                    style={{
                      height: "80px",
                      width: "70px",
                      borderRadius: "1000px",
                    }}
                  />
                  <Typography>Ahmad</Typography>
                </Box>
                <Button
                  onClick={() => navigate("/withdrawRwquest")}
                  sx={{
                    textTransform: "capitalize",
                    bgcolor: "blue",
                    // bgcolor: "#e2e2e2 ",
                    color: "white",
                    borderRadius: "50px",
                    width: "200px",
                    mt: 1,
                    height: "42px",
                  }}
                >
                  Detail
                </Button>
              </Grid>

              <Grid container justifyContent={"center"} xs={4}>
                <Box container sx={{ dispaly: "flex", direction: "row" }}>
                  <img
                    alt="Pic here"
                    src={withdrawPic}
                    style={{
                      height: "80px",
                      width: "70px",
                      borderRadius: "1000px",
                    }}
                  />
                  <Typography>Ahmad</Typography>
                </Box>
                <Button
                  sx={{
                    textTransform: "none",
                    bgcolor: "#e2e2e2 ",
                    color: "white",
                    // boxShadow: "2px 2px 4px  #000",
                    borderRadius: "50px",
                    width: "200px",
                    mt: 1,
                    height: "42px",
                  }}
                >
                  Detail
                </Button>
              </Grid>
              <Grid container justifyContent={"center"} xs={4}>
                <Box container sx={{ dispaly: "flex", direction: "row" }}>
                  <img
                    alt="Pic here"
                    src={withdrawPic}
                    style={{
                      height: "80px",
                      width: "70px",
                      borderRadius: "1000px",
                    }}
                  />
                  <Typography>Ahmad</Typography>
                </Box>
                <Button
                  sx={{
                    textTransform: "none",
                    bgcolor: "#e2e2e2 ",
                    color: "white",
                    // boxShadow: "2px 2px 4px  #000",
                    borderRadius: "50px",
                    width: "200px",
                    mt: 1,
                    height: "42px",
                  }}
                >
                  Detail
                </Button>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>
    </Box>
    // {/* </Box> */ }
  );
};

export default FilterEarning;
// import { Grid } from "@material-ui/core";

// const FilterEarning = () => {
//   return (
//     <Grid container spacing={3}>
//       <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
//         <div>Item 1</div>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
//         <div>Item 2</div>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
//         <div>Item 3</div>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
//         <div>Item 3</div>
//       </Grid>

//     </Grid>
//   );
// };
// export default FilterEarning;
