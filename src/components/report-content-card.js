import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as SVG from "../assets";
import { repoeredImg, serviceImg } from "../assets/images";
const ReportContentCard = () => {
  return (
    <Grid
      container
      direction="column"
      // justifyContent="space-between"
      sx={{
        width: "180px",
        // backgroundColor: "white",
        mr: 2,
        mb: 7,
      }}
    >
      <img src={repoeredImg}></img>
      <Grid
        container
        sx={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#F4F4F4",
          height: "40px",
          mt: 1,
        }}
      >
        <img
          style={{ height: 25, width: 25, marginLeft: 5 }}
          src={SVG.profile}
        />

        <Typography ml={1}>@jacob_w</Typography>
      </Grid>
    </Grid>
  );
};
export default ReportContentCard;
