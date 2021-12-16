import React from "react";
import SelectItem from "./SelectItem";
import { Grid, Stack } from "@mui/material";

let btnName = [
  "Market Cap",
  "Trade Volume",
  "Trending",
  "Coins",
  "Tokens",
  "Tools",
  "USD",
  "Next 20",
  "View all",
];

const SelectSection = () => {
  return (
    <Stack direction="row" justifyContent="center" sx={{ mt: 2 }}>
      {btnName.map((name) => (
        <SelectItem name={name} />
      ))}
    </Stack>
  );
};

export default SelectSection;
