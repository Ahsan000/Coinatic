import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import TimelineIcon from "@mui/icons-material/Timeline";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Grid, Divider, Stack } from "@mui/material";
import WebhookIcon from "@mui/icons-material/Webhook";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import CodeIcon from "@mui/icons-material/Code";
import { CButtonPrimary } from "../styledComponents/StyledComponents";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const AboutCard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card sx={{ minWidth: 275, backgroundColor: "#262525" }}>
      <CardContent>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item container justifyContent="center">
            <Grid item>
              <CircleIcon sx={{ fontSize: 100, color: "#eb8820" }} />
            </Grid>
          </Grid>
          <Divider sx={{ m: 1 }} />

          <Grid item>
            <Typography variant="p">Bitcoin (BTC)</Typography>
          </Grid>
          <Grid item sx={{ mt: 1 }}>
            <Stack direction="row" spacing={1}>
              <CButtonPrimary variant="contained" size="small">
                RANK: {`1`}
              </CButtonPrimary>
              <CButtonPrimary variant="contained" size="small">
                COIN
              </CButtonPrimary>
              <CButtonPrimary variant="contained" size="small">
                MINEABLE
              </CButtonPrimary>
            </Stack>
          </Grid>
          <Divider sx={{ m: 2 }} />
          <Grid item>
            <Stack direction="row" spacing={3}>
              <Stack
                alignItems="center"
                justifyContent="center"
                direction="row"
                sx={{ color: "red" }}
                spacing={1}
              >
                <Typography>{`1.37%`}</Typography>
                <ArrowDownwardIcon />
              </Stack>
              <Divider />
              <Divider />
              <Stack justifyContent="center" alignItems="center">
                <Typography
                  variant="p"
                  sx={{ fontSize: "25px", fontWeight: "bold" }}
                >
                  ${`8,357.65`}USD
                </Typography>
                <Typography variant="subtitle2">{`1.000000000`}BTC</Typography>
              </Stack>
              <Divider />
              <Stack
                alignItems="center"
                justifyContent="center"
                direction="row"
                spacing={1}
                color="#4eb929"
              >
                <Typography variant="subtitle1">{`1.37%`}</Typography>
                <ArrowUpwardIcon />
              </Stack>
            </Stack>
          </Grid>

          <Divider sx={{ m: 1 }} />
          <Grid item>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="icon position tabs example"
            >
              <Tab
                icon={<WebhookIcon sx={{ color: "#d5dde1" }} />}
                iconPosition="start"
                label="Website"
                sx={{ color: "#6c6d6e" }}
              />
              <Tab
                icon={<SearchIcon sx={{ color: "#d5dde1" }} />}
                iconPosition="start"
                label="Explorer"
                sx={{ color: "#6c6d6e" }}
              />
              <Tab
                icon={<MessageIcon sx={{ color: "#d5dde1" }} />}
                iconPosition="start"
                label="Message Board"
                sx={{ color: "#6c6d6e" }}
              />
              <Tab
                icon={<CodeIcon sx={{ color: "#d5dde1" }} />}
                iconPosition="start"
                label="Source Code"
                sx={{ color: "#6c6d6e" }}
              />
            </Tabs>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default AboutCard;
