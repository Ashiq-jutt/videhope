import { Box } from "@mui/material";
import React from "react";
import { Rings, RotatingLines } from "react-loader-spinner";

export function Loading() {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "50vh",
        // backgroundColor: "Black",
      }}
    >
      {/* <Rings
        height="170"
        width="170"
        color="white"
        // radius="100"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      /> */}
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Box>
  );
}

export default Loading;
