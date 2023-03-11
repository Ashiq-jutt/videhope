import {
  Container,
  Grid,
  InputLabel,
  TextField,
  Typography,
  Stack,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Slider,
} from "@mui/material";
import React from "react";
// import { View, Text } from "react-native";
import { Box } from "@mui/system";
import * as SVG from "../assets";
import UserData from "../components/userData";
import profile from "../assets/profile.svg";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import { Image } from "@mui/icons-material";
import { serviceImg } from "../assets/images";
function valuetext(value) {
  return `${value}°C`;
}
function UserProfile() {
  const [check, setCheck] = React.useState(false);
  const [ide, setIde] = React.useState("");
  const handleCheck = (id) => {
    setIde(id);
    setCheck(!check);
  };

  var buttonType = ["music", "Photography", "Food", "Diy"];
  var arr = [
    {
      id: 1,
      profile: profile,
      email: "@jacob_w",
      dateJoined: "12/02/22",

      content: "$125.56",
    },

    {
      id: 6,
      profile: profile,
      email: "@jacob_w",
      dateJoined: "12/02/22",

      content: "$125.56",
    },
    {
      id: 2,
      profile: profile,
      email: "@jacob_w",
      dateJoined: "12/02/22",

      content: "'$125.56'",
    },
    {
      id: 3,
      profile: profile,
      email: "@jacob_w",
      dateJoined: "12/02/22",

      content: "'$125.56'",
    },
    {
      id: 4,
      profile: profile,
      email: "@jacob_w",
      dateJoined: "12/02/22",

      content: "'$125.56'",
    },
  ];
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container alignItems="center">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
        mt={"80px"}
        // ml={"20px"}
      >
        <img src={SVG.left} />
        <Typography
          sx={{ fontFamily: "Roboto", fontSize: "42px", fontWeight: "700" }}
        >
          User Profile
        </Typography>
        <img src={SVG.menue} />
      </Stack>

      <Box
        sx={{
          // backgroundColor: "#F4F4F4",
          mt: "30px",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            // backgroundColor: "#F4F4F4",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={SVG.profile} />
          <Typography>@jacob_w</Typography>
        </Stack>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          // backgroundColor={"red"}
        >
          <Stack
            sx={{
              // backgroundColor: "#F4F4F4",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ color: "#000000", fontFamily: "Roboto", fontSize: "22px" }}
            >
              15
            </Typography>
            <Typography
              sx={{ color: "#000000", fontFamily: "Roboto", fontSize: "13px" }}
            >
              Following
            </Typography>
          </Stack>
          <Stack
            sx={{
              mx: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ color: "#000000", fontFamily: "Roboto", fontSize: "22px" }}
            >
              38
            </Typography>
            <Typography
              sx={{ color: "#000000", fontFamily: "Roboto", fontSize: "13px" }}
            >
              Followers
            </Typography>
          </Stack>
          <Stack
            sx={{
              // backgroundColor: "#F4F4F4",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ color: "#000000", fontFamily: "Roboto", fontSize: "22px" }}
            >
              2
            </Typography>
            <Typography
              sx={{ color: "#000000", fontFamily: "Roboto", fontSize: "13px" }}
            >
              Subscribers
            </Typography>
          </Stack>
        </Grid>
        <Typography
          sx={{
            color: "#000000",
            fontFamily: "Roboto",
            fontSize: "15px",
            mt: 5,
          }}
        >
          Bio
        </Typography>

        <Typography
          border={"2px solid grey"}
          padding={"15px"}
          borderRadius={"5px"}
        >
          Living it and killing it!!! 100%
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontFamily: "Roboto",
            fontSize: "15px",
            mt: 2,
          }}
        >
          Interests
        </Typography>
        <Box
          border={"2px solid grey"}
          // paddingLeft="20px"
          padding={"15px"}
          borderRadius={"5px"}
        >
          {buttonType.map((item) => (
            <Button
              variant="outlined"
              key={item}
              sx={{
                color: "#000000",
                fontFamily: "Avenir LT Std",
                fontSize: "12px",
                borderRadius: "35px",
                // border: "5px dashed green",
                borderColor: "#000000",
                ml: 2,
              }}
            >
              {item}
            </Button>
          ))}
        </Box>

        <Typography
          sx={{
            color: "#000000",
            fontFamily: "Roboto",
            fontSize: "15px",
            mt: 2,
          }}
        >
          Services
        </Typography>

        <Grid
          border={"2px solid grey"}
          borderRadius={"5px"}
          pb={1}
          direction="row"
          container
          alignSelf="center"
        >
          {[0, 1, 2, 3, 4, 5, 6, 4, 4, 4].map((item) => (
            <Grid xs={12} md={3} sm={6}>
              <img src={serviceImg} width={"100%"} height={182} mt={20} />
              {/* <Grid
                mt={-6}
                flexDirection={"row"}
                justifyContent="space-between"
                width={284}
              > */}

              <Typography
                color="rgba(255, 255, 255, 0.95)"
                // color={"red"}
                fontFamily={"Avenir LT Std"}
                fontSize={13}
                mt={-4}
                ml={1}
              >
                I will sing a song for you
              </Typography>
              <Typography
                color="rgba(255, 255, 255, 0.95)"
                ml={32}
                mt={-2}
                fontFamily={"Avenir LT Std"}
                fontSize={12}
              >
                $4.9
              </Typography>
              {/* </Grid> */}
            </Grid>
          ))}
        </Grid>

        <Typography
          sx={{
            color: "#000000",
            fontFamily: "Roboto",
            fontSize: "24px",
            fontWeight: "700",
            mt: 4,
          }}
        >
          Payout history
        </Typography>

        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
            backgroundColor: "#F5F5F5",
            my: 1,
          }}
        >
          {/* <TableContainer sx={{ maxHeight: 600 }}> */}
          <Table stickyHeader aria-label="sticky table">
            <TableBody sx={{ height: 20 }}>
              {arr.map((row) => (
                <TableRow
                  // onClick={() => (setIde(row.id), setCheck(!check))}
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    // backgroundColor: check ? "green" : "red",
                  }}
                >
                  <TableCell align="center" scope="row">
                    <Grid container alignItems={"center"}>
                      <img src={row.profile} />
                      <Typography ml={"10px"}>{`${row.email}`}</Typography>
                    </Grid>
                  </TableCell>
                  <TableCell align="center"></TableCell>

                  <TableCell align="center">{row.dateJoined}</TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center">{row.content}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* </TableContainer> */}
        </Paper>
        <Typography mt="55px"></Typography>

        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        <Typography mt="55px"></Typography>
      </Box>
    </Container>
  );
}
export default UserProfile;
