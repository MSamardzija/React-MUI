import React from "react";
import { Typography, Stack, TextField, InputAdornment } from "@mui/material";

export const MuiTextField = () => {
    const [value, setValue] = React.useState("");
  return (
    <Stack spacing={4}>
      {/* Different styles */}
      <Typography variant="body1" color="primary"> Different styles</Typography>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      {/* Different colors & size */}
      <Typography variant="body1" color="primary"> Colors & size</Typography>
      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" size="small" color="secondary" />
        <TextField label="Name" size="medium" variant="outlined" color="success" />
      </Stack>
      {/* Required prop */}
      <Typography variant="body1" color="primary"> Required & helperText and other</Typography>
      <Stack direction="row" spacing={2}>
        <TextField label="Form input" required color="secondary" />
        <TextField label="Form input" helperText="Do not share your password !" color="secondary" />
        <TextField label="Password" type="password" color="secondary" />
        <TextField label="Disabled" disabled color="secondary" />
        <TextField label="ReadOnly" value="wow" inputProps={{readOnly:true}} color="secondary" />
      </Stack>
      {/* Fixed values in inputs (%, $, #, etc) */}
      <Typography variant="body1" color="primary">Fixed values in inputs (%, $, #, etc)</Typography>
      <Stack direction="row" spacing={2}>
        <TextField label="Amount" InputProps={{
            startAdornment:<InputAdornment position="start">$</InputAdornment>
        }}/>  
        <TextField label="Weight" InputProps={{
            endAdornment:<InputAdornment position="end">kg</InputAdornment>
        }}/>  
      </Stack>
      {/* Error */}
      <TextField 
        label="Error" 
        value={value} 
        onChange={e => setValue(e.target.value)} 
        error={!value} 
        helperText={!value ? "Required" : "Do not share your password with anyone"} 
        color="secondary" 
      />
    </Stack>
  );
};
