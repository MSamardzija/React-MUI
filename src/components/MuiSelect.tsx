import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelect = () => {
  const [contry, setContry] = React.useState("");
  const [contries, setContries] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setContries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px">
      <TextField
        label="Select country"
        fullWidth
        select
        value={contries}
        onChange={handleChange}
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
