import React from "react";
import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon  from "@mui/icons-material/FormatUnderlined";

function MuiButton() {

  const [format, setFormat] = React.useState<string[]>([]);
  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updateFormats: string[]) => {
    console.log(format);
    setFormat(updateFormats);
  }
  return (
    <Stack spacing={4}>
      {/* Button variants */}
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outline</Button>
      </Stack>
      {/* Button Colors */}
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">primary</Button>
        <Button variant="contained" color="secondary">secondary</Button>
        <Button variant="contained" color="success">success</Button>
        <Button variant="contained" color="error">error</Button>
        <Button variant="contained" color="info">info</Button>
        <Button variant="contained" color="warning">warning</Button>
      </Stack>
      {/* Button size */}
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">medium</Button>
        <Button variant="contained" size="large">Large</Button>
      </Stack>
      {/* Icons */}
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon/>} onClick={()=> alert("Idemo")}>Send me</Button>
        <Button variant="contained" endIcon={<SendIcon/>} disableRipple>Send me</Button>
        <IconButton>
          <SendIcon color="primary"/>
        </IconButton>
      </Stack>
      {/* ButtonGroup */}
      <Stack direction="row">
        <ButtonGroup variant="contained" orientation="vertical" size="small" color="secondary" aria-label="alignment button group">
          <Button onClick={()=>alert("Left click")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      {/* Toggle Button */}
      <Stack direction="row">
        <ToggleButtonGroup aria-label="text formatting" value={format} onChange={handleFormatChange}>
          <ToggleButton value="bold"><FormatBoldIcon/></ToggleButton>
          <ToggleButton value="italic"><FormatItalicIcon/></ToggleButton>
          <ToggleButton value="underlined"><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MuiButton;
