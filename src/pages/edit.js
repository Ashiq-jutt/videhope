import { Button, Grid, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { newestPic } from "../assets/images";
import { updateStaff } from "../services/api/api-actions";
import { useLocation } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useState } from "react";
import { UpdateStaff } from "../utils/api-calls";
const EditProfile = () => {
  const location = useLocation();
  const myData = location?.state?.item;
  const { id, name, email, profile } = myData
  const [selectedValues, setSelectedValues] = useState('');
  const [isBlock, setIsBlock] = useState(null)
  const [payload, setPayload] = React.useState({
    staffId: id,
    accessTo: '',
    isBlocked: false
  })

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let newValues = '';

    if (checked) {
      newValues = selectedValues ? selectedValues + ',' + name : name;
    } else {
      newValues = selectedValues.replace(new RegExp('\\b' + name + '\\b,?', 'g'), '').replace(/^,|,$/g, '');
    }
    setSelectedValues(newValues)
    setPayload({ ...payload, accessTo: selectedValues });

    console.log("🚀 ~ file: edit.js:37 ~ handleCheckboxChange ~ payload:", payload)
  };
  const handleBlocked = (e) => {
    const { checked } = e.target;
    checked ? setPayload({ ...payload, isBlocked: false }) : setPayload({ ...payload, isBlocked: true })

    console.log("🚀 ~ file: edit.js:42 ~ handleBlocked ~ payload:", payload)

  };

  const updateData = () => {
    try {
      UpdateStaff(payload);
      console.log("🚀 ~ file: edit.js:50 ~ updateData ~ payload:", payload)
    } catch (error) {
      console.log("🚀 ~ file: edit.js:49 ~ updateData ~ error:", error)
    }
  }



  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection="column"
    >
      <Button
        onClick={updateData}
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
        Save
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
            <FormControlLabel
              // label="Option A"
              control={<Switch name="isBlock" onChange={handleBlocked} color='primary' />}
            />
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
              <FormControlLabel
                // label="Option A"
                control={<Switch name='Accounting' onChange={handleCheckboxChange} color='primary' />}

              />
            </Box>
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
              <Typography fontSize={"12px"}>Creators Panel</Typography>
              <FormControlLabel
                // label="Option A"
                control={<Switch name='createPanel' onChange={handleCheckboxChange} color='primary' />}

              />
            </Box>
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
              <Typography fontSize={"12px"}>Customer Service</Typography>
              <FormControlLabel
                // label="Option A"
                control={<Switch name='ustomerService' onChange={handleCheckboxChange} color='primary' />}

              />
            </Box>


          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfile;
