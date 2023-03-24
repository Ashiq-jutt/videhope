import React from "react";
import { useNavigate } from "react-router-dom";
import { accountingImage } from "../assets/images";
import { TextField, Button, Select, MenuItem, Box, InputAdornment } from '@material-ui/core';
// import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import { AddCountryPrice, GetCountries } from "../utils/api-calls";
const Subscription = () => {
  const navigate = useNavigate();

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  // console.log("🚀 ~ file: subscription.js:16 ~ Subscription ~ selectedCountry:", selectedCountry)
  const getCountries = async () => {
    const res = await GetCountries();
    // console.log("res in servises callss=>", res?.data);
    setCountries(res?.data || []);


  }
  useEffect(() => {
    getCountries();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Number(from) <= Number(to) && Number(from) > 0 && selectedCountry != '') {
      try {

        var paylaod = {
          CountryId: selectedCountry,
          // loweLimit: from,
          LowerLimit: parseFloat(from),
          // upperLimit: to
          UpperLimit: parseFloat(to)
        }
        const res = await AddCountryPrice(paylaod);
        console.log("🚀 ~ file: chat.js:51 ~ onMessageSend ~ res:", res?.data)

      } catch (error) {
        console.log('error........', error?.response?.data?.Message)
      }

      setTo("");
      setFrom("");
      setSelectedCountry("");
      // setFlag(!flag);
    } else {
      alert('Please fill all textfild !');
      return;
      // console.log('USD input is greater than comparison input!');
      // display error message or prevent form submission
    }
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection="column"
      mt={"-30px"}
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
        <Box
          container
          sx={{
            px: "5vw",
            //   width: "cal(100% - 700px)",
            bgcolor: "white",
            boxShadow: "2px 2px 4px  #000",
            borderRadius: "0px 0px 100px 100px",
          }}
        >
          <Box>
            <Button
              //   onClick={() => navigate("/subscription")}
              sx={{
                color: "grey",
                boxShadow: "2px 2px 4px  #000",
                borderRadius: "0px 0px 16px 16px",
                px: 4,
                height: "40px",
                ml: 8,
              }}
            >
              Subscriptions
            </Button>
            <Box container justifyContent={"center"} px={3} py={5}>

              <Box sx={{ display: 'flex', flexDirection: 'column', }} >
                <TextField
                  label="From"
                  value={from}
                  onChange={(event) => setFrom(event.target.value)}
                  type="number"
                  InputProps={{
                    inputProps: { min: 0 },
                    endAdornment: <InputAdornment position="end">USD</InputAdornment>,
                  }}
                  required
                />
                <TextField
                  label="To"
                  value={to}
                  onChange={(event) => setTo(event.target.value)}
                  type="number"
                  InputProps={{
                    inputProps: { min: 0 },
                    endAdornment: <InputAdornment position="end">USD</InputAdornment>,
                  }}
                  required
                />
                <Select
                  value={selectedCountry}
                  onChange={(event) => setSelectedCountry(event.target.value)}
                  displayEmpty
                  required
                  type="string"
                >
                  <MenuItem value="" disabled>
                    Select country
                  </MenuItem>
                  {countries.map((country) => (
                    <MenuItem key={country.id} value={country.id}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
                <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Subscription;
