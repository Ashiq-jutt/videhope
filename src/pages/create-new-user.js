import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../assets/images";
import { onLogin, onSignup } from "../services/api/api-actions";
// import Masonry from "@mui/lab/Masonry";
const CreateNewUser = () => {
  const navigate = useNavigate();
  const [age, setAge] = React.useState("");
  const [payload, setPayload] = React.useState({
    Name: '',
    Email: '',
    AccessTo: 'Accounting',
    Password: '',
    ConfirmPassword: '',
    Profile: null,
    Role: 'Staff',
  })
  const onSubmit = async () => {
    try {
      const obj = { ...payload }
      delete obj.ConfirmPassword;
      await onSignup(obj);
    } catch (error) {
      console.log('error=>', error);
    }
  }
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      justifyContent={"center"}
      alignItems={"center"}

    >
      <Box className="card"
        padding="20px"
        sx={{
          //   width: "cal(100% - 700px)",
          // boxShadow: "1px 1px 2px  #000",
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
          display: "flex",
          bgcolor: "white",
          flexDirection: "column",
          mb: 1,
        }}
      >
        <Box
          mb={1.5}
          sx={{
            // px: 14,
            //   width: "cal(100% - 700px)",
            bgcolor: "white",
            borderBottomLeftRadius: "40px",
            borderBottomRightRadius: "40px",
            pt: 2,
          }}
        >
          <img
            alt="pic here"
            src={createNewUser}
            width="280px"
          // height="232px"
          />
        </Box>

        <Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "32ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={(event) => {
                setPayload({ ...payload, Name: event?.target?.value })
              }}
              id="standard-basic"
              label="Name"
              variant="standard"
              autoComplete="off"
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "32ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={(event) => {
                setPayload({ ...payload, Email: event?.target?.value })
              }}
              id="standard-basic"
              label="Email"
              variant="standard"
              autoComplete="off"
            />
          </Box>
          {/* <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "32ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Role"
              variant="standard"
              autoComplete="off"
            />
          </Box> */}
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "32ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={(event) => {
                setPayload({ ...payload, Password: event?.target?.value })
              }}
              id="standard-basic"
              label="Password"
              variant="standard"
              autoComplete="off"
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "32ch" },
            }}
            noValidate
            autoComplete="off"
            mb={4}
          >
            <TextField
              onChange={(event) => {
                setPayload({ ...payload, ConfirmPassword: event?.target?.value })
              }}
              id="standard-basic"
              label="ConfirmPassword"
              variant="standard"
              autoComplete="off"
            />
          </Box>
          <Box mb={2}>
            <FormControl
              sx={{ minWidth: "273px", borderColor: "white" }}
              size={"small"}
            >
              <InputLabel id="demo-simple-select-label">
                Users Access
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={payload?.AccessTo}
                label="Age"
                onChange={(event) => {
                  setPayload({ ...payload, AccessTo: event?.target?.value })
                }}
              >
                <MenuItem value={'Accounting'}>Accounting</MenuItem>
                <MenuItem value={'Creators Panel'}>Creators Panel</MenuItem>
                <MenuItem value={'Customer Services'}>Customer Services</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box ml={3}>
            <Button
              onClick={onSubmit}
              sx={{
                bgcolor: "blue",
                color: "white",
                borderRadius: "50px",
                px: 12,
                py: 1,
                textTransform: 'capitalize',
              }}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateNewUser;
