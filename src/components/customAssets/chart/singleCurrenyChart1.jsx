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

import { Button, Stack, Typography, Box, TextField } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import CustomTabs from "../tabs/Tabs";
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
const SingleCurrencyChart1 = () => {
  const [value, setValue] = React.useState([null, null]);

  return (
    <div className="chartContainer" style={{ width: "700px", height: "400px" }}>
      <CustomTabs />
      <Chart type="bar" data={data} />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        sx={{ mt: 1 }}
      >
        <Typography>Sort: </Typography>
        <Button variant="contained" size="small">
          Hour{" "}
        </Button>
        <Button variant="contained" size="small">
          Day{" "}
        </Button>
        <Button variant="contained" size="small">
          Week{" "}
        </Button>
        <Button variant="contained" size="small">
          Month{" "}
        </Button>
        <Button variant="contained" size="small">
          Year{" "}
        </Button>
        <Button variant="contained" size="small">
          All{" "}
        </Button>
        <div className="dateContainer">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="From"
              endText="To"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}>
                    <DoubleArrowIcon />
                  </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
        </div>
      </Stack>
    </div>
  );
};

export default SingleCurrencyChart1;
