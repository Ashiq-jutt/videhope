import { Button, Grid, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { newestPic } from "../assets/images";
const EditProfile = () => {
  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(true);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked1);
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
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
          textTransform: "capitalize",
          mt: -2,
        }}
      >
        Edit
      </Button>
      <Box
        sx={{
          mt: 4,
          height: "250px",
          width: {xs:'none',sm:'470px'},
          bgcolor: "white",
          boxShadow: "1px 1px 5px  #000",
          borderRadius: "30px",
          display: "flex",
          flexDirection: {xs:"column",sm:"row"}
          
          
        }}
      >

        <Grid
          sx={{
            display: "flex",
            height: "250px",
            width: "235px",
            // bgcolor: "blue",
            alignItems: "center",
            justifyContent: "center",
          
            
          }}
        >
          <Box>
            <img
              alt={"pic here"}
              src={newestPic}
              style={{
                height: "160px",
                width: "160px",
                borderRadius: "100px",
                
              }}
            />
            <Box>
              <Typography fontSize={"24px"} ml={4}>
                Jackson
              </Typography>
              <Typography fontSize={"12px"} ml={2} mt={-1}>
                Jacksonmariay@gmail.com
              </Typography>
            </Box>
          </Box>
        </Grid>
        <br/>
        <Box
          style={{
            width: "235px",
            display: "flex",
            justifyContent: "center",
            borderRadius: "30px",
            alignItems: "center",
            backgroundColor: "#ADD8E6",
            flexDirection: "column",
          
            marginTop:'25px'
          }}
        >
          <Box
            sx={{
              height: "35px",
              width: "170px",
              bgcolor: "white",
              display: "flex",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
              justifyContent: "space-around",
              flexDirection: "row",
              alignItems: "center",
           
              
            }}
          >
            <Typography m={1} fontSize={"24px"}>
              Block
            </Typography>
            <Typography>
              <Switch
                checked1={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Typography>
          </Box>
          <Box
            sx={{
              height: "120px",
              width: "170px",
              bgcolor: "white",
              display: "flex",
              mt: 1,
              //   alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography fontSize={14} ml={4.2}>
              Login Access
            </Typography>
            {["Accounting", "Creators Panel", "Customer Service"].map(
              (item) => (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    // bgcolor: "red",
                    mt: "1px",
                    height: "30px",
                    p: "1px",
                  }}
                >
                  <Typography fontSize={"12px"}>{item}</Typography>
                  <Typography>
                    <Switch
                      checked1={checked1}
                      onChange={handleChange1}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </Typography>
                </Box>
              )
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfile;
