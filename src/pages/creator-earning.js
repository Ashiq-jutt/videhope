import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { creatorEarning } from "../assets/images";
import { useLocation, useNavigate } from "react-router-dom";
import { IMAGE_BASE_URL } from "../utils/constant";
import { getCreatorEarnings } from "../utils/api-calls";
import Loading from "../components/Loading";
import moment from "moment/moment";
const CreatorEarning = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const myData = location?.state?.item;
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [filter, setFilter] = React.useState(1);
  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await getCreatorEarnings(myData?.userId);
      setData(res?.data);
      setLoading(false);
    })();
  }, [filter]);
  if (loading) return <Loading />;
  return (
    <Box>
      <Button
        onClick={() => navigate("/accounting")}
        sx={{
          variant: "outlined",
          color: "black",
          boxShadow: "1px 1px 5px  #000",
          width: "200px",
          height: "50px",
          borderRadius: "5px 5px 20px 20px",
          mt: -4,
          ml: 8,
          textTransform: "capitalize",
        }}
      >
        Creator Earnings
      </Button>
      <Box
        container
        sx={{ display: "flex", flexDirection: { sm: "row", xs: "column" } }}
      >
        <Box>
          <Box
            sx={{
              mt: 3,
              mx: 8,
              boxShadow: "1px 1px 5px  #000",
              borderRadius: "30px",
              display: "flex",
              bgcolor: "white",
              // justifyContent: "center",
              // alignItems: "center",
              direction: "column",
              height: "420px",
              width: "240px",
            }}
          >
            <Box>
              <img
                src={IMAGE_BASE_URL + myData?.userImage}
                style={{ width: "237px", height: "248px", borderRadius: 25 }}
              />

              <Typography fontSize={"34px"} textAlign={"center"} color={"grey"}>
                {myData?.username}
              </Typography>
              <Typography fontSize={"12px"} textAlign={"center"} color={"grey"}>
                {myData?.userEmail}
              </Typography>
              <Typography fontSize={26} textAlign={"center"}>
                Total Earning
              </Typography>

              <Typography fontSize={36} textAlign={"center"} color={"blue"}>
                {data?.totalEarnings} GNF
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              direction: "column",
              width: "220px",
              mx: 8,
            }}
          >
            <Typography
              fontSize={"24px"}
              mt={5}
              textAlign={"center"}
              color={"grey"}
            >
              Past Withdrawal
            </Typography>
            <Typography
              fontSize={"24px"}
              mt={2}
              textAlign={"center"}
              color={"grey"}
            >
              Filter
            </Typography>

            <Box sx={{ flex: 1, direction: "column" }}>
              <Button
                onClick={() => setFilter(1)}
                sx={{
                  textTransform: "none",
                  bgcolor: filter == 1 ? "blue" : "white",
                  color: filter == 1 ? "white" : "grey",
                  boxShadow: "2px 2px 4px  #000",
                  borderRadius: "60px",
                  px: 10.2,
                  mt: 1,
                  py: "2px",
                }}
              >
                Weekly
              </Button>
              <Button
                onClick={() => setFilter(2)}
                sx={{
                  textTransform: "none",
                  bgcolor: filter == 2 ? "blue" : "white",
                  color: filter == 2 ? "white" : "grey",
                  boxShadow: "2px 2px 4px  #000",
                  borderRadius: "60px",
                  px: 10,
                  my: 1,
                  py: "2px",
                }}
              >
                Monthly
              </Button>
              <Button
                onClick={() => setFilter(3)}
                sx={{
                  textTransform: "none",
                  bgcolor: filter == 3 ? "blue" : "white",
                  color: filter == 3 ? "white" : "grey",
                  boxShadow: "2px 2px 4px  #000",
                  borderRadius: "60px",
                  px: 11,

                  py: "2px",
                }}
              >
                yearly
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "white",
            width: { sm: "40vw", xs: "80vw" },
            boxShadow: "1px 1px 5px  #000",
            borderRadius: "35px",
            direction: "column",
            px: 4,
            pb: "10px",
            my: 3,
            mx: 4,
          }}
        >
          <Grid
            container
            sx={{
              px: 2,
              width: { sm: "40vw", xs: "80vw" },
              boxShadow: "1px 1px 5px  #000",
              borderRadius: "0px 0px 15px 15px ",
              // display: "flex",
              direction: "row",
              py: 1.6,
              mt: "1px",
            }}
          >
            <Grid container justifyContent={"center"} xs={3}>
              Name
            </Grid>

            <Grid container justifyContent={"center"} xs={3}>
              Amount
            </Grid>
            <Grid container justifyContent={"center"} xs={3}>
              Time
            </Grid>
            <Grid container justifyContent={"center"} xs={3}>
              Status
            </Grid>
          </Grid>
          {data?.withdrawals?.map((item, index) => (
            <Grid
              key={index}
              container
              sx={{
                width: { sm: "40vw", xs: "80vw" },
                direction: "row",
                py: 1.6,
                // mt: "15px",
              }}
            >
              <Grid container justifyContent={"center"} xs={3}>
                {myData?.username}
              </Grid>
              <Grid container justifyContent={"center"} xs={3}>
                {item?.requestedAmount} GNF
              </Grid>
              <Grid container justifyContent={"center"} xs={3}>
                {moment(item?.requestedDateTime).format("YYYY, DD MMMM")}
              </Grid>
              <Grid container justifyContent={"center"} xs={3}>
                {item?.status}
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CreatorEarning;
