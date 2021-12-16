import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { Label } from "@mui/icons-material";
import { Grid, Stack } from "@mui/material";
import ExchangeTabs from "../tabs/ExchangeTabs";
import { CButtonPrimary } from "../styledComponents/StyledComponents";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const BuySellCard = () => {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: "#262525" }}>
      <CardActions>
        <Grid container fullWidth justifyContent="center" flexGrow={12}>
          <ExchangeTabs />
        </Grid>
      </CardActions>

      <CardActions>
        <Grid container spacing={1} justifyContent="space-around">
          <Grid item flexGrow={6}>
            <CButtonPrimary size="small" fullWidth variant="contained">
              Limit
            </CButtonPrimary>
          </Grid>
          <Grid item flexGrow={6}>
            <CButtonPrimary size="small" fullWidth variant="contained">
              Market
            </CButtonPrimary>
          </Grid>
        </Grid>
      </CardActions>
      <CardContent>
        <Stack component="form" spacing={1} noValidate autoComplete="off">
          <Stack direction="row" spacing={1}>
            <TextField
              id="filled-textarea"
              label="Amount"
              placeholder="0.00000 BTC"
              multiline
              variant="filled"
              fullWidth
              inputProps={{ style: { color: "#e2ebef" } }}
              InputLabelProps={{
                style: { color: "#6c6d6e" },
              }}
            />
            <TextField
              id="filled-textarea"
              label="Currency"
              placeholder="0.00000 BTC"
              multiline
              variant="filled"
              fullWidth
              inputProps={{ style: { color: "#e2ebef" } }}
              InputLabelProps={{
                style: { color: "#6c6d6e" },
              }}
            />
          </Stack>
          <br />
          <Stack direction="row" spacing={1}>
            <TextField
              id="filled-textarea"
              label="Price"
              placeholder="0.00000 BTC"
              multiline
              variant="filled"
              fullWidth
              inputProps={{ style: { color: "#e2ebef" } }}
              InputLabelProps={{
                style: { color: "#6c6d6e" },
              }}
            />
            <TextField
              id="filled-textarea"
              label="Price"
              placeholder="0.00000 BTC"
              multiline
              variant="filled"
              fullWidth
              inputProps={{ style: { color: "#e2ebef" } }}
              InputLabelProps={{
                style: { color: "#6c6d6e" },
              }}
            />
          </Stack>
        </Stack>
        <br />
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="p">Total</Typography>
          </Grid>
          <Grid item>
            <Typography variant="p"> {`$254,127`}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <CButtonPrimary size="small" fullWidth variant="contained">
          Trade
        </CButtonPrimary>
      </CardActions>
    </Card>
  );
};
export default BuySellCard;
