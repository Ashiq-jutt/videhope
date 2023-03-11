import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import profile from "../assets/profile.svg";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Grid, Stack, Typography } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

var arr = [
  {
    id: 1,
    profile: profile,
    email: "john@gmail.com",
    payment: "$125.56",
  },
  {
    id: 1,
    profile: profile,
    email: "john@gmail.com",
    payment: "$125.56",
  }, {
    id: 1,
    profile: profile,
    email: "john@gmail.com",
    payment: "$125.56",
  }, {
    id: 1,
    profile: profile,
    email: "john@gmail.com",
    payment: "$125.56",
  }, {
    id: 1,
    profile: profile,
    email: "john@gmail.com",
    payment: "$125.56",
  },
  {
    id: 2,
    profile: profile,
    email: "john@gmail.com",
    payment: "$125.56",
  },
  {
    id: 3,
    profile: profile,
    email: "john@gmail.com",
    payment: "$125.56",
  },
  {
    id: 4,
    profile: profile,
    email: "john@gmail.com",
    payment: "$125.56",
  },
  {
    id: 5,
    profile: profile,
    email: "1@gmail.com",
    payment: "$125.56",
  },
];
export default function PaymentData() {
  return (
    <Box>
      <Stack
        direction="row"
        // divider={<Divider orientation="vertical" flexItem />}
        // spacing={2}
        justifyContent="space-around"
      >
        <h2>Payment</h2>

        <Box sx={{}}>
          <h3>Release payments</h3>
        </Box>
      </Stack>
      <Stack
        direction="row"
        // divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        justifyContent="center"
      >
        <h4>Pending</h4>

        <Box sx={{}}>
          <h4>Completed</h4>
        </Box>
      </Stack>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Usernames</TableCell>
                <TableCell align="right">Total payment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arr.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" scope="row">
                    <Grid container alignItems={'center'}>
                      <img src={row.profile} />
                      <Typography ml={'10px'}>
                        {`${row.email}`}
                      </Typography>
                    </Grid>
                  </TableCell>
                  <TableCell align="right">{row.payment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
