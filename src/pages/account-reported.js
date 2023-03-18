import { CardMedia } from "@material-ui/core";
import {
  Button,
  Grid,
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { line, creatorImage } from "../assets/images";
import profile from "../assets/profile.svg";
import Loading from "../components/Loading";
import { GetReportedUser } from "../utils/api-calls";
import { IMAGE_BASE_URL } from "../utils/constant";
const AccountReported = () => {
  const [loading, setLoading] = useState(false);
  const [reportedAccount, setReportedAccount] = useState([]);
  useEffect(() => {

    (async () => {
      setLoading(true)

      const res = await GetReportedUser();
      console.log("res in reportAccount calls=>", res?.data);
      setReportedAccount(res?.data || []);
      setLoading(false)

    })();

  }, []);

  const navigate = useNavigate();
  if (loading) return <Loading />;

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection="column"
      px={"10%"}
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
        justifyContent={"center"}
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
            {reportedAccount?.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    align: "center",
                  }}
                >
                  <Grid container alignItems={"center"} ml={-2.2}>
                    <img
                      src={`${IMAGE_BASE_URL}${row?.reportedUser?.profile}`}

                      style={{
                        width: "38px",
                        height: "38px",
                        borderTopRightRadius: '10px',
                        borderBottomRightRadius: '10px',
                      }}
                      onClick={() => navigate('/userProfile', { state: { item: row } })}

                      alt='img'
                    />
                    <Typography ml={"10px"}>{`${row?.reportedUser?.userName}`}</Typography>
                  </Grid>
                </TableCell>
                <TableCell></TableCell>
                <TableCell
                  align="center"
                  sx={{ boxShadow: "0px 0px 4px  #000" }}
                >
                  {`${row?.reportedUser?.email}`}
                </TableCell>
                <TableCell></TableCell>
                <TableCell
                  align="center"
                  sx={{ boxShadow: "0px 0px 4px  #000", m: "10px" }}
                >
                  {`${row?.reportedUser?.email}`}
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
