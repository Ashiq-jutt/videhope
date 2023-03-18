import { Button, Grid, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { newestPic } from "../assets/images";
import { useLocation, useNavigate } from "react-router-dom";
import { IMAGE_BASE_URL } from "../utils/constant";
import { ApproveRequest, RejectRequest } from "../utils/api-calls";
import Loading from "../components/Loading";

const NewestDetail = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const location = useLocation();
  const myData = location?.state?.myData;
  const item = location?.state?.item;
  console.log("🚀 ~ file: newest-detail.js:9 ~ item:", item)
  const [flag, setFlag] = useState(false);

  const handleCheck = (event) => {
    setFlag(event.target.checked);

  };
  console.log("🚀 ~ file: newest-detail.js:20 ~ handleCheck ~ event.target.checked1:", flag)
  const handlePut = () => {
    if (flag) {
      (async () => {
        setLoading(true);
        try {
          const res = await ApproveRequest(item?.request?.id);
          console.log("Approve Message =>", res?.data);
        } catch (error) {
          console.log("🚀 ~ file: newest-detail.js:32 ~ error:", error)

        }
        setLoading(false);
      })();
    }
    else {
      (async () => {
        setLoading(true);
        try {
          const res = await RejectRequest(item?.request?.id);
          console.log("Reject Message =>", res?.data);
        } catch (error) {
          console.log("🚀 ~ file: newest-detail.js:44 ~ error:", error)

        }
        setLoading(false);
      })();
    }
    navigate('/newest', { state: { item: myData } })
  }
  if (loading) return <Loading />;
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box>
        <Box
          sx={{
            mt: 4,
            height: { sm: "250px", xs: '500px' },
            width: { sm: "470px", xs: '235px' },
            bgcolor: "white",
            boxShadow: "1px 1px 5px  #000",
            borderRadius: "50px",
            display: { sm: "flex", xs: 'block' },

          }}
        >
          <Grid
            sx={{
              height: "250px",

              width: "235px",
            }}
          >
            <img
              alt={"photoo here"}
              src={`${IMAGE_BASE_URL}${item?.userImage}`}
              style={{
                height: '245px',
                width: '245px',
                borderRadius: "150px",
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </Grid>
          <Box
            style={{
              width: "235px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

            }}
          >
            <Box>
              <Typography fontSize={"18px"}>{item?.username}</Typography>
              <Typography fontSize={"12px"}>{item?.userEmail}</Typography>
              <Box
                sx={{
                  height: "35px",
                  width: "200px",
                  bgcolor: "white",
                  boxShadow: "1px 1px 5px  #000",
                  borderRadius: "10px",
                  display: "flex",
                  mt: 2,
                  alignSelf: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography m={1} fontSize={"12px"}>
                  Verified
                </Typography>
                <Switch
                  defaultChecked={item?.request?.isApproved}
                  // checked1={checked1}
                  onChange={handleCheck}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </Box>

            </Box>
          </Box>
        </Box>
        <Box justifyContent={"center"}>
          <Button
            // onClick={() => navigate("/newest")}
            onClick={() => handlePut()}
            sx={{
              variant: "outlined",
              color: "white",
              width: { sm: "12vw", xs: '30vw' },
              height: "30px",
              borderRadius: "20px",
              bgcolor: "blue",
              mt: 3,
              mb: 1,
              ml: 18,
              textTransform: 'capitalize',
            }}
          >
            Done
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewestDetail;
