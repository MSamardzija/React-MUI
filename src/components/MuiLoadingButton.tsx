import React from 'react'
import { Box, Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'

export const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} p={5} direction='row'>
      <LoadingButton variant='outlined'>Submit</LoadingButton>
      <LoadingButton variant='outlined' loading>
        Submit
      </LoadingButton>
      <LoadingButton variant='outlined' loadingIndicator='Loading'>
        Fetch Data
      </LoadingButton>
      <LoadingButton variant='outlined' loadingIndicator='Loading' loading>
        Fetch Data
      </LoadingButton>
    </Stack>
  )
}
