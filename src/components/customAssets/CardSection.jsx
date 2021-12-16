import { Grid, Typography } from "@mui/material";
import React from "react";
import CoinCard from "./cards/CoinCard";
import ExchangeCard from "./cards/Exchange";

const CardSection = () => {
  return (
    <div>
      <Grid container spacing={3} sx={{ mt: 2 }} justifyContent="center">
        <Grid item>
          <ExchangeCard />
        </Grid>
        {/* <Typography>Bookmarked Currencies</Typography> */}
        <Grid item>
          <CoinCard />
        </Grid>
        <Grid item>
          <CoinCard />
        </Grid>
        <Grid item>
          <CoinCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default CardSection;
