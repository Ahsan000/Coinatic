import React, { useState, useEffect } from "react";
import CircleIcon from "@mui/icons-material/Circle";

const CoinIcon = () => {
  const [hex, setHex] = useState("#ffffff");
  const randomizedHex = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomColor);
  };
  useEffect(() => {
    randomizedHex();
  }, []);
  return <CircleIcon sx={{ fontSize: "50px", color: `${hex}` }} />;
};

export default CoinIcon;
