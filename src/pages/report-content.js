import { Container, Grid } from "@mui/material";
import React from "react";
// import { View, Text } from "react-native";
import { Box } from "@mui/system";
import ReportContentCard from "../components/report-content-card";
function ReportContent() {
  return (
    <Container>
      <h2>ReportContent</h2>
      <Grid container spacing={2}>
        {[0, 1, 2, 3, 4, 5, 6].map((item, index) => (
          <ReportContentCard />
        ))}
      </Grid>
      {/* <Box sx={{ backgroundColor: '#F4F4F4', padding: 15, marginTop: '54px', borderRadius: '12px' }}>
      </Box> */}
    </Container>
  );
}
export default ReportContent;
