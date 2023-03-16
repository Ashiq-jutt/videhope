import {
  Button,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  customerServices,
} from "../assets/images";
import { GetCustomeServices } from "../utils/api-calls";
// import Masonry from "@mui/lab/Masonry";
const CustomerService = () => {
  const navigate = useNavigate();
  const [allStaff, setAllStaff] = React.useState({});
  const { messages, reportedContents, reportedUsers } = allStaff;

  React.useEffect(() => {
    (async () => {
      const res = await GetCustomeServices();
      console.log("res in servises callss=>", res?.data);
      console.log("res in servises callss=>", res?.data?.messages);
      setAllStaff(res?.data || {});
    })();
  }, []);
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
          // width: "cal(100% - 700px)",
          bgcolor: "white",
          boxShadow: "1px 1px 2px  #000",
          borderRadius: "30px",
          display: "flex",
          p: 4,
          flexDirection: "column",

        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box mb={7}>
          <img src={customerServices} height="132px" mb={5} sx={{ width: { xs: '200px', sm: '420' } }} />
        </Box>

        {[
          { item: "Message", total: messages, route: "/chat" },
          { item: "Content Reported", total: reportedContents, route: "/contentReport" },
          { item: "Account Reported", total: reportedUsers, route: "/accountReported" },
        ].map((item, index) => (
          <Box my={2} key={index}>
            <Box
              sx={{
                //   width: "cal(100% - 700px)",
                boxShadow: "1px 1px 4px  #000",
                borderRadius: "40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "240px",
                bgcolor: "white",
                //   py: 0.5,
              }}
            >
              <Typography fontSize={14} ml={2} color="grey">
                {item.item}
              </Typography>
              <Button
                onClick={() => navigate(item.route)}
                sx={{
                  bgcolor: "grey",
                  color: "white",
                  borderRadius: "40px",
                  height: "60%",
                }}
              >
                {item.total}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CustomerService;
