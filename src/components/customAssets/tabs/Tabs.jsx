import React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import HandymanIcon from "@mui/icons-material/Handyman";
import EventNoteIcon from "@mui/icons-material/EventNote";
import GroupsIcon from "@mui/icons-material/Groups";

import { Tabs, Tab } from "@mui/material";
const CustomTabs = () => {
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
          icon={<BarChartIcon />}
          sx={{ color: "#6c6d6e" }}
          iconPosition="start"
          label="Charts"
        />
        <Tab
          sx={{ color: "#6c6d6e" }}
          icon={<CompareArrowsIcon />}
          iconPosition="start"
          label="Markets"
        />
        <Tab
          icon={<GroupsIcon />}
          sx={{ color: "#6c6d6e" }}
          iconPosition="start"
          label="Social"
        />
        <Tab
          icon={<HandymanIcon />}
          iconPosition="start"
          label="Tools"
          sx={{ color: "#6c6d6e" }}
        />
        <Tab
          sx={{ color: "#6c6d6e" }}
          icon={<EventNoteIcon />}
          iconPosition="start"
          label="Historical Data"
        />
      </Tabs>
    </div>
  );
};

export default CustomTabs;
