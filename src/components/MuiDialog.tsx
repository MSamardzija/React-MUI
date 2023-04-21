import React from 'react'
import {
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material'

export const MuiDialog = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <DialogContent>
        <Dialog
          aria-labelledby='dialog-title'
          aria-describedby='dialog-description'
          open={open}
          onClose={() => setOpen(false)}
        >
          <DialogTitle id='dialog-title'>Submit the test ?</DialogTitle>
          <DialogContent>
            <DialogContentText id='dialog-description'>
              Are you sure you want to submit the test ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={() => setOpen(false)}>
              Submit
            </Button>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </DialogContent>
    </>
  )
}
