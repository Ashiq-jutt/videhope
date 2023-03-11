import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as SVG from "../assets";
const EarningCard = ({ ...props }) => {
  return (
    <Card {...props} sx={{ width: "258px", mb: 3 }}>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: "#F3F8FF",
          paddingBottom: "22px",
          paddingTop: "35px",
        }}
      >
        <Box>
          <img src={SVG.dollar}></img>
        </Box>
        <Typography>THIS MONTH</Typography>
        <Typography textAlign={"center"}>$454</Typography>
        <Grid
          justifyContent={"space-around"}
          container
          sx={{
            backgroundColor: "#739D5F",
            borderRadius: "7px",
            paddingX: "11px",
            paddingY: "6px",
            alignSelf: "center",
            width: "90px",
          }}
        >
          <img src={SVG.arrowUp}></img>
          <Typography>3.48%</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};
export default EarningCard;
