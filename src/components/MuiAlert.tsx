import React from 'react'
import { Stack, Alert, AlertTitle, Button } from '@mui/material'

export const MuiAlert = () => {
  return (
    <Stack spacing={2} p={5}>
      <Alert severity='error'>This is an error alert</Alert>
      <Alert severity='warning'>This is an warning alert</Alert>
      <Alert severity='info'>This is an info alert</Alert>
      <Alert severity='success'>This is an success alert</Alert>

      <Alert variant='outlined' severity='error'>
        This is an error alert
      </Alert>
      <Alert variant='outlined' severity='warning'>
        This is an warning alert
      </Alert>
      <Alert variant='outlined' severity='info'>
        This is an info alert
      </Alert>
      <Alert variant='outlined' severity='success'>
        This is an success alert
      </Alert>

      <Alert
        variant='filled'
        severity='error'
        onClose={() => alert('Close Alert')}
      >
        <AlertTitle>Hey its me alertTitle</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant='filled' severity='warning'>
        <AlertTitle>Warning</AlertTitle>
        This is an warning alert
      </Alert>
      <Alert variant='filled' severity='info'>
        This is an info alert
      </Alert>
      <Alert
        variant='filled'
        severity='success'
        action={
          <Button color='inherit' size='small'>
            UNDO
          </Button>
        }
      >
        This is an success alert
      </Alert>
    </Stack>
  )
}
