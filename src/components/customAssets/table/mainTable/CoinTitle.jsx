import React from "react";
import CoinIcon from "../../coinIcon/CoinIcon";
import { Stack, Typography } from "@mui/material";
const CoinTitle = ({ text }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <CoinIcon />
      <Typography variant="p">{text}</Typography>
    </Stack>
  );
};

export default CoinTitle;
