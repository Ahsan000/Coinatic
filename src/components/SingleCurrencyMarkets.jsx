import React from "react";
import MainFooter from "./customAssets/footer/MainFooter";
import SelectSection from "./customAssets/selectSection/SelectSection";
import BuySellTable from "./customAssets/table/BuySellTable";
import TopBarJr from "./customAssets/TopBarJr";
import TopBarSr from "./customAssets/TopBarSr";
import { Grid, Stack, Typography } from "@mui/material";
import SingleCurrencyChart from "./customAssets/chart/singleCurrenyChart";
import ExchangeCard from "./customAssets/cards/Exchange";
import CoinCard from "./customAssets/cards/CoinCard";
import AboutCard from "./customAssets/cards/AboutCard";
import MarketsTable from "./customAssets/table/MarketsTable";
import CustomTabs from "./customAssets/tabs/Tabs";

const SingleCurrencyMarkets = () => {
  return (
    <div>
      <TopBarJr />
      <TopBarSr />
      <SelectSection />
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item>
          <Typography>Stats</Typography>
          <CoinCard />
        </Grid>
        <Grid item>
          <Typography>About</Typography>
          <AboutCard />
        </Grid>
        <Grid item>
          <ExchangeCard />
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <CustomTabs />
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={5}
        sx={{ mt: 2 }}
      >
        <MarketsTable />
      </Grid>
      <MainFooter />
    </div>
  );
};

export default SingleCurrencyMarkets;
