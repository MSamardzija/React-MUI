import React from 'react'
import { Box, CircularProgress, LinearProgress, Stack } from '@mui/material'

export const MuiProgress = () => {
  return (
    <Stack spacing={2} p={2}>
      <CircularProgress />
      <CircularProgress color='success' />
      <CircularProgress variant='determinate' value={60} />

      <LinearProgress />
      <LinearProgress color='success' />
      <LinearProgress variant='determinate' value={60} />
    </Stack>
  )
}
