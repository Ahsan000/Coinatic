import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Stack } from "@mui/material";

export default function ExchangeTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <Box sx={{ width: "100%", typography: "body1" }}>
    <TabContext value={value}>
      {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}> */}
      {/* <Stack direction="row" justifyContent="center"> */}
      <TabList
        onChange={handleChange}
        fullWidth
        aria-label="lab API tabs example"
      >
        <Tab label="Buy" value="1" sx={{ color: "#6d6e6f" }} />
        <Tab label="Sell" value="2" sx={{ color: "#6d6e6f" }} />
      </TabList>
      {/* </Stack> */}
      {/* </Box> */}
      {/* <TabPanel value="1">Buy</TabPanel>
        <TabPanel value="2">Sell</TabPanel> */}
    </TabContext>
    // </Box>
  );
}
