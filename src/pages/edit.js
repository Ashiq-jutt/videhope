import { Button, Grid, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { newestPic } from "../assets/images";
import { updateStaff } from "../services/api/api-actions";
import { useLocation } from 'react-router-dom';
import { isBlock } from "@babel/types";
import { useState } from "react";
const EditProfile = () => {
  const location = useLocation();
  const myData = location?.state?.item;
  const { id, name, email, profile } = myData
  // console.log("🚀 ~ file: edit.js:10 ~ EditProfile ~ myData:", id)
  const [payload, setPayload] = React.useState({
    staffId: id,
    accessTo: 'Accounting',
    isBlocked: false
  })
  const [data, setData] = React.useState({
    accounting: false,
    createPanel: false,
    createService: false,
  })
  const [isBlocked, setIsBlocked] = useState(false)
  const updateData = async () => {
    try {
      await updateStaff(payload);
    } catch (error) {
      console.log('error=>', error);
    }
  }

  const handleCheck = (e) => {
    if (e?.target?.value == 'isBlock') {
      console.log("🚀 ~ file: edit.js:35 ~ handleCheck ~ e.target.value:", e.target.value)


    } else {
      console.log("🚀 ~ file: edit.js:35 ~ handleCheck ~ val:", e.target.value)
    }

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
          width: { xs: 'none', sm: '470px' },
          bgcolor: "white",
          boxShadow: "1px 1px 5px  #000",
          borderRadius: "30px",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }


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
              src={profile || newestPic}
              style={{
                height: "160px",
                width: "160px",
                borderRadius: "100px",

              }}
            />
            <Box sx={{ textAlign: 'center', }}>
              <Typography fontSize={"24px"} >
                {name}
              </Typography>
              <Typography fontSize={"12px"} mt={-1} >
                {email}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <br />
        <Box
          style={{
            width: "235px",
            display: "flex",
            justifyContent: "center",
            borderRadius: "30px",
            alignItems: "center",
            backgroundColor: "#ADD8E6",
            flexDirection: "column",

            marginTop: '25px'
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
                value={'isBlock'}
                onChange={handleCheck}
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
            {
              [{ data: "Accounting", value: 'accounting' },
              { data: "Creators Panel", value: 'createPanel' },
              { data: "Customer Service", value: 'customerService' }].map(
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
                    <Typography fontSize={"12px"}>Accounting</Typography>

                    <Switch
                      value={item.value}
                      onChange={handleCheck}
                      inputProps={{ "aria-label": "controlled" }}
                    />

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
