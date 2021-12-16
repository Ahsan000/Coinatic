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

const TradeVolume = () => {
  return (
    <div>
      <TopBarJr />
      <TopBarSr />
      <SelectSection />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={5}
        sx={{ mt: 2 }}
      >
        <Grid item>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <CircleIcon sx={{ fontSize: "50px" }} />
              <Typography>Bitcoin (BTC)</Typography>
              <Stack direction="row" spacing={1}>
                <Button variant="contained" size="small">
                  RANK: {`1`}
                </Button>
                <Button variant="contained" size="small">
                  COIN
                </Button>
                <Button variant="contained" size="small">
                  MINEABLE
                </Button>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography>{`1.37%`}</Typography>
              <ArrowDownwardIcon />
              <Divider />
              <Divider />
              <Typography>{`1.37%`}</Typography>
              <ArrowUpwardIcon />
              <Divider />
              <Stack>
                <Typography>{`35.07`}%</Typography>
              </Stack>
            </Stack>
          </Stack>
          <TradeVolumeTable />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={5}
        sx={{ mt: 2 }}
      >
        <Grid item>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <CircleIcon sx={{ fontSize: "50px" }} />
              <Typography>Tether (USDT)</Typography>
              <Stack direction="row" spacing={1}>
                <Button variant="contained" size="small">
                  RANK: {`1`}
                </Button>
                <Button variant="contained" size="small">
                  COIN
                </Button>
                <Button variant="contained" size="small">
                  MINEABLE
                </Button>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography>{`1.37%`}</Typography>
              <ArrowDownwardIcon />
              <Divider />
              <Divider />
              <Typography>{`1.37%`}</Typography>
              <ArrowUpwardIcon />
              <Divider />
              <Stack>
                <Typography>{`35.07`}%</Typography>
              </Stack>
            </Stack>
          </Stack>
          <TradeVolumeTable />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={5}
        sx={{ mt: 2 }}
      >
        <Grid item>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <CircleIcon sx={{ fontSize: "50px" }} />
              <Typography>Bitcoin (BTC)</Typography>
              <Stack direction="row" spacing={1}>
                <Button variant="contained" size="small">
                  RANK: {`1`}
                </Button>
                <Button variant="contained" size="small">
                  COIN
                </Button>
                <Button variant="contained" size="small">
                  MINEABLE
                </Button>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography>{`1.37%`}</Typography>
              <ArrowDownwardIcon />
              <Divider />
              <Divider />
              <Typography>{`1.37%`}</Typography>
              <ArrowUpwardIcon />
              <Divider />
              <Stack>
                <Typography>{`35.07`}%</Typography>
              </Stack>
            </Stack>
          </Stack>
          <TradeVolumeTable />
        </Grid>
      </Grid>
      <MainFooter />
    </div>
  );
};

export default TradeVolume;
