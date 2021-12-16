import React from "react";
import { Chart } from "react-chartjs-2";
import faker from "faker";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Stack, Typography, Box, TextField, Paper } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import CustomTabs from "../tabs/Tabs";
import {
  CButtonPrimary,
  CPaperChart,
} from "../styledComponents/StyledComponents";
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
    {
      type: "bar",
      label: "Dataset 2",
      backgroundColor: "rgb(75, 192, 192)",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Dataset 3",
      backgroundColor: "rgb(53, 162, 235)",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
  ],
};
const SingleCurrencyChart = () => {
  const [value, setValue] = React.useState([null, null]);

  return (
    <Paper
      className="chartContainer"
      style={{ width: "850px", height: "525px" }}
    >
      <CustomTabs />
      <Chart type="bar" data={data} />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        sx={{ mt: 3 }}
      >
        <Typography variant="p">Sort: </Typography>
        <CButtonPrimary variant="contained" size="small">
          Hour{" "}
        </CButtonPrimary>
        <CButtonPrimary variant="contained" size="small">
          Day{" "}
        </CButtonPrimary>
        <CButtonPrimary variant="contained" size="small">
          Week{" "}
        </CButtonPrimary>
        <CButtonPrimary variant="contained" size="small">
          Month{" "}
        </CButtonPrimary>
        <CButtonPrimary variant="contained" size="small">
          Year{" "}
        </CButtonPrimary>
        <CButtonPrimary variant="contained" size="small">
          All{" "}
        </CButtonPrimary>
        <Paper
          className="dateContainer"
          sx={{
            color: "#d5dde1",
            backgroundColor: "#1c1b1b",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="From"
              endText="To"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <TextField
                    {...startProps}
                    color="primary"
                    variant="filled"
                    sx={{ backgroundColor: "#e2ebef", color: "green" }}
                  />
                  <Box sx={{ mx: 2 }}>
                    <DoubleArrowIcon />
                  </Box>
                  <TextField
                    {...endProps}
                    color="primary"
                    variant="filled"
                    sx={{ backgroundColor: "#e2ebef", color: "green" }}
                  />
                </Stack>
              )}
            />
          </LocalizationProvider>
        </Paper>
      </Stack>
    </Paper>
  );
};

export default SingleCurrencyChart;
