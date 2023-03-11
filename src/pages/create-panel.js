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
// import Masonry from "@mui/lab/Masonry";
const CreatePanel = () => {
  const navigate = useNavigate();
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
          px: { sm: "100px", xs: '5px' },
          // background: { xs: 'red', sm: 'none ' },
          py: 3,
        }}
      >
        <img src={createPanel} width={{ sm: "275px", xs: '100px' }}
          height={{ sm: "252px", xs: '110px' }} />
      </Box>
      <Grid
        sx={{
          my: 3,
          //   width: "cal(100% - 700px)",
          bgcolor: "white",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { xs: 'column', sm: 'row' },
          width: "70vw",
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {[
          { item: "Unapproved", total: 35 },
          { item: "Most Subscribed", total: 20 },
          { item: "Verified", total: 25 },
          { item: "Denied", total: 12 },
          { item: "Most Followed", total: 80 },
          { item: "All Creators", total: 100 },
        ].map((item, index) => (
          <Box m={2} flexDirection='column'>
            <Box
              sx={{
                //   width: "cal(100% - 700px)",
                boxShadow: "0px 0px 4px  #000",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: { md: "20vw", xs: '70vw' },
                bgcolor: "white",
              }}
            >
              <Typography ml={1}>{item.item}</Typography>
              <Button
                onClick={() => navigate("/newest")}
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
