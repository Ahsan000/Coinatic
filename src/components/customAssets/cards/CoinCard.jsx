import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Grid, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { CPaperCard } from "../styledComponents/StyledComponents";
import TinyLineChart from "../chart/lineCharts/TinyLineChart";
import CoinIcon from "../coinIcon/CoinIcon";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CoinCard = () => {
  return (
    <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#262525" }}>
      <CardContent>
        <Grid container direction="column" alignItems="flex-start">
          <Grid item container justifyContent="space-between">
            <Grid item>
              <CoinIcon />
              {/* <CircleIcon sx={{ fontSize: "50px", color: "#e2ebef" }} /> */}
            </Grid>
            <Grid item>
              <TinyLineChart />
            </Grid>
          </Grid>
          <Divider sx={{ m: 1 }} />

          <Grid item>
            <Typography variant="p">Ethereum</Typography>
          </Grid>
          <Grid item container alignItems="center" spacing={1}>
            <Grid item>
              <Typography variant="subtitle2">Change:</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{`2.00%`}</Typography>
            </Grid>
          </Grid>
          <Divider sx={{ m: 1 }} />

          <Grid item>
            <Typography variant="subtitle2" component="div">
              Market Cap
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="p">{`$51,100,109,117`}</Typography>
          </Grid>
          <Divider sx={{ m: 1 }} />
          <Grid item>
            <Typography variant="subtitle2" component="div">
              Price
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="span">{`$521.09`}</Typography>
          </Grid>
          <Divider sx={{ m: 1 }} />
          <Grid item>
            <Typography variant="subtitle2" component="div">
              Volume 24h
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="p">{`$12,543,987,011`}</Typography>
          </Grid>
          <Divider sx={{ m: 1 }} />
          <Grid item>
            <Typography variant="subtitle2" component="div">
              Circulating Supply
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="p">{`98,280,999 ETH`}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default CoinCard;
