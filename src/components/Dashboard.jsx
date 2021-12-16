import React from "react";
import MainFooter from "./customAssets/footer/MainFooter";
import SelectSection from "./customAssets/selectSection/SelectSection";
import TopBarJr from "./customAssets/TopBarJr";
import TopBarSr from "./customAssets/TopBarSr";
import { Grid, Stack, Typography, Button, Divider } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import TradeVolumeTable from "./customAssets/table/TradeVolumeTable";
import DashboardTable from "./customAssets/table/DashboardTable";
import CusLineChart from "./customAssets/chart/lineCharts/CusLineChart";
import SingleCurrencyChart1 from "./customAssets/chart/singleCurrenyChart1";

import CoinCard from "./customAssets/cards/CoinCard";
import CustomTabs from "./customAssets/tabs/Tabs";
import Buttons from "./customAssets/buttons/Buttons";
import Exchange from "./customAssets/cards/Exchange";
import SwiperComponent from "./customAssets/chart/barChart/SwiperComponent";
const Dashboard = () => {
  return (
    <div>
      <TopBarJr />
      <TopBarSr />
      <Buttons />
      <Grid container alignItems="center" justifyContent="center" spacing={10}>
        <Grid item>
          <Exchange />
        </Grid>
        <Grid item justifyContent="center" alignItems="center">
          <SwiperComponent />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={5}
        sx={{ mt: 8 }}
      >
        <Stack direction="row" spacing={2}>
          <CoinCard />
          <CoinCard />
          <CoinCard />
          <CoinCard />
        </Stack>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={5}
        sx={{ mt: 4 }}
      >
        <CusLineChart />
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={5}
        sx={{ mt: 10 }}
      >
        <DashboardTable />
      </Grid>

      <MainFooter />
    </div>
  );
};

export default Dashboard;
