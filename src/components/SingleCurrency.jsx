import React from "react";
import MainFooter from "./customAssets/footer/MainFooter";
import SelectSection from "./customAssets/selectSection/SelectSection";
import BuySellTable from "./customAssets/table/BuySellTable";
import TopBarJr from "./customAssets/TopBarJr";
import TopBarSr from "./customAssets/TopBarSr";
import { Grid, Stack, Typography, Paper } from "@mui/material";
import SingleCurrencyChart from "./customAssets/chart/singleCurrenyChart";
import ExchangeCard from "./customAssets/cards/Exchange";
import CoinCard from "./customAssets/cards/CoinCard";
import AboutCard from "./customAssets/cards/AboutCard";
import CusLineChart from "./customAssets/chart/lineCharts/CusLineChart";

const SingleCurrency = () => {
  return (
    <Paper sx={{ backgroundColor: "#1c1b1b" }}>
      <TopBarJr />
      <TopBarSr />
      <SelectSection />
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item>
          <Typography variant="p">Stats</Typography>
          <CoinCard />
        </Grid>
        <Grid item>
          <Typography variant="p">About</Typography>
          <AboutCard />
        </Grid>
        <Grid item>
          <ExchangeCard />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ mt: 5 }}>
        <CusLineChart />
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={5}
        sx={{ mt: 1 }}
      >
        <Grid item>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="p">Buy Orders</Typography>
            <Typography variant="p">View All</Typography>
          </Stack>
          <BuySellTable />
        </Grid>
        <Grid item>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="p">Sell Orders</Typography>
            <Typography variant="p">View All</Typography>
          </Stack>
          <BuySellTable />
        </Grid>
      </Grid>
      <MainFooter />
    </Paper>
  );
};

export default SingleCurrency;
