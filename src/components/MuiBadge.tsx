import React from 'react'
import { Stack, Badge, Typography } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export const MuiBadge = () => {
  return (
    <Stack p={5} spacing={2} direction='row'>
      <Badge badgeContent={5} color='primary'>
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color='secondary' showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color='secondary'>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} max={999} color='secondary'>
        <MailIcon />
      </Badge>
      {/* Somehting has changed without count value */}
      <Badge variant='dot' color='primary'>
        <MailIcon />
      </Badge>
    </Stack>
  )
}
