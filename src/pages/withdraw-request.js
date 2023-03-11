import {
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
import { withdrawPic } from "../assets/images";
import { useNavigate } from "react-router-dom";

const WithdrawRwquest = () => {
  const navigate = useNavigate();

  const [age, setAge] = React.useState("");
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
          textTransform: 'none',
        }}
      >
        Withdraw Request
      </Button>
      <Box
        sx={{
          mt: 4,
          width: { sm: "37%", xs: '100%' },
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
            borderRadius: '50%',
            // background: { sm: "red", xs: 'green', },
          }}
          alt="photosd here"
          src={withdrawPic}
        />
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Grid container my={{ sm: 3, xs: 2 }} justifyContent='end' >
            <Typography
              borderRadius={"30px 0px 0px 30px"}
              bgcolor={"blue"}
              color={"white"}
              px={{ sm: 1, xs: 1 }}
              // mr={}
              fontSize={{ sm: 36, xs: 18 }}
            >
              100$
            </Typography>
          </Grid>
          <Typography fontSize={{ sm: "34px", xs: '24px' }} ml={1} mt={-3} color={"grey"}>
            Ahmad
          </Typography>
          <Typography fontSize={{ sm: "14px", xs: '10px' }} ml={1} mt={-1} color={"grey"}>
            ahmadworkspace@gmail.com
          </Typography>
          <Box my={1}>
            <FormControl
              sx={{
                minWidth: { sm: "210px", xs: '150px' },
                color: "white",
                // bgcolor: "blue",
                borderRadius: "20px",
              }}
              size={"small"}
            >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={(e) => setAge(e.target.value)}
              >
                <MenuItem value={20}>Approved</MenuItem>
                <MenuItem value={10}>Rejected</MenuItem>
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
        />
      </Box>
      <Button
        onClick={() => navigate("/filterEarning")}
        sx={{
          variant: "outlined",
          bgcolor: "blue",
          color: "white",
          width: { sm: "270px", xs: '200px' },
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
