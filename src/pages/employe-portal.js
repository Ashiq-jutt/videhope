import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { employedPortal, empPic } from "../assets/images";
import "../css/employe-portal.css";
import { getAllStaff } from "../services/api/api-actions";
import { GetAll } from "../utils/api-calls";
const EmployeePortal = () => {
  const navigate = useNavigate();
  const [allStaff, setAllStaff] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const res = await GetAll();
      console.log("res in screen=>", res);
      setAllStaff(res?.data || []);
    })();
  }, []);
  return (
    <Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <img alt="Pic here" src={employedPortal} className="image" />
        </Box>
        <Button
          onClick={() => navigate("/createNewUser")}
          sx={{
            mt: "20px",
            mb: "30px",
            bgcolor: "#0288d1",
            height: "40px",
            width: { sm: "320px", xs: "200px" },
            borderRadius: "16px",
            color: "#fff",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#0288d1",
              // opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          Create New User
        </Button>
      </Grid>
      <Grid container justifyContent="center">
        {allStaff?.map((item) => (
          <Box
            key={item?.id}
            className="card"
            sx={{
              boxShadow: "3px 4px 10px  #000",
              shadowOpacity: 0.46,
              width: "26rem",
              height: "4.2rem",
              bgcolor: "#fff",
              // "&:hover": {
              // backgroundColor: "red",
              //   opacity: [0.9, 0.8, 0.7],
              // },
              border: ".4px solid grey",
              px: "3px",
              py: "5px",
              my: "10px",
              mx: "20px",
              borderRadius: 3,
            }}
          >
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <Box>
                  <img
                    alt="Staff Image"
                    src={item?.image?.uri || empPic}
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "100px",
                      // resize: "-moz-initial",
                    }}
                  />
                </Box>
                <Typography className="text" ml={"5px"}>
                  {item?.name}
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"flex-end"}
                flexDirection={"column"}
              >
                <Button
                  onClick={() => navigate('/detail', { state: { item: item } })}
                  className="button"
                  sx={{
                    borderRadius: 10,
                    height: "26px",
                    width: "170px",
                    bgcolor: "#0288d1",
                    "&:hover": {
                      backgroundColor: "#0288d1",
                      // opacity: [0.9, 0.8, 0.7],
                    },
                    color: "#fff",
                    fontSize: 12,
                    textTransform: "capitalize",
                  }}
                >
                  Detail
                </Button>
                <Button
                  // navigate('/second-page', { state: { myData: 'Hello World' } });
                  onClick={() => navigate('/editProfile', { state: { item: item } })}
                  className='button'
                  sx={{
                    bgcolor: "#ff9800",
                    "&:hover": {
                      backgroundColor: "#ff9800",
                      // opacity: [0.9, 0.8, 0.7],
                    },
                    borderRadius: 10,
                    height: "26px",
                    width: "170px",
                    mt: "5px",
                    color: "#fff",
                    textTransform: "capitalize",
                  }}
                >
                  Edit
                </Button>
              </Box>
            </Grid>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default EmployeePortal;
