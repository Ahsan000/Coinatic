import React from "react";
import LowerFooter from "./LowerFooter";
import UpperFooter from "./UpperFooter";
import Divider from "@mui/material/Divider";

const MainFooter = () => {
  return (
    <div>
      <UpperFooter />
      <Divider />
      <LowerFooter />
    </div>
  );
};

export default MainFooter;
