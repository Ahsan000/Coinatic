import React from "react";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import CloudIcon from "@mui/icons-material/Cloud";
import LanguageIcon from "@mui/icons-material/Language";
import { Stack } from "@mui/material";

import {
  Paper,
  Typography,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
} from "@mui/material";

const LowerFooter = () => {
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      spacing={10}
      sx={{ p: 3 }}
    >
      <Grid item container spacing={10} style={{ width: "fit-content" }}>
        <Grid item container spacing={8}>
          <Grid item>
            <Typography variant="subtitle2">
              &copy;2018azyrusthemes.com
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">Terms</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">Privacy</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">Send Feedback</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ padding: 0, color: "#e2ebef" }}>
        <Stack spacing={2} direction="row">
          <FacebookIcon />
          <TwitterIcon />
          <GoogleIcon />
          <LanguageIcon />
          <CloudIcon />
          <SignalCellularAltIcon />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LowerFooter;
