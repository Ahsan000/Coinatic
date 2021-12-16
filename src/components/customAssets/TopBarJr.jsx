import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Paper,
  Typography,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
} from "@mui/material";

const TopBarJr = () => {
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid
      style={{ backgroundColor: "#1c1b1b " }}
      sx={{ p: 1 }}
      container
      justifyContent="center"
      alignItems="center"
      spacing={8}
    >
      <Grid item>
        <Typography variant="subtitle2" className="typoText" color="lightgray">
          Cryptocurrencies:
          <Typography variant="span">{` 1565 `}</Typography>
          /Markets:
          <Typography variant="span">{` 9465 `}</Typography>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2" className="typoText" color="lightgray">
          Market Cap: $
          <Typography variant="span">{` 326,667,012,767`}</Typography>
          /24h Vol:
          <Typography variant="span">{` $19,207,136,655`}</Typography>
          /BTC Dominance:<Typography variant="span">{` 44.4%`}</Typography>
        </Typography>
      </Grid>
      <Grid item sx={{ width: "11%", padding: 0 }}>
        <Grid item container alignItems="center">
          <Typography
            id="demo-simple-select-label"
            style={{ fontSize: "10px", color: "lightgray" }}
          >
            Language
          </Typography>
          <KeyboardArrowDownIcon style={{ color: "lightgray" }} />
        </Grid>
        {/* <FormControl>
          <InputLabel
            id="demo-simple-select-label"
            style={{ fontSize: "10px", color: "lightgray" }}
          >
            Language
          </InputLabel>
          <Select
            sx={{ width: 90, m: 0 }}
            style={{ fontSize: "10px", color: "lightgray" }}
            labelId="demo-simple-select-label"
            value={age}
            label="Language"
            onChange={handleChange}
            style={{ fontSize: "10px" }}
          >
            <MenuItem value="English" style={{ fontSize: "10px" }}>
              English
            </MenuItem>
            <MenuItem value="Urdu" style={{ fontSize: "10px" }}>
              Urdu
            </MenuItem>
            <MenuItem value="Spanish" style={{ fontSize: "10px" }}>
              Spanish
            </MenuItem>
          </Select>
        </FormControl> */}
      </Grid>
    </Grid>
  );
};

export default TopBarJr;
