import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
  Box,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { accountingImage } from "../assets/images";

const Subscription = () => {
  const navigate = useNavigate();
  const [age, setAge] = React.useState("");

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection="column"
      mt={"-30px"}
    >
      <Box
        sx={{
          //   width: "cal(100% - 700px)",
          bgcolor: "white",

          display: "flex",
          bgcolor: "white",
          flexDirection: "column",
          mb: 1,
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          container
          sx={{
            px: "5vw",
            //   width: "cal(100% - 700px)",
            bgcolor: "white",
            boxShadow: "2px 2px 4px  #000",
            borderRadius: "0px 0px 100px 100px",
          }}
        >
          <Box>
            <Button
              //   onClick={() => navigate("/subscription")}
              sx={{
                color: "grey",
                boxShadow: "2px 2px 4px  #000",
                borderRadius: "0px 0px 16px 16px",
                px: 4,
                height: "40px",
                ml: 8,
              }}
            >
              Subscriptions
            </Button>
            <Box container justifyContent={"center"} px={3} py={5}>
              <Typography sx={{ color: "blue", fontSize: 18, ml: 8 }}>
                Set Subscription
              </Typography>
              <Box my={3}>
                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  //   bgcolor={"red"}
                  sx={{
                    borderBottom: 1,
                    borderBottomColor: "black",
                    width: "22vw",
                  }}
                >
                  <Typography>180 GNF </Typography>
                  <Typography> to </Typography>

                  <FormControl
                    sx={{
                      minWidth: "123px",
                      borderColor: "white",
                      borderRadius: 12,
                    }}
                    size={"small"}
                  >
                    <InputLabel id="demo-simple-select-label">usd</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={(e) => setAge(e.target.value)}
                    >
                      <MenuItem value={20}>usd</MenuItem>
                      <MenuItem value={10}>pkr</MenuItem>
                      <MenuItem value={30}>inr</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Box>
              <Box my={3}>
                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  //   bgcolor={"red"}
                  sx={{
                    borderBottom: 1,
                    borderBottomColor: "black",
                    width: "22vw",
                  }}
                >
                  <Typography>180 GNF </Typography>
                  <Typography> </Typography>

                  <FormControl
                    sx={{
                      minWidth: "123px",
                      borderColor: "white",
                      borderRadius: 12,
                    }}
                    size={"small"}
                  >
                    <InputLabel id="demo-simple-select-label">Mali</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={(e) => setAge(e.target.value)}
                    >
                      <MenuItem value={20}>Mali</MenuItem>
                      <MenuItem value={10}>Pakistan</MenuItem>
                      <MenuItem value={30}>Chinia</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Box>
              <Button
                onClick={() => navigate("/accounting")}
                sx={{
                  bgcolor: "blue",
                  color: "white",
                  boxShadow: "2px 2px 4px  #000",
                  borderRadius: "60px",
                  px: 4,
                  py: 0.3,
                  mt: 3,
                  ml: 13,
                }}
              >
                Done
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Subscription;
