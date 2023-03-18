import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  createPanel,
  employedPortal,
  empPic,
  repoeredImg,
  serviceImg,
} from "../assets/images";
import Loading from "../components/Loading";
import { GetRequestsCount } from "../utils/api-calls";
// import Masonry from "@mui/lab/Masonry";
const CreatePanel = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [allRequest, setAllRequest] = React.useState({});
  const { all, denied, mostFollowed, mostSubscribed, unApproved, verified } =
    allRequest;
  // console.log(all)
  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await GetRequestsCount();
      console.log("res in servises callss=>", res?.data);
      setAllRequest(res?.data || {});
      setLoading(false);
    })();
  }, []);
  if (loading) return <Loading />;
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection="column"
    >
      <Box
        sx={{
          my: 3,
          //   width: "cal(100% - 700px)",
          boxShadow: "1px 1px 2px  #000",
          borderRadius: "50px",
          px: { sm: "100px", xs: "5px" },
          // background: { xs: 'red', sm: 'none ' },
          py: 3,
        }}
      >
        <img
          src={createPanel}
          width={{ sm: "275px", xs: "100px" }}
          height={{ sm: "252px", xs: "110px" }}
        />
      </Box>
      <Grid
        sx={{
          my: 3,
          //   width: "cal(100% - 700px)",
          bgcolor: "white",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "row" },
          width: "70vw",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {[
          { type: 1, item: "Unapproved", total: allRequest?.unApproved },
          {
            type: 2,
            item: "Most Subscribed",
            total: allRequest?.mostSubscribed,
          },
          { type: 3, item: "Verified", total: allRequest?.verified },
          { type: 4, item: "Denied", total: allRequest?.denied },
          { type: 5, item: "Most Followed", total: allRequest?.mostFollowed },
          { type: 6, item: "All Creators", total: allRequest?.all },
        ].map((item, index) => (
          <Box m={2} flexDirection="column">
            <Box
              sx={{
                //   width: "cal(100% - 700px)",
                boxShadow: "0px 0px 4px  #000",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: { md: "20vw", xs: "70vw" },
                bgcolor: "white",
              }}
            >
              <Typography ml={1}>{item.item}</Typography>
              <Button
                // onClick={() => navigate("/newest")}
                onClick={() =>
                  navigate("/newest", { state: { item: item.type } })
                }
                sx={{
                  bgcolor: "blue",
                  py: "13px",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                {item.total}
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default CreatePanel;
