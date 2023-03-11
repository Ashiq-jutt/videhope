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
import { reportedImg } from "../assets/images";
import "../css/content-report.css";
// import Masonry from "@mui/lab/Masonry";
const ContentReport = () => {
  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(true);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked1);
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <div className="col-md-12">
        <button
          type="button"
          class="btn btn-outline-primary"
          style={{
            marginTop: "-30px",
            width: "200px",
            height: "60px",
            borderRadius: "10px",
          }}
        >
          Content Report
        </button>
        <div
          className="card d-flex"
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            
            gap: 15,
            boxShadow: "1px 1px 5px  #000",

            margin: "50px 50px 50px 50px",
            padding: "15px",
          }}
        >
          {[1, 2, 6, 3, 4, 6, 7, 9].map((item, index) => (
            <div
              className="card"
              style={{ boxShadow: "1px 1px 5px  #000", marginTop: "10px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Typography
                  fontSize={18}
                  mt={-1}
                  mb={1}
                  color="grey"
                  textAlign="center"
                >
                  @jacob
                </Typography>
                <img
                  src={reportedImg}
                  style={{ height: 170, width: 170, borderRadius: "30px" }}
                />
                <Button
                  sx={{
                    variant: "outlined",
                    color: "white",
                    width: "180px",
                    height: "30px",
                    borderRadius: "20px",
                    bgcolor: "blue",
                    mt: 1,
                    mb: 1,
                  }}
                >
                  Block Account
                </Button>
                <Button
                  sx={{
                    variant: "outlined",
                    color: "black",
                    boxShadow: "1px 1px 2px  #000",
                    width: "180px",
                    height: "30px",
                    borderRadius: "20px",
                  }}
                >
                  Content Reported
                </Button>
              </Box>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContentReport;
