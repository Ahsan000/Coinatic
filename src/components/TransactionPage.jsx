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
import SingleCurrencyChart from "./customAssets/chart/singleCurrenyChart";
import CoinCard from "./customAssets/cards/CoinCard";
import CustomTabs from "./customAssets/tabs/Tabs";
import Buttons from "./customAssets/buttons/Buttons";
import Exchange from "./customAssets/cards/Exchange";
import TransactionTable from "./customAssets/table/TransactionTable";
const TransactionPage = () => {
  return (
    <div>
      <TopBarJr />
      <TopBarSr />
      <Buttons />
      <TransactionTable />
      <MainFooter />
    </div>
  );
};

export default TransactionPage;
