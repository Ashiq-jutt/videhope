import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
} from "@mui/material";
import React from "react";
// import ControlledOpenSelect from "../components/selector";
import UserData from "../components/userData";
export default function AllUser() {
  const [age, setAge] = React.useState("");
  return (
    <Container maxWidth="xl">
      <Grid justifyContent={"space-between"} alignItems={"center"} container>
        <h2>All users (344)</h2>
        <div>
          <FormControl sx={{ minWidth: "200px" }} size={"small"}>
            <InputLabel id="demo-simple-select-label">users</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={(e) => setAge(e.target.value)}
            >
              <MenuItem value={20}>All</MenuItem>
              <MenuItem value={10}>Recently Joined</MenuItem>
              <MenuItem value={30}>Blocked</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Grid>
      <UserData />
    </Container>
  );
}
