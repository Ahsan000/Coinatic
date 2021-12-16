import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectItem = ({ name }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          id="demo-simple-select-filled-label"
          style={{ fontSize: "12px", color: "#6c6d6e" }}
        >
          {name}
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          sx={{ backgroundColor: "#d5dde1" }}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10} style={{ fontSize: "12px", color: "#6c6d6e" }}>
            Ten
          </MenuItem>
          <MenuItem value={20} style={{ fontSize: "12px", color: "#6c6d6e" }}>
            Twenty
          </MenuItem>
          <MenuItem value={30} style={{ fontSize: "12px", color: "#6c6d6e" }}>
            Thirty
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default SelectItem;
