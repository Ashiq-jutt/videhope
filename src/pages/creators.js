import { Button, Grid, Box } from "@mui/material";
import React from "react";
import { creatorImg } from "../assets/images";
// import Masonry from "@mui/lab/Masonry";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { GetRequestType } from "../utils/api-calls";
import { IMAGE_BASE_URL } from "../utils/constant";

const Creators = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const myData = 3;
  console.log(myData);
  const [loading, setLoading] = React.useState(false);
  const [allRequest, setAllRequest] = React.useState([]);
  // console.log(all)
  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await GetRequestType(myData);
      console.log("res in type callss=>", res?.data);
      setAllRequest(res?.data || []);
      setLoading(false);
    })();
  }, []);
  if (loading) return <Loading />;
  return (
    <Box
      sx={{
        bgcolor: "white",
        boxShadow: "1px 1px 5px  #000",
        borderRadius: "30px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: { xs: "center", sm: "inherit" },
        alignItems: "center",
        mx: { sm: 10, xs: "1px" },
        p: { sm: "16px", xs: "4px" },
        // m: 12,
      }}
    >
      {/* <Typography textAlign={"center"}>Newest</Typography> */}
      {allRequest?.map((item, index) => (
        <Grid mx={{ sm: "20px", xs: "4px" }} my="8px" key={index}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box mr={"10px"}>
              <img
                src={`${IMAGE_BASE_URL}${item?.userImage}`}
                style={{
                  height: "140px",
                  width: "140px",
                  borderRadius: "33px",
                }}
              />
            </Box>
            <Box flexDirection={"column"} display="flex">
              {item?.username}
              <Button
                // onClick={() => navigate("/newestDetail")}
                onClick={() =>
                  navigate("/creatorEarning", {
                    state: { item: item },
                  })
                }
                sx={{
                  variant: "outlined",
                  color: "white",
                  width: "70px",
                  height: "25px",
                  borderRadius: "20px",
                  bgcolor: "blue",
                  mt: 1,
                  mb: 1,
                  textTransform: "capitalize",
                }}
              >
                Detail
              </Button>
            </Box>
          </Box>
        </Grid>
      ))}
    </Box>
  );
};

export default Creators;
