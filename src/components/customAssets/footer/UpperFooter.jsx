import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/ArrowDropDown";

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
const UpperFooter = () => {
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      spacing={10}
      sx={{ p: 3 }}
    >
      <Grid item container spacing={10} style={{ width: "fit-content" }}>
        <Grid item>
          <Typography variant="p">Logo CM</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">
            Last Updated:{`Mar 19,2018 4:02 PM UTC`}
          </Typography>
        </Grid>
      </Grid>
      <Grid item sx={{ padding: 0 }}>
        <Grid item>
          <Grid item container alignItems="center" sx={{ color: "#6c6d6e" }}>
            <Typography
              id="demo-simple-select-label"
              style={{ fontSize: "10px" }}
            >
              Language
            </Typography>
            <KeyboardArrowDownIcon />
          </Grid>
        </Grid>
        {/* <FormControl>
          <InputLabel
            id="demo-simple-select-label"
            style={{ fontSize: "10px" }}
          >
            Language
          </InputLabel>
          <Select
            sx={{ width: 90, m: 0 }}
            style={{ fontSize: "10px" }}
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

export default UpperFooter;
