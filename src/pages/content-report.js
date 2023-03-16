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
import UserCard from "../components/video-crd";
import "../css/content-report.css";
import { GetReportedContent } from "../utils/api-calls";
// import Masonry from "@mui/lab/Masonry";
const ContentReport = () => {
  const [allStaff, setAllStaff] = React.useState([]);
  const [uploadedByUser, reportedByUser, content] = allStaff;
  console.log("🚀 ~ file: content-report.js:19 ~ ContentReport ~ allStaff:", allStaff)
  console.log("🚀 ~ file: content-report.js:19 ~ ContentReport ~ content:", content)
  console.log("🚀 ~ file: content-report.js:19 ~ ContentReport ~ reportedByUser:", reportedByUser)
  console.log("🚀 ~ file: content-report.js:19 ~ ContentReport ~ uploadedByUser:", uploadedByUser)
  var videoUrl = ''
  React.useEffect(() => {
    (async () => {
      const res = await GetReportedContent();
      console.log("res in servises callss=>", res?.data);
      setAllStaff(res?.data || []);
    })();

  }, []);
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
              {/* <Box
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
              </Box> */}

              <UserCard name='Asiq' videoUrl={videoUrl} />
            </div>

          ))}
        </div>
      </div>
    </>
  );
};

export default ContentReport;
