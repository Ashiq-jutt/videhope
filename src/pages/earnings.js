import { Grid, Container, Button, Typography, Card } from "@mui/material";
import React from "react";
import * as SVG from "../assets";
import { Box } from "@mui/system";
import EarningCard from "../components/earning-card";
import { Graph } from "./graph";
function Earnings() {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "#F4F4F4",
          padding: "10px",
          width: 1150,
          marginTop: "10px",
          borderRadius: "12px",
        }}
      >
        <Graph />
      </Box>
    </Container>
  );
}
export default Earnings;
