import {
  Container,
  Grid,
  InputLabel,
  TextField,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import * as SVG from "../assets";
function ChangeName({ handleCheck }) {
  return (
    <Stack alignItems="center">
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={12}
        mt={"80px"}
        // ml={"20px"}
      >
        <img src={SVG.left} onClick={() => handleCheck(0)} />
        <h2>Change Name</h2>
        <h1></h1>
      </Stack>

      <Box
        sx={{
          backgroundColor: "#F4F4F4",
          padding: 8,
          marginTop: "12px",
          borderRadius: "12px",
          // width: "300px",
        }}
      >
        <InputLabel sx={{ mb: 1, fontstyle: "normal", fontweight: 400 }}>
          Name
        </InputLabel>
        <TextField
          id="name"
          placeholder="enter name"
          sx={{
            width: "100%",
            height: 56,
            fontfamily: "Roboto",
            fontstyle: "normal",
            fontweight: 400,
            fontsize: 16,
            borderRadius: 2,
            mb: 2,
            width: "260px",
            backgroundColor: "#FFFFFF",
          }}
          name="email"
        />
        <br />
        <Button sx={{ ml: 7, backgroundColor: "#014BC3", color: "white" }}>
          Save changes
        </Button>
      </Box>
    </Stack>
  );
}
export default ChangeName;
