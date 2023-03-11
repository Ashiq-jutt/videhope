import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
  Box,
  Typography,
  TextField,
  Stack,
  Alert,
} from "@mui/material";
import React from "react";
import { accountingImage } from "../assets/images";
import { useNavigate } from "react-router-dom";

const Accounting = () => {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection="column"
      mt={"-40px"}
    >
      <Box
        sx={{
          //   width: "cal(100% - 700px)",
          bgcolor: "white",

          display: "flex",
          bgcolor: "white",
          flexDirection: "column",
          mb: 1,
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <div
        
          className="card" style={{height: "250px",width: '250px'}}
        >
          <img src={accountingImage} style={{height:'250px'}} />
        </div>

        <Button
          onClick={() => navigate("/subscription")}
          sx={{
            bgcolor: "white",
            color: "grey",
            boxShadow: "2px 2px 4px  #000",
            borderRadius: "60px",
            px: 14,
            py: 1.4,
            mt: 3,
            textTransform:'capitalize'
          }}
        >
          Subscriptions
        </Button>

        <Button
          onClick={() => navigate("/filterEarning")}
          sx={{
            bgcolor: "white",
            color: "grey",
            boxShadow: "2px 2px 4px  #000",
            borderRadius: "60px",
            px: 12.2,
            py: 1.4,
            mt: 2,
            textTransform:'capitalize'
          }}
        >
          Widthraw Request
        </Button>
        <Button
          onClick={() => navigate("/creatorEarning")}
          sx={{
            bgcolor: "white",
            color: "grey",
            boxShadow: "2px 2px 4px  #000",
            borderRadius: "60px",
            px: 12.2,
            py: 1.4,
            mt: 2,
            textTransform:'capitalize'
          }}
        >
          Creator Earnings
        </Button>
        <Button
          onClick={() => navigate("/earnings")}
          sx={{
            bgcolor: "white",
            color: "grey",
            boxShadow: "2px 2px 4px  #000",
            borderRadius: "60px",
            px: 11.9,
            py: 1.4,
            mt: 2,
            textTransform:'capitalize'
          }}
        >
          Subscribed Amount
        </Button>
      </Box>
    </Box>
  );
};

export default Accounting;
