import React from 'react'
import { Stack, Button, Snackbar } from '@mui/material'

export const MuiSnackbar = () => {
  const [open, setOpen] = React.useState(false)
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return
    setOpen(false)
  }
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        message='form submitted'
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      ></Snackbar>
    </>
  )
}
