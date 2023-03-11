import logo from "../assets/logo.svg";
import "../App.css";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Input,
  InputLabel,
  Link,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlerSubmit = () => {
    console.log(email, "bnm,bnhjklnjkl");
    console.log(password, "fghjkmnjkoiuygvbn");
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <header className="App-header">
      <Container maxWidth="xs" sx={{ backgroundColor: "#0E1A2E" }}>
        {/* <CssBaseline /> */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={logo} />

          <Typography
            sx={{
              fontfamily: "Roboto",
              fontstyle: "normal",
              fontweight: 700,
              fontsize: 33,
              color: "#FFFFFF",
              mt: 3,
            }}
          >
            Admin Panel
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <InputLabel
              sx={{ color: "white", fontstyle: "normal", fontweight: 400 }}
            >
              Email
            </InputLabel>
            <TextField
              // margin="normal"
              // fullWidth
              id="email"
              sx={{
                width: "100%",
                height: 56,
                fontfamily: "Roboto",
                fontstyle: "normal",
                fontweight: 400,
                fontsize: 16,
                borderRadius: 2,
                mb: 2,
                backgroundColor: "#FFFFFF",
              }}
              name="email"
            />
            <InputLabel
              sx={{ color: "white", fontstyle: "normal", fontweight: 400 }}
            >
              Password
            </InputLabel>
            <TextField
              // margin="normal"
              name="password"
              type="password"
              id="password"
              sx={{
                width: "100%",
                height: 56,
                fontfamily: "Roboto",
                fontstyle: "normal",
                fontweight: 400,
                fontsize: 16,

                borderRadius: 2,
                mb: 1,
                backgroundColor: "#FFFFFF",
              }}
            />

            <Grid container>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me?"
                fontfamily="Roboto"
              />
              <Grid item xs>
                <Button sx={{ color: "white", ml: 6 }} fontfamily="Roboto">
                  Forgot password?
                </Button>
              </Grid>
            </Grid>

            <br />
            <Button
              type="submit"
              variant="contained"
              sx={{ mb: 2, ml: 17, height: 44, width: 125 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        {/* <Pagination count={10} variant="outlined" /> */}
      </Container>
    </header>
  );
}

export default SignIn;
