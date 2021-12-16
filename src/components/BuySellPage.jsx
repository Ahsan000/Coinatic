import React from "react";
import MainFooter from "./customAssets/footer/MainFooter";
import TopBarJr from "./customAssets/TopBarJr";
import TopBarSr from "./customAssets/TopBarSr";
import { Grid, Stack, Typography, Button, Divider } from "@mui/material";
import Buttons from "./customAssets/buttons/Buttons";
import BuySellTable1 from "./customAssets/table/BuySellTable1";
import CoinCard from "./customAssets/cards/CoinCard";
import BuySellCard from "./customAssets/cards/BuySellCard";

const BuySellPage = () => {
  return (
    <div>
      <TopBarJr />
      <TopBarSr />
      <Buttons />
      <Stack direction="row" spacing={2} justifyContent="center">
        <Stack item>
          <BuySellCard />
        </Stack>
        <Stack item>
          <CoinCard />
        </Stack>
        <Stack item>
          <CoinCard />
        </Stack>
      </Stack>
      <BuySellTable1 />
      <MainFooter />
    </div>
  );
};

export default BuySellPage;
