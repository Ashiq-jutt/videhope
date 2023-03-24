import React, { useEffect, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import Loading from "../components/Loading";
import { DeleteContent, GetReportedContent } from "../utils/api-calls";
import { IMAGE_BASE_URL } from "../utils/constant";

const ContentReport = () => {
  const [loading, setLoading] = useState(false);
  const [allStaff, setAllStaff] = useState([]);
  console.log("🚀 ~ file: content-report.js:10 ~ ContentReport ~ allStaff:", allStaff)

  const fetchReportedContent = async () => {
    setLoading(true);
    const res = await GetReportedContent();
    setAllStaff(res?.data || []);
    setLoading(false);
  };
  const deleteReportedContent = async (id) => {
    console.log("🚀 ~ file: content-report.js:18 ~ deleteReportedContent ~ id:", id)
    const res = await DeleteContent(id);
    console.log(res?.data, 'delete.............');
    fetchReportedContent();

  };
  useEffect(() => {

    fetchReportedContent();
  }, []);

  if (loading) return <Loading />;
  return (
    <div className="col-md-12">
      <Button
        variant="outlined"
        color="primary"
        style={{
          marginTop: "-30px",
          width: "200px",
          height: "60px",
          borderRadius: "10px",
        }}
      >
        Content Report
      </Button>
      <div
        className="card d-flex"
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 15,
          boxShadow: "1px 1px 5px #000",
          margin: "50px",
          padding: "15px",
        }}
      >
        {allStaff.map((item, index) => (
          <div key={index}>

            {!item?.content ? <Typography sx={{ textAlign: 'center' }}>No Record found</Typography>
              : <div
                className="card"
                style={{ boxShadow: "1px 1px 5px #000", marginTop: "10px" }}
              >
                {console.log('item...', item, 'item...')}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    fontSize={18}
                    my="6px"
                    color="grey"
                    textAlign="center"
                  >
                    {item?.uploadedByUser?.userName}
                  </Typography>

                  {/* <video
                src={'https://www.youtube.com/watch?v=foGs2yqMxh4' || item?.content?.path?.uri}
                style={{ height: 170, width: 170, borderRadius: "30px" }}
                controls={true}
              /> */}
                  {/* `${IMAGE_BASE_URL}${item?.userImage}` */}
                  <video src={`${IMAGE_BASE_URL}${item?.content?.path}`} controls={true}
                    style={{ height: 170, width: 170, borderRadius: "30px", backgroundColor: 'grey' }} />

                  {/* <CardMedia component="video" src={'https://www.youtube.com/watch?v=foGs2yqMxh4' || item?.content?.path} controls={true}
                style={{ height: 170, width: 170, borderRadius: "30px" }} /> */}
                  <Button
                    sx={{
                      variant: "outlined",
                      color: "white",
                      width: "160px",
                      height: "24px",
                      borderRadius: "20px",
                      bgcolor: "blue",
                      my: 1,
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "#0288d3",
                        // opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                  >
                    Block Account
                  </Button>
                  <Button
                    onClick={() => deleteReportedContent(item?.content?.id)}
                    sx={{
                      mb: 1,
                      variant: "outlined",
                      color: "black",
                      boxShadow: "1px 1px 2px #000",
                      width: "160px",
                      height: "24px",
                      borderRadius: "20px",
                      textTransform: "capitalize",
                      // "&:hover": {
                      //   backgroundColor: "#0288d1",
                      //   // opacity: [0.9, 0.8, 0.7],
                      // },
                    }}
                  >
                    Delete Content
                  </Button>
                </Box>
              </div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentReport;
