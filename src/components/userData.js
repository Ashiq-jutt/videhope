import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import profile from "../assets/profile.svg";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

var arr = [
  {
    id: 1,
    profile: profile,
    email: "1@gmail.com",
    dateJoined: "12/02/22",
    folowers: 455,
    content: 123,
    subscribers: "455",
  },
  {
    id: 1,
    profile: profile,
    email: "1@gmail.com",
    dateJoined: "12/02/22",
    folowers: 455,
    content: 123,
    subscribers: "455",
  },
  {
    id: 1,
    profile: profile,
    email: "1@gmail.com",
    dateJoined: "12/02/22",
    folowers: 455,
    content: 123,
    subscribers: "455",
  },
  {
    id: 1,
    profile: profile,
    email: "1@gmail.com",
    dateJoined: "12/02/22",
    folowers: 455,
    content: 123,
    subscribers: "455",
  },
  {
    id: 1,
    profile: profile,
    email: "1@gmail.com",
    dateJoined: "12/02/22",
    folowers: 455,
    content: 123,
    subscribers: "455",
  },
  {
    id: 2,
    profile: profile,
    email: "1@gmail.com",
    dateJoined: "12/02/22",
    folowers: 455,
    content: "123",
    subscribers: "455",
  },
  {
    id: 3,
    profile: profile,
    email: "1@gmail.com",
    dateJoined: "12/02/22",
    folowers: 455,
    content: "123",
    subscribers: "455",
  },
  {
    id: 4,
    profile: profile,
    email: "1@gmail.com",
    dateJoined: "12/02/22",
    folowers: 455,
    content: "123",
    subscribers: "455",
  },
  {
    id: 5,
    profile: profile,
    email: "1@gmail.com",
    dateJoined: "12/02/22",
    folowers: 455,
    content: "123",
    subscribers: "455",
  },
  {
    id: 6,
    profile: profile,
    email: "1@gmail.com",
    dateJoined: "12/02/22",
    folowers: 455,
    content: "123",
    subscribers: "455",
  },
  {
    id: 7,
    profile: profile,
    email: "1@gmail.com",
    dateJoined: "12/02/22",
    folowers: 455,
    content: "123",
    subscribers: "455",
  },
];
export default function UserData() {
  const navigate = useNavigate();
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Usernames</TableCell>
              <TableCell align="center">Date joined</TableCell>
              <TableCell align="center">Private Content </TableCell>
              <TableCell align="center">Followers</TableCell>
              <TableCell align="center">Subscribers</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ height: 20 }}>
            {arr.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" scope="row">
                  <Grid container alignItems={"center"}>
                    <img
                      src={row.profile}
                      onClick={() => navigate("/userProfile")}
                    />
                    <Typography ml={"10px"}>{`${row.email}`}</Typography>
                  </Grid>
                </TableCell>
                <TableCell align="center">{row.dateJoined}</TableCell>
                <TableCell align="center">{row.content}</TableCell>
                <TableCell align="center">{row.folowers}</TableCell>
                <TableCell align="center">{row.subscribers}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
