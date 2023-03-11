import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
  Box,
  Typography,
  TextField,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { line, creatorImage } from "../assets/images";
import profile from "../assets/profile.svg";
const AccountReported = () => {
  var arr = [
    {
      id: 1,
      profile: creatorImage,
      email: "rosemary@gmail.com",
      creatorName: "Rose Marry",
      address: "20 Cooper Square, New York, NY 10003, USA",
    },
    {
      id: 1,
      profile: creatorImage,
      email: "rosemary@gmail.com",
      creatorName: "Rose Marry",
      address: "20 Cooper Square, New York, NY 10003, USA",
    },
    {
      id: 1,
      profile: creatorImage,
      email: "rosemary@gmail.com",
      creatorName: "Rose Marry",
      address: "20 Cooper Square, New York, NY 10003, USA",
    },
    {
      id: 1,
      profile: creatorImage,
      email: "rosemary@gmail.com",
      creatorName: "Rose Marry",
      address: "20 Cooper Square, New York, NY 10003, USA",
    },
    {
      id: 1,
      profile: creatorImage,
      email: "rosemary@gmail.com",
      creatorName: "Rose Marry",
      address: "20 Cooper Square, New York, NY 10003, USA",
    },
    {
      id: 2,
      profile: creatorImage,
      email: "rosemary@gmail.com",
      creatorName: "Rose Marry",
      address: "20 Cooper Square, New York, NY 10003, USA",
    },
    {
      id: 3,
      profile: creatorImage,
      email: "rosemary@gmail.com",
      creatorName: "Rose Marry",
      address: "20 Cooper Square, New York, NY 10003, USA",
    },
    {
      id: 4,
      profile: creatorImage,
      email: "rosemary@gmail.com",
      creatorName: "Rose Marry",
      address: "20 Cooper Square, New York, NY 10003, USA",
    },
    {
      id: 5,
      profile: creatorImage,
      email: "rosemary@gmail.com",
      creatorName: "Rose Marry",
      address: "20 Cooper Square, New York, NY 10003, USA",
    },
    {
      id: 6,
      profile: creatorImage,
      email: "rosemary@gmail.com",
      creatorName: "Rose Marry",
      address: "20 Cooper Square, New York, NY 10003, USA",
    },
    {
      id: 7,
      profile: creatorImage,
      email: "rosemary@gmail.com",
      creatorName: "Rose Marry",
      address: "20 Cooper Square, New York, NY 10003, USA",
    },
  ];
  const navigate = useNavigate();

  return (
    <Box
      display={"flex"}
      justifycreatorName={"center"}
      alignItems={"center"}
      flexDirection="column"
      px={"10%"}
      // m={20}
      // boxShadow="1px 1px 10px  #000"
    >
      <Button
        sx={{
          variant: "outlined",
          color: "black",
          boxShadow: "1px 1px 5px  #000",
          width: "180px",
          height: "40px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          mt: -3,
        }}
      >
        Account Reported
      </Button>
      <Box
        sx={{
          //   width: "cal(100% - 700px)",
          boxShadow: "1px 2px 5px  #000",
          borderRadius: "20px",
          mt: 3,
          pr: 4,
          display: "flex",
          // bgcolor: "red",
          bgcolor: "white",
          flexDirection: "column",
          width: "78vw",
        }}
        justifycreatorName={"center"}
        alignItems={"center"}
      >
        {/* <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 600 }}> */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Creator Name</TableCell>
              <TableCell>
                <img src={line} height={"30px"} />
              </TableCell>
              <TableCell align="center">Email </TableCell>
              <TableCell>
                <img src={line} height={"30px"} />
              </TableCell>
              <TableCell align="center">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  sx={{
                    align: "center",
                  }}
                >
                  <Grid container alignItems={"center"} ml={-2.5}>
                    <img
                      src={row.profile}
                      width={"38px"}
                      // onClick={() => navigate("/userProfile")}
                    />
                    <Typography ml={"10px"}>{`${row.creatorName}`}</Typography>
                  </Grid>
                </TableCell>
                <TableCell></TableCell>
                <TableCell
                  align="center"
                  sx={{ boxShadow: "0px 0px 4px  #000" }}
                >
                  {row.email}
                </TableCell>
                <TableCell></TableCell>
                <TableCell
                  align="center"
                  sx={{ boxShadow: "0px 0px 4px  #000", m: "10px" }}
                >
                  {row.address}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* </TableContainer>
        </Paper> */}
      </Box>
    </Box>
  );
};

export default AccountReported;
