import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";
import { newestPic } from "../assets/images";
import "../css/detail.css";
const Detail = () => {
  const location = useLocation();
  const myData = location?.state?.item;
  console.log(myData)
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection="column"
    >
      <Button
        sx={{
          variant: "outlined",
          color: "black",
          boxShadow: "1px 1px 5px  #000",
          width: "150px",
          height: "50px",
          borderRadius: "20px",
          mt: -4,
          textTransform: "capitalize",
        }}
      >
        Detail
      </Button>
      <Grid
        container
        sx={{
          mt: 4,
          // px: 10,
          width: { sm: "90vh", xs: "50.5vh" },
          height: { sm: "auto", xs: "auto" },
          bgcolor: "white",
          boxShadow: "1px 1px 5px  #000",
          borderRadius: "30px",
          display: { md: "flexWrap", sm: "flex", xs: "flexWrap" },
          // bgcolor: "green",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 1,
            py: 2,
            alignItems: "center",
            justifyContent: "center",
            // bgcolor: "black",
          }}
        >
          <Box>
            <img
              alt="Pic here"
              src={newestPic}
              style={{
                height: "170px",
                width: "170px",
                borderRadius: "100px",
              }}
            />
            <Box className="d-flex" sx={{ justifyContent:'center',alignItems: 'center',flexDirection:'column'}}>
              <Typography fontSize={"24px"} ml={4}>
                {myData.name}
              </Typography>
              <Typography fontSize={"12px"} ml={2} mt={-1}>
             {myData.email}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          style={{
            flex: 1,
          }}
        >
          <Box mt={{ sm: 3, xs: "2px" }}>
            <Typography fontSize={"24px"} textAlign="center">
              Query Filter
            </Typography>
            <Box pr={3} ml={{ sm: 0, xs: 3 }}>
              <Button
                sx={{
                  // variant: "outlined",
                  textTransform: "capitalize",
                  bgcolor: "blue",
                  color: "white",
                  boxShadow: "1px 1px 5px #000",
                  width: { xs: "200px", sm: "150px", md: "270px" },
                  px: "35px",
                  borderRadius: "20px",
                  mb: 1,
                }}
              >
                Create Application
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                  bgcolor: "white",
                  color: "grey",
                  boxShadow: "1px 1px 5px #000",
                  width: { xs: "200px", sm: "150px", md: "270px" },
                  height: "35px",
                  borderRadius: "20px",
                  mb: 1,
                }}
              >
                Customer Service
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                  bgcolor: "white",
                  color: "grey",
                  boxShadow: "1px 1px 5px #000",
                  width: { xs: "200px", sm: "150px", md: "270px" },
                  height: "35px",
                  borderRadius: "20px",
                  mb: 1,
                }}
              >
                Widthrawal Requests
              </Button>
            </Box>
            <Box
              sx={{
                direction: "row",
                bgcolor: "white",
                color: "grey",
                display: "flex",
                boxShadow: "1px 1px 5px #000",
                width: { xs: "240px", sm: "300px", md: "310px" },
                height: "52px",
                borderRadius: "20px 0px 30px 20px ",
                mt: "2px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography color={"blue"} fontSize={34} fontWeight={700} mr={1}>
                25
              </Typography>
              <Typography textAlign={"center"}>Queries Recieved</Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Box
        sx={{
          // bgcolor: { sm: "white", xs: '' },
          width: { sm: "65vw", xs: "75vw" },
          boxShadow: "1px 1px 5px  #000",
          borderRadius: "35px",
          direction: "column",
          px: 4,
          pb: "10px",
          my: 3,
        }}
      >
        <Grid
          container
          sx={{
            px: { sm: "5px", xs: "8px" },
            width: { sm: "50vw", xs: "60vw" ,md:'60vw'},
            boxShadow: "1px 1px 5px  #000",
            borderRadius: "0px 0px 20px 20px ",
            direction: "row",
            py: "10px",
            mt: "1px",
          }}
        >
          <Grid container xs={2.4} fontSize={{ sm: 16, xs: 10 }}>
            Query Recieved
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            xs={2.4}
            sx={{ borderLeft: { sm: 1, xs: 0 }, fontSize: { sm: 16, xs: 10 } }}
          >
            Status
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            xs={2.4}
            sx={{ borderLeft: { sm: 1, xs: 0 }, fontSize: { sm: 16, xs: 10 } }}
          >
            Query Respond
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            xs={2.4}
            sx={{ borderLeft: { sm: 1, xs: 0 }, fontSize: { sm: 16, xs: 10 } }}
          >
            Login time
          </Grid>
          <Grid
            container
            justifyContent="center"
            // alignself="center"
            xs={2.4}
            sx={{ borderLeft: { sm: 1, xs: 0 }, fontSize: { sm: 16, xs: 10 } }}
          >
            Logout time
          </Grid>
        </Grid>
        {[3, 3, 8, 4, 5, 6, 7, 8, 9, 8].map((item, index) => (
          <Grid
            key={index}
            container
            sx={{
              // px: { xs: 'px', sm: '0px' },
              width: { sm: "65vw", xs: "75vw" },
              direction: "row",
              alignItems: "center",
              justifyContent: "center",
              py: 2,
            }}
          >
            <Grid container xs={2.4}>
              <Typography
                borderRadius={"0px 15px 15px 5px"}
                bgcolor="blue"
                color="white"
                py="4px"
                px="6px"
                ml={{ sm: -8.8, xs: -4.6 }}
                mr={2}
              >
                AN
              </Typography>
              <Typography
                color="grey"
                mt={{ xs: -4, sm: 0 }}
                ml="4px"
                sx={{ translate: "none" }}
              >
                I'v login issue
              </Typography>
            </Grid>
            <Grid container sx={{ justifyContent: "center" }} xs={2.4}>
              <Typography
                borderRadius={"20px"}
                bgcolor={"grey"}
                color={"white"}
                px={{ sm: 4, xs: 1 }}
                py={{ sm: 1, xs: 0.5 }}
                fontSize={{ sm: 16, xs: 13 }}
              >
                pending
              </Typography>
            </Grid>
            <Grid container sx={{ justifyContent: "center" }} xs={2.4}>
              <Typography
                borderRadius={"20px"}
                bgcolor={"blue"}
                color={"white"}
                px={{ sm: 2, xs: 1 }}
                py={{ sm: 1, xs: 0.5 }}
                fontSize={{ sm: 16, xs: 13 }}
              >
                detail
              </Typography>
            </Grid>
            <Grid sx={{ justifyContent: "center" }} xs={2.4}>
              <Typography
                sx={{
                  color: "#000",
                  px: { sm: 2, xs: 0 },
                  py: { sm: 1, xs: "2px" },
                  fontSize: { sm: 16, xs: 12 },
                }}
              >
                10:15 am
              </Typography>
            </Grid>
            <Typography
              sx={{
                color: "#000",
                px: { sm: 2, xs: 0 },
                py: { sm: 1, xs: "2px" },
                fontSize: { sm: 16, xs: 12 },
              }}
            >
              12:10 pm
            </Typography>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default Detail;
