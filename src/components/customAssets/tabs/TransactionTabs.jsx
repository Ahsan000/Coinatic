import React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import HandymanIcon from "@mui/icons-material/Handyman";
import EventNoteIcon from "@mui/icons-material/EventNote";
import GroupsIcon from "@mui/icons-material/Groups";

import { Tabs, Tab } from "@mui/material";
const TransactionTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs
        sx={{ m: 1 }}
        value={value}
        onChange={handleChange}
        aria-label="icon position tabs example"
      >
        <Tab
          sx={{ fontSize: "11px", color: "#6c6d6e" }}
          iconPosition="start"
          label="All Transactions"
        />
        <Tab
          sx={{ fontSize: "11px", color: "#6c6d6e" }}
          iconPosition="start"
          label="Markets"
        />
        <Tab
          sx={{ fontSize: "11px", color: "#6c6d6e" }}
          iconPosition="start"
          label="Sent"
        />
        <Tab
          sx={{ fontSize: "11px", color: "#6c6d6e" }}
          iconPosition="start"
          label="Recieved"
        />
        <Tab
          sx={{ fontSize: "11px", color: "#6c6d6e" }}
          iconPosition="start"
          label="Buy/Sell"
        />
        <Tab
          sx={{ fontSize: "11px", color: "#6c6d6e" }}
          iconPosition="start"
          label="Exchanged"
        />
      </Tabs>
    </div>
  );
};

export default TransactionTabs;
