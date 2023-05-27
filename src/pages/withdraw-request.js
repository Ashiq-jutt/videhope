import {
  Alert,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IMAGE_BASE_URL } from "../utils/constant";
import { UpdateWithdrawRequestStatus } from "../utils/api-calls";
import { useAlert } from "react-alert";
const WithdrawRwquest = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const alert = useAlert();
  const request = location?.state?.item;
  console.log("User info ===> ", request?.user);
  const [status, setStatus] = React.useState(request?.request?.status);
  const [bankAccount, setBankAccount] = React.useState(
    request?.request?.bankAccount
  );
  const updateStatus = async () => {
    var payload = {
      id: request?.request?.id,
      status: status,
      adminNotes: "",
      account: bankAccount,
    };
    var res = await UpdateWithdrawRequestStatus(payload);

    if (res?.succeeded) {
      alert.success("Withdraw Request Status Successfully Updated!");
    } else {
      alert.error("Something went wrong");
    }
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      // bgcolor='red'
    >
      <Button
        sx={{
          variant: "outlined",
          color: "black",
          boxShadow: "1px 1px 5px  #000",
          width: "200px",
          height: "50px",
          borderRadius: "5px 5px 20px 20px",
          mt: -4,
          textTransform: "none",
        }}
      >
        Withdraw Request
      </Button>
      <Box
        sx={{
          mt: 4,
          width: { sm: "37%", xs: "100%" },
          boxShadow: "1px 1px 5px  #000",
          borderRadius: "30px",
          display: "flex",
          flex: 1,
          // background: 'green'
        }}
      >
        <Box
          component="img"
          sx={{
            height: { sm: 180, xs: 130 },
            width: { sm: 180, xs: 130 },
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            // background: { sm: "red", xs: 'green', },
          }}
          alt="photosd here"
          src={IMAGE_BASE_URL + request?.user?.profile}
        />
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Grid container my={{ sm: 3, xs: 2 }} justifyContent="end">
            <Typography
              borderRadius={"30px 0px 0px 30px"}
              bgcolor={"blue"}
              color={"white"}
              px={{ sm: 1, xs: 1 }}
              // mr={}
              fontSize={{ sm: 20, xs: 10 }}
            >
              {request?.request?.requestedAmount} GNF
            </Typography>
          </Grid>
          <Typography
            fontSize={{ sm: "34px", xs: "24px" }}
            ml={1}
            mt={-3}
            color={"grey"}
          >
            {request?.user?.userName}
          </Typography>
          <Typography
            fontSize={{ sm: "14px", xs: "10px" }}
            ml={1}
            mt={-1}
            color={"grey"}
          >
            {request?.user?.email}
          </Typography>
          <Box my={1}>
            <FormControl
              sx={{
                minWidth: { sm: "210px", xs: "150px" },
                color: "white",
                // bgcolor: "blue",
                borderRadius: "20px",
              }}
              size={"small"}
            >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Age"
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value={"Pending"}>Pending</MenuItem>
                <MenuItem value={"Approved"}>Approved</MenuItem>
                <MenuItem value={"Reject"}>Rejected</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { width: { sm: "42ch", xs: "30ch" }, my: 3 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Bank Account"
          variant="standard"
          autoComplete="off"
          onChange={(e) => setBankAccount(e.target.value)}
          value={request?.request?.bankAccount}
        />
      </Box>
      <Button
        onClick={() => updateStatus()}
        sx={{
          variant: "outlined",
          bgcolor: "blue",
          color: "white",
          width: { sm: "270px", xs: "200px" },
          height: "35px",
          borderRadius: "20px",
          mb: 1,
          textAlign: "center",
          mt: 3,
        }}
      >
        Done
      </Button>
    </Box>
  );
};

export default WithdrawRwquest;
