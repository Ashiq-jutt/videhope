import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { creatorEarning } from "../assets/images";
import { useNavigate } from "react-router-dom";
const CreatorEarning = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Button
        onClick={() => navigate("/accounting")}
        sx={{
          variant: "outlined",
          color: "black",
          boxShadow: "1px 1px 5px  #000",
          width: "200px",
          height: "50px",
          borderRadius: "5px 5px 20px 20px",
          mt: -4,
          ml: 8,
          textTransform: "capitalize",
        }}
      >
        Creator Earnings
      </Button>
      <Box container sx={{ display: "flex", flexDirection: { sm: "row", xs: 'column' } }}>
        <Box>
          <Box
            sx={{
              mt: 3,
              mx: 8,
              boxShadow: "1px 1px 5px  #000",
              borderRadius: "30px",
              display: "flex",
              bgcolor: "white",
              // justifyContent: "center",
              // alignItems: "center",
              direction: "column",
              height: "420px",
              width: "240px",
            }}
          >
            <Box>
              <img
                src={creatorEarning}
                style={{ width: "237px", height: "248px", borderRadius: 25 }}
              />

              <Typography fontSize={"34px"} textAlign={"center"} color={"grey"}>
                Ahmad
              </Typography>
              <Typography fontSize={"12px"} textAlign={"center"} color={"grey"}>
                ahmadworkspace@gmail.com
              </Typography>
              <Typography fontSize={26} textAlign={"center"}>
                Total Earning
              </Typography>

              <Typography fontSize={36} textAlign={"center"} color={"blue"}>
                100$
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              direction: "column",
              width: "220px",
              mx: 8,
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
              mt={2}
              textAlign={"center"}
              color={"grey"}
            >
              Filter
            </Typography>

            <Box sx={{ flex: 1, direction: "column" }}>
              <Button
                //  sx={{}}
                sx={{
                  textTransform: "none",
                  bgcolor: "blue",
                  color: "grey",
                  boxShadow: "2px 2px 4px  #000",
                  borderRadius: "60px",
                  px: 10.2,
                  mt: 1,
                  py: "2px",
                }}
              >
                Weekly
              </Button>
              <Button
                sx={{
                  textTransform: "none",
                  bgcolor: "white",
                  color: "grey",
                  boxShadow: "2px 2px 4px  #000",
                  borderRadius: "60px",
                  px: 10,
                  my: 1,
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
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "white",
            width: { sm: "40vw", xs: '80vw' },
            boxShadow: "1px 1px 5px  #000",
            borderRadius: "35px",
            direction: "column",
            px: 4,
            pb: "10px",
            my: 3,
            mx: 4,
          }}
        >
          <Grid
            container
            sx={{
              px: 2,
              width: { sm: "40vw", xs: '80vw' },
              boxShadow: "1px 1px 5px  #000",
              borderRadius: "0px 0px 15px 15px ",
              // display: "flex",
              direction: "row",
              py: 1.6,
              mt: "1px",
            }}
          >
            <Grid container justifyContent={"center"} xs={4}>
              Name
            </Grid>

            <Grid container justifyContent={"center"} xs={4}>
              Amount
            </Grid>
            <Grid container justifyContent={"center"} xs={4}>
              Time
            </Grid>
          </Grid>
          {/* <Grid container xs={12}>
          Dec6
        </Grid> */}
          {[, 222, 2, , 2, 3, 3, 3, 3, 3, 33, 3, 3, 3].map((item, index) => (
            <Grid
              key={index}
              container
              sx={{
                width: { sm: "40vw", xs: '80vw' },
                direction: "row",
                py: 1.6,
                // mt: "15px",
              }}
            >
              <Grid container justifyContent={"center"} xs={4}>
                Ahmad
              </Grid>
              <Grid container justifyContent={"center"} xs={4}>
                20$
              </Grid>
              <Grid container justifyContent={"center"} xs={4}>
                3:04 pm
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CreatorEarning;
